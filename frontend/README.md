# Frontend Application Documentation

Vue.js 3 + TypeScript frontend for the VisionGrid serverless website.

## 🏗️ Architecture Overview

### Tech Stack
- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Vue Router** - Client-side routing
- **Pinia** - State management (minimal usage)

### Component Structure

```
src/
├── components/           # 🧩 Reusable Components
│   ├── Navbar.vue       # Navigation header
│   ├── Footer.vue       # Site footer
│   ├── HeroSection.vue  # Homepage hero
│   ├── ServicesOverview.vue  # Services grid
│   ├── AboutSection.vue # Company information
│   ├── ContactForm.vue  # Contact form with validation
│   └── Chatbot.vue      # AI chatbot interface
├── views/               # 📄 Page Components
│   ├── HomeView.vue     # Homepage layout
│   ├── ServicesView.vue # Services detail page
│   ├── AboutView.vue    # About page
│   ├── ContactView.vue  # Contact page
│   ├── AdminView.vue    # Admin panel
│   ├── PrivacyView.vue  # Privacy policy
│   └── TermsView.vue    # Terms of service
├── composables/         # 🔄 Reusable Logic
│   ├── useDarkMode.ts   # Dark mode functionality
│   └── useScrollAnimation.ts  # Scroll animations
├── utils/               # 🛠️ Utilities
│   └── api.ts           # API communication helpers
└── assets/              # 🎨 Styling
    └── main.css         # Global styles and CSS variables
```

## 🎨 Design System

### CSS Architecture
- **CSS Custom Properties** - Consistent theming
- **Mobile-First** - Responsive design approach
- **Component Scoped** - Isolated component styles
- **Utility Classes** - Reusable styling patterns

### Color Palette
```css
:root {
  --color-primary: #ffc03d;    /* VisionGrid Yellow */
  --color-dark: #212d45;       /* VisionGrid Navy */
  --color-white: #ffffff;
  --color-gray: #6c757d;
  --color-gray-light: #f8f9fa;
}
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 900
- **Responsive Scaling**: Fluid typography

## 🔧 Key Features Implementation

### 1. Contact Form (`ContactForm.vue`)
**Features:**
- Real-time validation
- Email format checking
- Character counting
- Loading states
- Success/error messaging
- Local storage fallback

**API Integration:**
```typescript
// Production: Uses serverless function
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
})

// Development: Local storage fallback
localStorage.setItem('localInquiries', JSON.stringify(inquiries))
```

### 2. AI Chatbot (`Chatbot.vue`)
**Features:**
- Floating chat interface
- Typing indicators
- Message history
- Responsive design
- Knowledge base integration

**Smart Responses:**
```typescript
// Loads knowledge base from public folder
const knowledge = await fetch('/chatbot-knowledge.json')

// Generates contextual responses
const response = generateResponse(userMessage, knowledge)
```

### 3. Admin Panel (`AdminView.vue`)
**Features:**
- Secure authentication
- Inquiry management
- Status updates
- Statistics dashboard
- Modal message viewing

**Authentication Flow:**
```typescript
// Login with password
const response = await fetch('/api/admin?action=auth', {
  method: 'POST',
  body: JSON.stringify({ password })
})

// Store token for subsequent requests
localStorage.setItem('adminToken', token)
```

### 4. Responsive Navigation (`Navbar.vue`)
**Features:**
- Mobile hamburger menu
- Smooth transitions
- Active route highlighting
- Scroll-based styling

## 🚀 Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Configuration
```bash
# .env (optional)
VITE_API_URL=          # Leave empty for serverless
VITE_DEV_MODE=true     # Enable development features
```

### Code Quality
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking
- **Vue TSC** - Vue template type checking

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 480px)  { /* Small phones */ }
@media (max-width: 768px)  { /* Tablets */ }
@media (max-width: 1024px) { /* Small laptops */ }
@media (max-width: 1200px) { /* Large screens */ }
```

### Grid System
```css
.grid {
  display: grid;
  gap: var(--spacing-lg);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Auto-responsive */
.grid-auto { 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
}
```

## 🔄 State Management

### Minimal Pinia Usage
```typescript
// stores/counter.ts (example)
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
})
```

### Local State with Composition API
```typescript
// Component-level state
const isLoading = ref(false)
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Computed properties
const isFormValid = computed(() => 
  formData.name && formData.email && formData.message
)
```

## 🎯 Performance Optimizations

### Code Splitting
- Route-based code splitting
- Dynamic imports for heavy components
- Lazy loading for non-critical features

### Asset Optimization
- Image compression and WebP support
- CSS minification
- JavaScript tree shaking
- Gzip compression

### Caching Strategy
- Service worker for offline functionality
- Local storage for user preferences
- API response caching

## 🧪 Testing Strategy

### Component Testing
```typescript
// Example test structure
describe('ContactForm.vue', () => {
  it('validates email format', () => {
    // Test email validation logic
  })
  
  it('submits form successfully', () => {
    // Test form submission
  })
})
```

### E2E Testing
- Contact form submission flow
- Admin panel authentication
- Chatbot interaction
- Responsive design validation

This frontend is designed to be maintainable, scalable, and user-friendly while providing a seamless experience across all devices! 🎉