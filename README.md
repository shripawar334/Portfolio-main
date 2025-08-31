# 🚀 Shripad Pawar - Portfolio Website

A modern, responsive portfolio website showcasing my skills and projects as a Full Stack Developer. Built with cutting-edge technologies and featuring smooth animations and an intuitive user experience.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Online-green?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
- [🏗️ Project Structure](#%EF%B8%8F-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📦 Installation](#-installation)
- [🔧 Environment Setup](#-environment-setup)
- [📱 Pages Overview](#-pages-overview)
- [🎨 Design & Animations](#-design--animations)
- [📞 Contact](#-contact)

## ✨ Features

- **🎯 Modern Design**: Clean, professional design with dark/light mode support
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎬 Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **⚡ Fast Performance**: Built with Next.js 15 for optimal loading speeds
- **🎨 Beautiful UI**: Styled with Tailwind CSS for consistent design
- **📧 Contact Integration**: Direct contact options via email and phone
- **🔗 Social Links**: Integrated GitHub and LinkedIn profiles
- **📄 Resume Download**: Direct link to downloadable resume
- **🖼️ Image Optimization**: Next.js Image component for optimized images

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 15.5.2** - React framework for production
- **React 19.1.0** - UI library for building user interfaces
- **Tailwind CSS 4.0** - Utility-first CSS framework

### Animations & UI
- **Framer Motion 12.23.12** - Animation library for React
- **React Icons 5.5.0** - Popular icon library
- **@lottiefiles/dotlottie-web 0.50.1** - Lottie animations

### Backend & Database
- **MongoDB 6.19.0** - NoSQL database
- **Mongoose 8.18.0** - MongoDB object modeling

### Email & Communication
- **EmailJS** - Send emails directly from client-side
- **@emailjs/browser 4.4.1** - EmailJS browser SDK

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for Next.js

## 🏗️ Project Structure

```
folio/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── home/              # Home page
│   ├── project/           # Projects page
│   ├── skills/            # Skills page
│   ├── layout.js          # Root layout
│   ├── page.js            # Main page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Footer.js          # Footer component
│   └── Navbar.js          # Navigation component
├── public/                # Static assets
│   ├── photo.jpeg         # Profile photo
│   ├── final.pdf          # Resume
│   └── various images     # Project screenshots
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── next.config.mjs        # Next.js configuration
└── README.md             # Project documentation
```

## 🚀 Getting Started

This portfolio website was built using modern web development practices and cutting-edge technologies. The project showcases my expertise in full-stack development and attention to detail in creating user-friendly interfaces.

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun
- Git

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shripawar334/folio.git
   cd folio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure your environment variables** (see Environment Setup section)

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# EmailJS Configuration (for contact form functionality)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# MongoDB Configuration (if using database features)
MONGODB_URI=your_mongodb_connection_string

# Other environment variables as needed
```

## 📱 Pages Overview

### 🏠 Home Page
- Hero section with animated profile photo
- Brief introduction and social links
- Call-to-action buttons for contact and projects
- Resume download link

### 👨‍💻 About Page
- Detailed personal information
- Professional background
- Personal interests and goals

### 🛠️ Skills Page
- Technical skills and competencies
- Tools and technologies proficiency
- Skill level indicators

### 💼 Projects Page
- Showcase of completed projects
- Project descriptions and technologies used
- Links to live demos and source code

### 📞 Contact Page
- Direct contact information (email, phone, location)
- Social media links
- Clean, user-friendly contact interface

## 🎨 Design & Animations

### Color Scheme
- **Primary**: Purple to Blue gradient (#8B5CF6 to #3B82F6)
- **Background**: Light gray to dark theme support
- **Text**: Dark gray with proper contrast ratios

### Animation Features
- **Page Transitions**: Smooth fade-in animations
- **Hover Effects**: Interactive button and card animations
- **Scroll Animations**: Elements animate as they enter viewport
- **Loading States**: Skeleton loading and progress indicators

### Responsive Design
- **Mobile First**: Designed for mobile devices first
- **Breakpoint Optimization**: Tailored for tablets and desktops
- **Touch Friendly**: Optimized for touch interactions


**Built with ❤️ by Shripad Pawar**

*This portfolio represents my journey as a developer and showcases my passion for creating beautiful, functional web applications.*
