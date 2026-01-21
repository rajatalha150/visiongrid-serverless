import { VercelRequest, VercelResponse } from '@vercel/node'
import { getInquiries, updateInquiryStatus } from './db'

interface InquiryStats {
  total: number
  new: number
  contacted: number
  closed: number
}

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

function authenticateAdmin(req: VercelRequest): boolean {
  const password = req.headers.authorization?.toString().replace('Bearer ', '')
  return password === ADMIN_PASSWORD
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const { action, id } = req.query

  // Handle authentication endpoint
  if (req.method === 'POST' && action === 'auth') {
    const { password } = req.body
    if (password === ADMIN_PASSWORD) {
      return res.json({ success: true, token: ADMIN_PASSWORD })
    }
    return res.status(401).json({ error: 'Invalid password' })
  }

  // Authenticate for all other endpoints
  if (!authenticateAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const inquiries = await getInquiries()

    // Get inquiries with pagination
    if (req.method === 'GET' && action === 'inquiries') {
      const page = parseInt(req.query.page as string) || 1
      const limit = parseInt(req.query.limit as string) || 20
      const offset = (page - 1) * limit

      // Note: In a real SQL query, we would use OFFSET/LIMIT in the SQL
      // But since our abstraction returns all rows for now (or local file), we slice here.
      // If the list gets huge, we should push pagination to db.ts.
      // For free tier/small scale, this is fine.
      const paginatedInquiries = inquiries
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(offset, offset + limit)

      const stats: InquiryStats = {
        total: inquiries.length,
        new: inquiries.filter(i => i.status === 'new').length,
        contacted: inquiries.filter(i => i.status === 'contacted').length,
        closed: inquiries.filter(i => i.status === 'closed').length
      }

      return res.json({
        inquiries: paginatedInquiries,
        stats,
        pagination: {
          page,
          limit,
          offset,
          total: inquiries.length
        }
      })
    }

    // Get stats only
    if (req.method === 'GET' && action === 'stats') {
      const stats: InquiryStats = {
        total: inquiries.length,
        new: inquiries.filter(i => i.status === 'new').length,
        contacted: inquiries.filter(i => i.status === 'contacted').length,
        closed: inquiries.filter(i => i.status === 'closed').length
      }

      return res.json(stats)
    }

    // Update inquiry status
    if (req.method === 'PATCH' && action === 'status' && id) {
      const inquiryId = parseInt(id as string)
      const { status } = req.body

      if (!['new', 'contacted', 'closed'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' })
      }

      const success = await updateInquiryStatus(inquiryId, status)
      
      if (!success) {
        return res.status(404).json({ error: 'Inquiry not found' })
      }

      return res.json({ message: 'Status updated successfully' })
    }

    return res.status(404).json({ error: 'Endpoint not found' })

  } catch (error) {
    console.error('Admin API error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}