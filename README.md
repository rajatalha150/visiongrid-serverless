# VisionGrid Serverless Website 🚀

> **A complete serverless security solutions website with AI chatbot, admin panel, and modern responsive design**

Built with Vue.js 3 + TypeScript frontend and Vercel serverless functions. Features a comprehensive AI chatbot, admin panel for managing inquiries, and professional responsive design matching the original VisionGrid branding.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rajatalha150/visiongrid-serverless)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?logo=vercel)](https://vercel.com)

## 🎆 Key Features

### 📱 Frontend
- **Vue.js 3** with Composition API and TypeScript
- **Responsive Design** - Mobile-first approach matching original branding
- **Modern UI/UX** - Smooth animations, hover effects, and professional styling
- **Component Architecture** - Reusable, maintainable Vue components

### 🤖 AI Chatbot System
- **Smart Responses** - Keyword-based intelligent response system
- **Comprehensive Knowledge Base** - Services, pricing, FAQ, company info
- **Easy Customization** - JSON-based knowledge management
- **Local Fallback** - Works offline during development

### 🛠️ Admin Panel
- **Secure Authentication** - Password-protected admin access
- **Inquiry Management** - View, update, and track contact submissions
- **Statistics Dashboard** - Real-time stats and analytics
- **Status Tracking** - New/Contacted/Closed inquiry workflow

### 🚀 Serverless Architecture
- **Vercel Functions** - No server management required
- **JSON Storage** - File-based data storage (no database setup)
- **Auto-scaling** - Handles traffic spikes automatically
- **Global CDN** - Fast loading worldwide

## 📁 Project Structure

```
visiongrid-serverless/
├── api/                    # 🚀 Serverless Functions (Vercel)
│   ├── contact.ts         # Contact form submission handler
│   ├── admin.ts           # Admin panel authentication & data
│   └── chatbot.ts         # AI chatbot response engine
├── data/                  # 💾 Server-side Data Storage
│   ├── chatbot-knowledge.json  # Chatbot knowledge base
│   └── inquiries.json     # Contact form submissions
├── frontend/              # 📱 Vue.js Application
│   ├── src/
│   │   ├── components/    # Reusable Vue components
│   │   ├── views/         # Page components (Home, Admin, etc.)
│   │   ├── utils/         # API utilities and helpers
│   │   ├── composables/   # Vue composition functions
│   │   └── assets/        # CSS and styling
│   ├── public/            # Static assets and fallback data
│   └── package.json       # Frontend dependencies
├── vercel.json           # ⚙️ Vercel deployment configuration
├── package.json          # Root project configuration
└── README.md             # This file
```

## 🚀 Quick Start

### 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/rajatalha150/visiongrid-serverless.git
cd visiongrid-serverless

# Install frontend dependencies
cd frontend
npm install

# Start development server
npm run dev
```

**That's it!** 🎉 The website will be available at `http://localhost:5173`

- ✅ **Contact Form**: Works with local fallback
- ✅ **Admin Panel**: Login with password `admin123`
- ✅ **Chatbot**: Fully functional with knowledge base
- ✅ **All Features**: Work without any backend setup

### 🌐 Deploy to Vercel

**Option 1: One-Click Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rajatalha150/visiongrid-serverless)

**Option 2: Manual Deploy**

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables:
   ```
   ADMIN_PASSWORD=your_secure_password
   NODE_ENV=production
   ```
4. Deploy! 🚀

### ⚙️ Environment Variables

**Required for Production:**
```bash
ADMIN_PASSWORD=your_secure_password_here
NODE_ENV=production
```

**Optional for Development:**
```bash
VITE_API_URL=  # Leave empty for serverless
VITE_DEV_MODE=true
```

## Database Configuration

### SQLite (Default)
The application uses SQLite by default, which requires no additional setup. The database file will be created automatically.

### PostgreSQL Migration
To switch to PostgreSQL:

1. Install PostgreSQL dependencies:
```bash
cd backend
npm install pg @types/pg
```

2. Update your `.env` file:
```env
DATABASE_TYPE=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=visiongrid
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
```

3. Create the database in PostgreSQL
4. Restart the backend server

## Admin Panel

Access the admin panel at `/admin` with the password configured in your `.env` file:
- Default password: `admin123`
- View all contact inquiries
- Update inquiry status (new/contacted/closed)
- View statistics dashboard

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact inquiry

### Admin Panel
- `POST /api/admin/auth` - Admin authentication
- `GET /api/admin/inquiries` - Get all inquiries
- `PATCH /api/admin/inquiries/:id/status` - Update inquiry status
- `GET /api/admin/stats` - Get inquiry statistics

### Chatbot
- `POST /api/chatbot` - Send message to chatbot and get response

## Deployment

### Vercel Deployment

1. **Prepare for Vercel**
   - The project is configured to work with Vercel
   - Database will automatically switch to external PostgreSQL in production

2. **Deploy Frontend**
   - Connect your repository to Vercel
   - Set build command: `npm run build`
   - Set output directory: `dist`

3. **Deploy Backend**
   - Deploy backend separately or use serverless functions
   - Configure PostgreSQL database connection

4. **Environment Variables**
   - Set all required environment variables in Vercel dashboard
   - Update `FRONTEND_URL` to your production domain

## Technology Stack

### Frontend
- Vue.js 3
- TypeScript
- Vue Router
- Pinia (State Management)
- Vite (Build Tool)
- CSS3 with Custom Properties

### Backend
- Node.js
- Express.js
- TypeScript
- SQLite/PostgreSQL
- CORS support

## Features Implementation

### Original Site Matching
- ✅ Exact color scheme (#ffc03d, #212d45)
- ✅ Typography (Inter font family)
- ✅ Responsive layout
- ✅ Navigation structure
- ✅ Hero section with call-to-action
- ✅ Services overview
- ✅ About section with company info
- ✅ Contact form
- ✅ Footer with company details

### Additional Features
- ✅ Admin panel for inquiry management
- ✅ AI chatbot with customizable knowledge base
- ✅ Database abstraction for easy migration
- ✅ TypeScript throughout
- ✅ Mobile-responsive design
- ✅ Form validation
- ✅ Loading states and error handling

## Security Features

- Input validation and sanitization
- SQL injection protection
- CORS configuration
- Basic admin authentication
- Environment variable configuration

## Support

For technical support or questions about the implementation, please refer to the documentation or create an issue in the repository.