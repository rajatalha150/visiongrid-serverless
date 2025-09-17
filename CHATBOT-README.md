# VisionGrid Chatbot System

A comprehensive chatbot system integrated into the VisionGrid website that can answer questions about services, pricing, appointments, and more.

## Features

- **Floating Chat Interface**: Always accessible chat button in the bottom-right corner
- **Knowledge Base**: Reads from a customizable JSON file for dynamic responses
- **Site Content Awareness**: Understands the website's services and company information
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Responses**: Instant answers to common questions

## Files Added/Modified

### New Files
- `data/chatbot-knowledge.json` - Knowledge base file for custom information
- `api/chatbot.ts` - Serverless API endpoint for chat responses
- `frontend/src/components/Chatbot.vue` - Chat interface component

### Modified Files
- `frontend/src/App.vue` - Added chatbot component
- `frontend/src/utils/api.ts` - Added chat API function
- `vercel.json` - Added chatbot API function configuration

## Customizing the Knowledge Base

Edit `/data/chatbot-knowledge.json` to add or modify information:

```json
{
  "services": {
    "new_service": {
      "name": "New Service Name",
      "description": "Service description",
      "pricing": {
        "basic": "$100-200",
        "premium": "$300-500"
      },
      "features": ["Feature 1", "Feature 2"]
    }
  },
  "faq": [
    {
      "question": "New question?",
      "answer": "Answer to the question"
    }
  ]
}
```

## Chatbot Capabilities

The chatbot can respond to questions about:

### Services
- Camera Installation
- Networking Solutions
- Home Security
- Business Security
- Audio & Video Systems

### Pricing Information
- Service packages and pricing ranges
- Custom quotes for enterprise solutions

### Appointments & Consultations
- Free consultation scheduling
- Installation process
- Availability hours

### Company Information
- Experience and credentials
- Installation statistics
- Warranty and support details

### Common Questions
- Installation timeframes
- Financing options
- Service areas
- System integration

## Example Interactions

**User**: "What services do you offer?"
**Bot**: Lists all services with brief descriptions

**User**: "How much does camera installation cost?"
**Bot**: Provides pricing ranges for different packages

**User**: "Can I schedule a consultation?"
**Bot**: Explains consultation process and availability

**User**: "Do you offer warranties?"
**Bot**: Details warranty coverage and support

## Adding New Response Patterns

To add new response patterns, edit `api/chatbot.ts`:

```typescript
// Add new condition in generateResponse function
if (msg.includes('your_keyword')) {
  const service = knowledge.services?.your_service
  if (service) {
    return `Your custom response using ${service.name}`
  }
}
```

## Styling Customization

The chatbot uses CSS variables from the main site theme:
- `--gradient-primary` - Primary gradient colors
- `--color-dark` - Dark text color
- `--color-white` - White background
- `--color-gray-light` - Light gray for borders

Modify styles in `frontend/src/components/Chatbot.vue`.

## Mobile Responsiveness

The chatbot automatically adjusts for mobile devices:
- Smaller chat window on phones
- Full-width on very small screens
- Touch-friendly button sizes

## API Integration

The chatbot uses the existing API infrastructure:
- Serverless functions on Vercel
- CORS enabled for cross-origin requests
- Error handling for network issues

## Deployment

The chatbot is automatically deployed with the rest of the site:
1. Knowledge base is included in the deployment
2. API function is configured in `vercel.json`
3. Frontend component is bundled with the app

## Troubleshooting

### Chat not responding
- Check browser console for API errors
- Verify `data/chatbot-knowledge.json` exists
- Ensure API endpoint is accessible

### Styling issues
- Check CSS variable definitions in main.css
- Verify component imports in App.vue

### Mobile display problems
- Test responsive breakpoints
- Check viewport meta tag in index.html

## Future Enhancements

Potential improvements:
- Integration with external AI services
- Chat history persistence
- Admin panel for knowledge base editing
- Analytics and conversation tracking
- Multi-language support