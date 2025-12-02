# 🔥 Team Inferno - Official Hackathon Website

A modern, high-tech website showcasing Team Inferno - a passionate group of developers formed during a Grade 11 hackathon training program. This website features a unique fiery cyber-tech aesthetic that represents our team's innovative spirit and technical prowess.


## ✨ Features

- 🎨 **Unique Fire + Cyber Theme** - Stunning blend of warm fire tones and cool tech blue accents
- 🖼️ **Modern UI/UX** - Clean, minimal design with sophisticated animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Interactive Elements** - Hover effects, glowing buttons, and smooth transitions
- 🎯 **Single Page Application** - Smooth scrolling navigation between sections
- ♿ **Accessible** - WCAG AA compliant with semantic HTML
- 🚀 **Performance Optimized** - Fast loading with optimized assets

## 🎨 Design System

### Color Palette
```css
--deep-navy: #0A1527;        /* Primary background */
--burnt-red: #492A2D;         /* Secondary dark accent */
--bright-orange: #ED882D;     /* Primary fire color */
--rust-orange: #8B422B;       /* Warm accent */
--lava-orange: #D84A2F;       /* Intense fire accent */
--golden-yellow: #FFB932;     /* Highlights */
--neon-blue: #46DCFF;         /* Tech elements, buttons */
--soft-cyan: #96F0FF;         /* Glow accents */
```

### Typography

- **Headings:** Inter, Space Grotesk
- **Body:** Inter, Roboto
- **Weights:** 400 (Regular), 600 (Semibold), 700 (Bold)

## 🏗️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/team-inferno-website.git
   cd team-inferno-website
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Start the development server**
```bash
   npm run dev
   # or
   yarn dev
```

4. **Open your browser**
```
   Navigate to http://localhost:5173
```

### Building for Production
```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure
```
team-inferno-website/
├── public/
│   ├── photos/
│   │   ├── nabin.jpg          # Team leader photo
│   │   ├── birasat.jpg        # Team member photo
│   │   ├── abhi.jpg           # Team member photo
│   │   ├── aayush.jpg         # Team member photo
│   │   └── divya.jpg          # Mentor photo
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section component
│   │   ├── About.jsx          # About section component
│   │   ├── Team.jsx           # Team section component
│   │   ├── Mentors.jsx        # Mentors section component
│   │   ├── Contact.jsx        # Contact section component
│   │   └── Navigation.jsx     # Navigation bar component
│   ├── assets/
│   │   └── styles/
│   │       └── custom.css     # Custom CSS and animations
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── .gitignore
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md
```

## 👥 Team Inferno

### Team Members

<table>
  <tr>
    <td align="center">
      <img src="./public/photos/nabin.jpg" width="100px;" alt="Nabin Thapa"/><br />
      <b>Nabin Thapa</b><br />
      <sub>Team Leader<br/>UI/UX & Frontend Developer</sub>
    </td>
    <td align="center">
      <img src="./public/photos/birasat.jpg" width="100px;" alt="Birasat Subedi"/><br />
      <b>Birasat Subedi</b><br />
      <sub>Database & Data Management</sub>
    </td>
    <td align="center">
      <img src="./public/photos/abhi.jpg" width="100px;" alt="Abhi Gautam"/><br />
      <b>Abhi Gautam</b><br />
      <sub>Frontend Developer</sub>
    </td>
    <td align="center">
      <img src="./public/photos/aayush.jpg" width="100px;" alt="Aayush Neupane"/><br />
      <b>Aayush Neupane</b><br />
      <sub>Backend Developer</sub>
    </td>
  </tr>
</table>

### Our Mentor

**Divya Darsheel Sharma** - Lead Mentor  
[Portfolio](https://dds3579.github.io/portfolio/)

Divya guided us throughout our hackathon journey. His extraordinary talent and mentorship shaped our entire team. He is the one who formed Team Inferno.

**Honourable mention** to **Kritagya Poudel** for his support.

## 🎯 Sections Overview

### 1. Hero Section
- Eye-catching introduction with gradient text effects
- Clean, minimal wireframe-inspired design
- Smooth navigation bar with active link highlighting

### 2. About Us
- Team origin story
- Dark background with flame effects
- Circuit-line decorative patterns

### 3. Our Team
- Triangular layout showcasing all team members
- Professional profile cards with glowing borders
- Role descriptions and specializations

### 4. Our Mentors
- Highlighted mentor card with portfolio link
- Acknowledgments and special mentions
- Warm, respectful design theme

### 5. Contact Section
- Individual contact forms for each team member
- Cyber-themed input fields with glow effects
- Interactive submit buttons

## 🎨 Customization

### Adding Team Photos

1. Place high-quality photos (400x400px minimum) in `public/photos/`
2. Name them: `nabin.jpg`, `birasat.jpg`, `abhi.jpg`, `aayush.jpg`, `divya.jpg`
3. Recommended format: JPG or PNG
4. Recommended: Use neutral backgrounds or remove backgrounds

### Changing Colors

Edit the color variables in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'inferno-navy': '#0A1527',
        'inferno-orange': '#ED882D',
        'inferno-lava': '#D84A2F',
        'inferno-gold': '#FFB932',
        'cyber-blue': '#46DCFF',
        'cyber-cyan': '#96F0FF',
      }
    }
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## ⚡ Performance

- **Lighthouse Score:** 95+ (Performance)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Image Optimization:** WebP format with lazy loading

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Team Inferno
VITE_CONTACT_EMAIL=teaminferno@example.com
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Our mentor **Divya Darsheel Sharma** for his guidance
- **Kritagya Poudel** for his support
- Everyone who helped us in this journey
- The open-source community for amazing tools and libraries

## 📧 Contact

**Team Inferno**

- Website: [Add your website URL]
- Email: [Add team email]
- GitHub: [@team-inferno](https://github.com/your-username)

---

<p align="center">
  Made with 🔥 by Team Inferno
</p>

<p align="center">
  <i>"Forging Innovation Through Fire and Code"</i>
</p>
