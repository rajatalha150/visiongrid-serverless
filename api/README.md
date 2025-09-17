# API Functions Documentation

This directory contains Vercel serverless functions that power the VisionGrid website backend.

## 📁 Function Overview

### `contact.ts` - Contact Form Handler
**Endpoint:** `POST /api/contact`

Handles contact form submissions from the website.

**Features:**
- ✅ Input validation and sanitization
- ✅ Email format validation
- ✅ Stores submissions in JSON file
- ✅ CORS headers for cross-origin requests
- ✅ Error handling with user-friendly messages

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "company": "ABC Corp",
  "service": "camera-installation",
  "message": "I need security cameras for my office..."
}
```

**Response:**
```json
{
  "message": "Your inquiry has been submitted successfully",
  "inquiryId": 123
}
```

### `admin.ts` - Admin Panel API
**Endpoints:**
- `POST /api/admin?action=auth` - Authentication
- `GET /api/admin?action=inquiries` - Get all inquiries
- `GET /api/admin?action=stats` - Get inquiry statistics
- `PATCH /api/admin?action=status&id=123` - Update inquiry status

**Features:**
- 🔐 Password-based authentication
- 📊 Inquiry management and statistics
- 🔄 Status updates (new/contacted/closed)
- 📄 Pagination support
- 🛡️ Authorization checks on all endpoints

**Authentication:**
```bash
# Login
curl -X POST /api/admin?action=auth \
  -H "Content-Type: application/json" \
  -d '{"password": "admin123"}'

# Use token in subsequent requests
curl -H "Authorization: Bearer <token>" /api/admin?action=inquiries
```

### `chatbot.ts` - AI Chatbot Engine
**Endpoint:** `POST /api/chatbot`

Processes user messages and returns intelligent responses based on the knowledge base.

**Features:**
- 🧠 Keyword-based response matching
- 📚 Comprehensive knowledge base integration
- 🎯 Context-aware responses
- 🔄 Fallback response system
- 📝 Conversation history support

**Request:**
```json
{
  "message": "What services do you offer?",
  "history": [
    {"role": "user", "content": "Hello"},
    {"role": "assistant", "content": "Hi! How can I help?"}
  ]
}
```

**Response:**
```json
{
  "response": "VisionGrid offers comprehensive security solutions including: Camera Installation, Networking Solutions, Home Security, Business Security, and Audio/Video Systems...",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🔧 Technical Implementation

### File Storage
All functions use JSON file storage in the `/data` directory:
- `inquiries.json` - Contact form submissions
- `chatbot-knowledge.json` - Chatbot knowledge base

### CORS Configuration
All functions include comprehensive CORS headers:
```typescript
res.setHeader('Access-Control-Allow-Credentials', 'true')
res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
res.setHeader('Access-Control-Allow-Headers', '...')
```

### Error Handling
Consistent error handling across all functions:
- Input validation
- Try-catch blocks
- User-friendly error messages
- Proper HTTP status codes

### Environment Variables
- `ADMIN_PASSWORD` - Admin panel password (default: admin123)
- `NODE_ENV` - Environment mode

## 🚀 Deployment Notes

These functions are automatically deployed to Vercel when you push to the repository. The `vercel.json` configuration handles:

- Function runtime settings
- Route mapping
- Build configuration

No additional setup required - just deploy and they work! 🎉