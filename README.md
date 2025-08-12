
# Todofy 📝

A modern, responsive todo application built with Next.js 15 and React 19, featuring a clean interface powered by Tailwind CSS.

## 🚀 Features

- ✅ Create, edit, and delete tasks
- 📱 Responsive design that works on all devices
- ⚡ Built with Next.js 15 and React 19 for optimal performance
- 🎨 Beautiful UI with Tailwind CSS
- 🔄 Loading states with skeleton animations
- 🆔 Unique task identification with UUID

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Frontend:** [React 19](https://react.dev/) - Latest React with modern features
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library
- **Loading States:** [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton) - Skeleton screens for better UX
- **ID Generation:** [UUID](https://www.npmjs.com/package/uuid) - Unique identifier generation
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## 📁 Project Structure

```
todofy/
├── public/           # Static assets
├── src/
│   ├── app/         # Next.js App Router pages
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/  # Reusable React components
│       └── Footer.tsx
├── next.config.ts   # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd todofy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Libraries Usage

- **React Icons**: Used throughout the app for consistent iconography (add, delete, edit buttons)
- **React Loading Skeleton**: Provides smooth loading animations while data is being fetched
- **UUID**: Generates unique identifiers for each todo item to ensure proper React key handling
- **Tailwind CSS**: Handles all styling with utility classes for rapid development

## 🌐 Deployment

This project is optimized for deployment on [Replit](https://replit.com). Simply fork the project and it will automatically deploy with the configured settings.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and React
