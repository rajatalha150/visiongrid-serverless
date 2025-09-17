import { VercelRequest, VercelResponse } from '@vercel/node'
import { promises as fs } from 'fs'
import path from 'path'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  history?: ChatMessage[]
}

const KNOWLEDGE_FILE = path.join(process.cwd(), 'data', 'chatbot-knowledge.json')

async function loadKnowledge() {
  try {
    const data = await fs.readFile(KNOWLEDGE_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return {}
  }
}

function generateResponse(message: string, knowledge: any): string {
  const msg = message.toLowerCase()
  
  // Check for keyword matches
  const checkKeywords = (keywords: string[], text: string): boolean => {
    return keywords.some(keyword => text.includes(keyword.toLowerCase()))
  }
  
  // Greeting responses
  if (knowledge.keywords?.greetings && checkKeywords(knowledge.keywords.greetings, msg)) {
    return knowledge.responses?.greeting || "Hello! I'm VisionGrid's virtual assistant. I can help you with information about our security services, pricing, appointments, and more. What would you like to know?"
  }
  
  // Service inquiries
  if (knowledge.keywords?.services && checkKeywords(knowledge.keywords.services, msg)) {
    const services = Object.values(knowledge.services || {}).map((s: any) => s.name).join(', ')
    return `VisionGrid offers comprehensive security solutions including: ${services}. We have ${knowledge.company?.experience} of experience with ${knowledge.company?.installations} installations completed. Which service interests you most?`
  }
  
  // Check specific service keywords
  for (const [serviceKey, service] of Object.entries(knowledge.services || {})) {
    const serviceData = service as any
    if (serviceData.keywords && checkKeywords(serviceData.keywords, msg)) {
      const features = serviceData.features?.join(', ') || ''
      const pricing = Object.values(serviceData.pricing || {}).filter((p: any) => p !== 'Custom quote').join(' to ') || 'Contact for pricing'
      return `Our ${serviceData.name} service includes: ${features}. Pricing ranges from ${pricing}. Would you like to schedule a free consultation?`
    }
  }
  
  // Pricing inquiries
  if (knowledge.keywords?.pricing && checkKeywords(knowledge.keywords.pricing, msg)) {
    const services = knowledge.services || {}
    let pricing = 'Our pricing varies by service:\\n\\n'
    Object.values(services).forEach((service: any) => {
      const prices = Object.values(service.pricing || {}).filter((p: any) => p !== 'Custom quote')
      if (prices.length > 0) {
        pricing += `• ${service.name}: ${prices.join(' to ')}\\n`
      }
    })
    pricing += '\\nAll prices include professional installation. We offer free consultations to provide accurate quotes for your specific needs.'
    return pricing
  }
  
  // Appointment/consultation
  if (knowledge.keywords?.appointment && checkKeywords(knowledge.keywords.appointment, msg)) {
    const appt = knowledge.appointments?.consultation
    if (appt) {
      return `We offer ${appt.type} lasting ${appt.duration}. ${appt.description}. We're available ${appt.availability}. ${knowledge.responses?.contact_redirect || 'You can schedule through our contact form.'}`
    }
  }
  
  // Process/how it works
  if (msg.includes('process') || msg.includes('how it works') || msg.includes('steps')) {
    const process = knowledge.process || []
    const steps = process.map((p: any) => `${p.step}. ${p.title}: ${p.description}`).join('\\n')
    return `Our installation process follows these steps:\\n\\n${steps}\\n\\nWould you like to start with a free consultation?`
  }
  
  // Warranty/support
  if (knowledge.keywords?.warranty && checkKeywords(knowledge.keywords.warranty, msg)) {
    const warranty = knowledge.warranty
    if (warranty) {
      return `We provide comprehensive coverage: ${warranty.equipment}, ${warranty.installation}, and ${warranty.support}. Our team offers ${knowledge.company?.support} for all customers.`
    }
  }
  
  // Contact information
  if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('reach')) {
    const contact = knowledge.contact
    if (contact) {
      return `${contact.phone}. ${contact.email}. ${contact.response_time}. For existing customers, we provide ${contact.emergency_support}.`
    }
  }
  
  // Enhanced FAQ responses with keyword matching
  const faq = knowledge.faq || []
  for (const item of faq) {
    if (item.keywords && checkKeywords(item.keywords, msg)) {
      return item.answer
    }
    // Fallback to question matching
    if (msg.includes(item.question.toLowerCase().split(' ').slice(0, 3).join(' '))) {
      return item.answer
    }
  }
  
  // Special offers
  if (msg.includes('promotion') || msg.includes('discount') || msg.includes('deal') || msg.includes('offer')) {
    const offers = knowledge.special_offers
    if (offers) {
      return `${offers.current_promotions} We also have a ${offers.referral_program.toLowerCase()}. ${offers.maintenance_plans}.`
    }
  }
  
  // Equipment brands
  if (msg.includes('brand') || msg.includes('equipment') || msg.includes('manufacturer')) {
    const brands = knowledge.equipment_brands
    if (brands) {
      return `We work with top-quality brands including: Cameras (${brands.cameras?.join(', ')}), Networking (${brands.networking?.join(', ')}), Security Systems (${brands.security_systems?.join(', ')}), and Audio/Video (${brands.audio_video?.join(', ')}).`
    }
  }
  
  // Default response
  return knowledge.responses?.default || `I'd be happy to help you with information about VisionGrid's security services! I can assist with service details, pricing, scheduling consultations, installation process, warranty information, and technical questions. What specific information are you looking for?`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    const { message }: ChatRequest = req.body

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required' })
    }

    const knowledge = await loadKnowledge()
    const response = generateResponse(message.trim(), knowledge)

    res.status(200).json({
      response,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chatbot error:', error)
    res.status(500).json({
      error: 'Sorry, I encountered an error. Please try again or use our contact form for assistance.'
    })
  }
}