# Vite + Tailwind CSS 4 + ShadCN Starter (JavaScript)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-06B6D4.svg)](https://tailwindcss.com/)

A modern, production-ready starter template featuring:

- ⚡ **Vite 4** - Blazing fast development
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- ✨ **ShadCN UI** - Beautiful, accessible components
- 🛠 **JavaScript** - No TypeScript configuration needed
- ✅ **Prettier + ESLint** - Code formatting and linting for a clean and consistent codebase

## Quick Start

### Using degit (recommended)

```bash
npx degit stepinfwd/react-vite-tailwind4-shadcn#main my-app
cd my-app
npm install
npm run dev
```

## Folder Structure

```
my-app/
├── public/
├── src/
│   ├── assets/           # Static assets (images, icons, etc.)
│   ├── blocks/           # Reusable UI blocks
│   ├── components/       # UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── pages/            # Page components
│   ├── styles/           # Global styles
│   ├── utils/            # Helper functions
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   ├── App.css           # Global styles
│   ├── index.css         # Tailwind styles
├── .gitignore
├── components.json
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── jsconfig.json         # JS configuration
├── package.json          # Project dependencies
├── package-lock.json
├── README.md             # Project documentation
├── vite.config.js        # Vite configuration
```

## Development

### Run the development server:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
```

### Lint the code:

```bash
npm run lint
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).