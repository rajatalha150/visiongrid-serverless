# Service Images Directory

This directory contains images for each service section on the services page.

## Expected Image Files:

- `camera-installation.jpg` - Camera installation service image
- `networking-solutions.jpg` - Networking solutions service image  
- `home-security.jpg` - Home security service image
- `business-security.jpg` - Business security service image
- `audio-video-systems.jpg` - Audio & video systems service image

## Image Requirements:

- **Format**: JPG, PNG, or WebP
- **Resolution**: Minimum 600x400px, recommended 800x600px
- **Aspect Ratio**: 4:3 or 3:2 works best
- **File Size**: Keep under 500KB for optimal loading

## Usage:

Images are automatically loaded in the ServicesView component using the pattern:
`/media/services/{service-slug}.jpg`

If an image is missing, a placeholder will be shown instead.