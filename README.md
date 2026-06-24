# NAUJIEJI RYTAI FUSION

A modern, responsive restaurant website showcasing an elegant fusion dining experience. Built with cutting-edge web technologies to deliver a premium user experience.

## Overview

NAUJIEJI RYTAI FUSION is a sophisticated web application designed for a high-end fusion restaurant. The site features a curated menu, gallery showcase, reservation system, and comprehensive information about the dining experience.

## Features

- **Hero Section** - Captivating landing with high-quality imagery
- **Chef's Specials** - Showcase of signature dishes with pricing
- **Signature Menu** - Curated menu items with smooth image transitions
- **Gallery** - Professional gallery of dishes and restaurant ambiance
- **Reservations** - User-friendly booking system
- **Contact Information** - Easy access to location and communication
- **Responsive Design** - Optimized for all device sizes
- **Smooth Animations** - Elegant transitions and reveal effects

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Form Handling**: React Hook Form
- **State Management**: React Query
- **Testing**: Vitest
- **Linting**: ESLint

## Project Structure

```
src/
├── components/
│   ├── site/              # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ChefSpecial.tsx
│   │   ├── SignatureMenu.tsx
│   │   ├── Gallery.tsx
│   │   ├── FullMenu.tsx
│   │   ├── Reservations.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                # reusable UI components
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── test/                  # Test files
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Boluski2/NAUJIEJI-RYTAI-FUSION.git
cd NAUJIEJI-RYTAI-FUSION
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

### Development

Start the development server:
```bash
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
# or
bun build
```

Preview the production build:
```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build with development mode |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## Styling

The project uses Tailwind CSS with custom theme extensions:

- **Custom Colors**: Ember, Gold, Charcoal color palette
- **Custom Animations**: Smooth transitions and reveal effects
- **Responsive**: Mobile-first responsive design
- **Custom Durations**: `duration-1200` and `duration-1500` for smooth image transitions

## Components

The UI is built with shadcn/ui components including:
- Buttons, Cards, Dialogs
- Forms with validation
- Dropdowns, Menus, Navigation
- Toasts, Tooltips, Popovers
- Carousels, Tables, Tabs

## Testing

Run the test suite:
```bash
npm run test
```

Watch mode for development:
```bash
npm run test:watch
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is proprietary and confidential.

## Contact

For inquiries about this project, please visit the website or contact through the provided contact form.

---

**Built with ❤️ for an exceptional dining experience**

