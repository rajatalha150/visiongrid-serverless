# VisionGrid - Serverless Version

This is the serverless version of VisionGrid, optimized for deployment on Vercel without requiring a database.

## Architecture Changes

### From Database to JSON Storage
- **Contact inquiries** are now stored in `/data/inquiries.json`
- **No database setup required** - everything runs serverless
- **Automatic file creation** - the data directory and file are created automatically

### Serverless API Routes
- `/api/contact.ts` - Handles contact form submissions
- `/api/admin.ts` - Handles admin authentication and inquiry management

## Deployment on Vercel

### 1. Prerequisites
- Vercel account
- GitHub repository with this code

### 2. Deploy Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Serverless VisionGrid ready for Vercel"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

3. **Environment Variables**:
   Set these in Vercel dashboard:
   ```
   ADMIN_PASSWORD=your_secure_password_here
   ```

4. **Deploy**:
   - Vercel will automatically build and deploy
   - Your site will be available at `https://your-project.vercel.app`

### 3. Configuration Files

- `vercel.json` - Vercel deployment configuration
- `package.json` - Root package with Vercel dependencies
- `frontend/.env` - Frontend environment variables

## Features

### Contact Form
- Serverless form submission
- JSON file storage
- Email validation
- Error handling

### Admin Panel
- Password-protected access
- View all inquiries
- Update inquiry status
- Statistics dashboard
- No database required

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   cd frontend && npm install
   ```

2. **Start development**:
   ```bash
   npm run dev
   ```

3. **Access the site**:
   - Frontend: `http://localhost:5173`
   - API routes work through Vite proxy

## Data Storage

### File Structure
```
/data/
  └── inquiries.json    # All contact inquiries
```

### Data Format
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "Example Corp",
    "message": "Interested in security solutions",
    "service": "cctv-installation",
    "created_at": "2024-01-15T10:30:00.000Z",
    "status": "new"
  }
]
```

## Admin Access

- **URL**: `/admin`
- **Default Password**: `admin123` (change in environment variables)
- **Features**:
  - View all inquiries
  - Update status (new/contacted/closed)
  - Statistics dashboard

## Security

- Admin password protection
- Input validation
- CORS configuration
- No sensitive data exposure

## Troubleshooting

### Common Issues

1. **API not working locally**:
   - Make sure you're running `npm run dev` from the root
   - Check that `/api` routes are accessible

2. **Data not persisting**:
   - Vercel automatically handles file persistence
   - Local development creates `/data` folder automatically

3. **Admin login failing**:
   - Check `ADMIN_PASSWORD` environment variable
   - Default is `admin123`

### Support

For issues with the serverless deployment, check:
- Vercel function logs
- Browser developer console
- Network tab for API calls