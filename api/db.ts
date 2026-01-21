import { sql } from '@vercel/postgres'
import { promises as fs } from 'fs'
import path from 'path'

// Data types
export interface ContactInquiry {
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

// Local file path fallback
const DATA_FILE = path.join(process.cwd(), 'data', 'inquiries.json')

// Helper to check if we are in a Vercel Postgres environment
function hasPostgres(): boolean {
  return !!process.env.POSTGRES_URL
}

// --- File System Methods (Local Fallback) ---

async function ensureDataDirectory() {
  const dataDir = path.dirname(DATA_FILE)
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

async function readFileInquiries(): Promise<ContactInquiry[]> {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeFileInquiries(inquiries: ContactInquiry[]): Promise<void> {
  await ensureDataDirectory()
  await fs.writeFile(DATA_FILE, JSON.stringify(inquiries, null, 2))
}

// --- Database Operations ---

export async function getInquiries(): Promise<ContactInquiry[]> {
  if (hasPostgres()) {
    try {
      // Create table if not exists (lazy initialization for simplicity in this demo)
      // In a real prod env, you'd run a migration script.
      // We'll assume the table exists or handle the error gracefully? 
      // Better to just try selecting.
      const { rows } = await sql`SELECT * FROM inquiries ORDER BY created_at DESC;`
      return rows as ContactInquiry[]
    } catch (error) {
      console.error('Postgres error (getInquiries):', error)
      // If table doesn't exist, we might want to return empty or throw
      // For now, let's assume if it fails, we might need to fallback or just error
      throw error
    }
  } else {
    return readFileInquiries()
  }
}

export async function addInquiry(inquiry: Omit<ContactInquiry, 'id'>): Promise<ContactInquiry> {
  if (hasPostgres()) {
    try {
      const { rows } = await sql`
        INSERT INTO inquiries (name, email, phone, company, message, service, created_at, status)
        VALUES (${inquiry.name}, ${inquiry.email}, ${inquiry.phone || null}, ${inquiry.company || null}, ${inquiry.message}, ${inquiry.service || null}, ${inquiry.created_at}, ${inquiry.status})
        RETURNING *;
      `
      return rows[0] as ContactInquiry
    } catch (error: any) {
      // Auto-create table if it doesn't exist (Quick-start helper)
      if (error.code === '42P01') { // undefined_table
        console.log('Table not found, creating...')
        await sql`
          CREATE TABLE IF NOT EXISTS inquiries (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50),
            company VARCHAR(255),
            message TEXT NOT NULL,
            service VARCHAR(100),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            status VARCHAR(20) CHECK (status IN ('new', 'contacted', 'closed')) DEFAULT 'new'
          );
        `
        // Retry insert
        const { rows } = await sql`
          INSERT INTO inquiries (name, email, phone, company, message, service, created_at, status)
          VALUES (${inquiry.name}, ${inquiry.email}, ${inquiry.phone || null}, ${inquiry.company || null}, ${inquiry.message}, ${inquiry.service || null}, ${inquiry.created_at}, ${inquiry.status})
          RETURNING *;
        `
        return rows[0] as ContactInquiry
      }
      throw error
    }
  } else {
    const inquiries = await readFileInquiries()
    const newId = inquiries.length > 0 ? Math.max(...inquiries.map(i => i.id)) + 1 : 1
    const newInquiry = { ...inquiry, id: newId }
    inquiries.push(newInquiry)
    await writeFileInquiries(inquiries)
    return newInquiry
  }
}

export async function updateInquiryStatus(id: number, status: 'new' | 'contacted' | 'closed'): Promise<boolean> {
  if (hasPostgres()) {
    const result = await sql`
      UPDATE inquiries 
      SET status = ${status} 
      WHERE id = ${id};
    `
    return (result.rowCount ?? 0) > 0
  } else {
    const inquiries = await readFileInquiries()
    const index = inquiries.findIndex(i => i.id === id)
    if (index === -1) return false
    
    inquiries[index].status = status
    await writeFileInquiries(inquiries)
    return true
  }
}
