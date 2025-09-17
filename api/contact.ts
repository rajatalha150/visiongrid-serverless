import { VercelRequest, VercelResponse } from '@vercel/node'
import { promises as fs } from 'fs'
import path from 'path'

interface ContactInquiry {
  id: number
  name: string
  email: string
  phone?: string | null
  company?: string | null
  message: string
  service?: string | null
  created_at: string
  status: 'new' | 'contacted' | 'closed'
}

const DATA_FILE = path.join(process.cwd(), 'data', 'inquiries.json')

async function ensureDataDirectory() {
  const dataDir = path.dirname(DATA_FILE)
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function readInquiries(): Promise<ContactInquiry[]> {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeInquiries(inquiries: ContactInquiry[]): Promise<void> {
  await ensureDataDirectory()
  await fs.writeFile(DATA_FILE, JSON.stringify(inquiries, null, 2))
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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, company, message, service } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required fields'
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      })
    }

    if (message.length < 10) {
      return res.status(400).json({
        error: 'Message must be at least 10 characters long'
      })
    }

    // Read existing inquiries
    const inquiries = await readInquiries()
    
    // Create new inquiry
    const newInquiry: ContactInquiry = {
      id: inquiries.length > 0 ? Math.max(...inquiries.map(i => i.id)) + 1 : 1,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      message: message.trim(),
      service: service || null,
      created_at: new Date().toISOString(),
      status: 'new'
    }

    // Add to inquiries
    inquiries.push(newInquiry)
    
    // Save to file
    await writeInquiries(inquiries)

    res.status(201).json({
      message: 'Your inquiry has been submitted successfully',
      inquiryId: newInquiry.id
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    res.status(500).json({
      error: 'Internal server error. Please try again later.'
    })
  }
}