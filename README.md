# Sanskriti Center - Indian Cultural Center Website

A modern, single-page responsive website celebrating Indian heritage through art, music, dance, and community programs.

## 🎨 Features

- **Fixed Navigation Bar** - Smooth scrolling with active section highlighting
- **Hero Section** - Eye-catching full-viewport welcome section with animated gradient
- **About Section** - Introduction with beautiful card layout and background image
- **Team Section** - Showcase of team members with hover effects
- **Support Us Section** - Interactive form for supporter engagement
- **Contact Section** - Form validation and contact information display
- **Responsive Design** - Mobile-first approach with hamburger menu
- **Smooth Animations** - Intersection Observer API for scroll-triggered animations

## 🎨 Color Palette

The website uses a carefully curated color scheme:

- **Primary**: `#b64400` (Deep Orange-Brown)
- **Accent Red**: `#b91318` (Deep Red)
- **Accent Beige**: `#dbbe97` (Beige/Tan)
- **Accent Golden**: `#e8ac62` (Golden)
- **Accent Orange**: `#ee5715` (Bright Orange)

## 📁 Project Structure

```
Sanskriti-Center/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styling and responsive design
├── js/
│   └── main.js        # JavaScript for interactivity
├── images/
│   ├── logo.png       # Center logo
│   └── background_about.png  # About section background
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build process or dependencies required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No installation needed.

### Local Development

For a better development experience, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 💡 Key Technologies

- **HTML5** - Semantic structure with accessibility features
- **CSS3** - Modern features including:
  - CSS Grid & Flexbox layouts
  - CSS Variables for theming
  - Smooth scroll behavior
  - Transitions and animations
  - Media queries for responsiveness
- **Vanilla JavaScript** - No frameworks needed:
  - Intersection Observer API
  - Form validation
  - Mobile menu toggle
  - Smooth scrolling
  - Real-time input validation

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ JavaScript Features

### Navigation
- Active section highlighting using Intersection Observer
- Smooth scroll to sections
- Mobile hamburger menu with toggle functionality
- Automatic menu close on navigation or outside click

### Form Validation
- Real-time validation on blur events
- Email format validation
- Name length requirements
- Digital signature matching
- Success messages with animations

### Animations
- Scroll-triggered fade-in animations for cards
- Page load fade-in effect
- Hover effects on buttons and cards
- Gradient animation in hero section

## 🎯 Customization Guide

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #b64400;
    --accent-red: #b91318;
    --accent-beige: #dbbe97;
    --accent-golden: #e8ac62;
    --accent-orange: #ee5715;
}
```

### Updating Content

1. **Hero Section**: Edit text in the `.hero-content` section in `index.html`
2. **About Section**: Modify cards in the `.about-grid`
3. **Team Members**: Update `.team-card` elements with real information
4. **Contact Info**: Change placeholder contact details in the `.contact-info` section

### Adding Images

1. Place your images in the `images/` folder
2. Update image paths in HTML and CSS:
   - Logo: `<img src="images/your-logo.png">`
   - Background: CSS `background-image: url('../images/your-bg.png')`

### Typography

The website uses **Cinzel** font from Google Fonts. To change the font:

1. Update the Google Fonts link in `index.html`
2. Update the `font-family` in `css/styles.css`

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Future Enhancements

Potential features for future development:

- [ ] Events calendar section
- [ ] Photo gallery with lightbox
- [ ] Blog section with CMS integration
- [ ] Backend integration for form submissions
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Accessibility improvements (ARIA labels, screen reader optimization)

## 🤝 Contributing

This is a template website. Feel free to:

1. Fork the repository
2. Make your modifications
3. Use it for your own cultural center or organization

## 📄 License

This project is open source and available for anyone to use and modify.

## 📞 Support

For questions or issues, please refer to the contact section of the website.

## 🙏 Acknowledgments

- Design inspired by modern Indian cultural aesthetics
- Icons from Font Awesome
- Fonts from Google Fonts
- Built with love for cultural preservation and community engagement

---

**Made with ❤️ for the Indian cultural community**
