# VisionGrid Serverless Deployment Guide

## 🚀 Vercel Deployment

### Prerequisites
- GitHub account
- Vercel account (free tier works)
- Repository pushed to GitHub

### Step 1: Connect Repository to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository root directory

### Step 2: Configure Build Settings
Vercel will auto-detect the configuration from `vercel.json`, but verify:

- **Framework Preset**: Vite
- **Root Directory**: `./` (project root)
- **Build Command**: `cd frontend && npm run build`
- **Output Directory**: `frontend/dist`

### Step 3: Environment Variables
In Vercel dashboard, add these environment variables:

```
ADMIN_PASSWORD=your_secure_password_here
NODE_ENV=production
```

### Step 4: Deploy
Click "Deploy" - Vercel will:
1. Install dependencies
2. Build the frontend
3. Deploy serverless functions
4. Provide a live URL

## 🔧 Local Development Setup

### API Endpoints Status
All API endpoints are configured for serverless deployment with local fallbacks:

#### ✅ Contact Form (`/api/contact`)
- **Production**: Saves to JSON file in serverless environment
- **Local**: Shows success message with form data logged to console
- **Fallback**: Always works, graceful degradation

#### ✅ Admin Panel (`/api/admin`)
- **Production**: Full authentication and data management
- **Local**: Mock authentication with password `admin123`
- **Fallback**: Interface works, shows empty state

#### ✅ Chatbot (`/api/chatbot`)
- **Production**: Uses server-side knowledge base processing
- **Local**: Uses client-side knowledge base from `/public/chatbot-knowledge.json`
- **Fallback**: Always functional with comprehensive responses

### Local Testing
```bash
cd frontend
npm install
npm run dev
```

All features work locally with appropriate fallbacks:
- Contact form submission ✅
- Admin panel login (password: `admin123`) ✅
- Chatbot responses ✅

## 📁 File Structure for Serverless

```
visiongrid-serverless/
├── api/                    # Serverless functions
│   ├── contact.ts         # Contact form handler
│   ├── admin.ts           # Admin panel API
│   └── chatbot.ts         # Chatbot responses
├── data/                  # Server-side data
│   └── chatbot-knowledge.json
├── frontend/              # Vue.js application
│   ├── public/
│   │   └── chatbot-knowledge.json  # Client-side fallback
│   └── src/
├── vercel.json           # Deployment configuration
└── package.json          # Root dependencies
```

## 🔄 API Configuration

### Automatic API Detection
The app automatically detects the environment:

- **Vercel**: Uses `/api/*` endpoints (same origin)
- **Local Dev**: Uses `/api/*` with fallbacks
- **Production**: Uses same-origin API calls

### No Backend Server Required
This is a **pure serverless** setup:
- No Express server
- No database setup
- No Docker containers
- Just deploy and it works!

## 🛠 Customization

### Update Chatbot Knowledge
Edit `/data/chatbot-knowledge.json` and redeploy:
- Services and pricing
- FAQ responses
- Company information
- Keywords for better matching

### Admin Password
Set `ADMIN_PASSWORD` environment variable in Vercel dashboard.

### Contact Form Data
Contact submissions are stored in `/data/inquiries.json` in the serverless environment.

## 🚨 Troubleshooting

### Build Fails
- Check `package.json` dependencies
- Ensure `frontend/` directory structure is correct
- Verify `vercel.json` configuration

### API Not Working
- Check environment variables in Vercel
- Verify function paths in `vercel.json`
- Check browser console for CORS errors

### Chatbot Not Responding
- Ensure `/data/chatbot-knowledge.json` exists
- Check `/frontend/public/chatbot-knowledge.json` for local fallback
- Verify JSON syntax is valid

## ✅ Pre-Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] `vercel.json` configured correctly
- [ ] Environment variables ready
- [ ] Knowledge base files in place
- [ ] Local testing completed
- [ ] All API endpoints have fallbacks

## 🎯 Post-Deployment

After successful deployment:
1. Test contact form submission
2. Verify admin panel login
3. Test chatbot responses
4. Check all pages load correctly
5. Test on mobile devices

Your VisionGrid website will be live and fully functional with:
- Contact form with email notifications
- Admin panel for managing inquiries
- AI chatbot with comprehensive knowledge base
- Responsive design for all devices