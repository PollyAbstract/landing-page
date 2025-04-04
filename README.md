# Polly Abstract Website

Official website for Polly, the penguin wife of Pax, built with Next.js App Router, TypeScript, and TailwindCSS.

## Features

- 🐧 Adorable penguin-themed design
- ⚡ Next.js App Router for optimal performance and routing
- 🔤 Custom font optimization with next/font
- 🎨 Styled with TailwindCSS and custom animations
- 📱 Fully responsive design
- 🔍 SEO optimized with Next.js metadata
- 🐳 Docker support for containerized deployment

## Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm

### Local Development

Run the development server with:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Development

If you prefer to use Docker:

```bash
# Build and run with docker-compose
docker-compose up

# Or build separately
docker build -t polly-website .
docker run -p 3000:3000 polly-website
```

## Project Structure

```
├── app/                # Next.js App Router components
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page component
├── components/         # Reusable React components
│   ├── layout/         # Layout components (Navbar, etc.)
│   └── ui/             # UI components (Button, etc.)
├── public/             # Static assets
│   └── assets/
│       ├── fonts/      # Custom fonts
│       └── images/     # Images and icons
├── styles/             # CSS styles
│   ├── animations/     # CSS animations
│   ├── base/           # Base styles
│   └── components/     # Component-specific styles
├── utils/              # Utility functions and helpers
│   └── fonts/          # Font configurations
└── tsconfig.json       # TypeScript configuration
```

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `~components` - Components directory
- `~styles` - Styles directory
- `~utils` - Utility functions

## Development Guidelines

- **TypeScript**: Use strict typing with explicit type annotations
- **Imports**: Use path aliases for cleaner imports
- **Components**: Follow Next.js App Router conventions
- **CSS**: Use Tailwind utility classes with custom colors
- **Documentation**: TypeDoc annotations for components

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm docs` - Generate API documentation with TypeDoc
- `pnpm docs:serve` - Serve documentation locally at http://localhost:8080

## Documentation

The project uses TypeDoc to generate API documentation:

```bash
# Generate documentation
pnpm docs

# Serve documentation locally
pnpm docs:serve
```

The documentation will be available at http://localhost:8080 when served locally.

## Deployment

The site can be deployed to any platform that supports Next.js applications:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted with Docker
- Akash (Soon)

## License

Proprietary - All rights reserved