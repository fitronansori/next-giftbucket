# 🎁 Gift Bucket - Website Layanan Gift Bucket Custom

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

Website layanan gift bucket custom yang dibuat dengan Next.js, React, dan Tailwind CSS. Menyediakan berbagai kategori gift bucket untuk berbagai momen spesial seperti wedding, birthday, anniversary, graduation, valentine, dan sympathy.

## ✨ Fitur Utama

- 🎨 **Modern UI/UX** - Desain yang elegan dan responsif
- 🌙 **Dark/Light Theme** - Mode gelap dan terang
- 🎯 **Kategori Lengkap** - Wedding, Birthday, Anniversary, Graduation, Valentine, Sympathy
- 🔍 **Search & Filter** - Pencarian dan filter produk yang mudah
- 📱 **Fully Responsive** - Optimal di semua perangkat
- 📞 **Contact Form** - Form kontak dengan validasi
- 💻 **Modern Tech Stack** - Next.js 15, React 19, TypeScript, Tailwind CSS
- ⚡ **Fast Performance** - Optimized dengan Turbopack

## 🚀 Tech Stack

### Frontend

- **Next.js 15.3.3** - React framework dengan App Router
- **React 19** - UI library terbaru
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework

### UI Components

- **Radix UI** - Headless UI components
- **Lucide React** - Beautiful icons
- **next-themes** - Theme switching
- **class-variance-authority** - Component variants

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Turbopack** - Fast bundler untuk development

## 📦 Instalasi

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Clone Repository

```bash
git clone https://github.com/fitronansori/next-giftbucket.git
cd next-giftbucket
```

### Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### Jalankan Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasil.

## 📝 Available Scripts

```bash
# Development dengan Turbopack
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm run start

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format
npm run format:check
```

## 🏗️ Struktur Folder

```text
src/
├── app/                    # App Router (Next.js 15)
│   ├── (root)/            # Root layout group
│   │   ├── page.tsx       # Homepage
│   │   └── produk-kami/   # Products page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── common/            # Reusable components
│   │   ├── Logo.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Title.tsx
│   ├── layouts/           # Layout components
│   │   ├── Category/      # Category section
│   │   ├── Contact/       # Contact section
│   │   ├── Footer/        # Footer component
│   │   ├── Header/        # Header & navigation
│   │   ├── Hero/          # Hero section
│   │   ├── Prices/        # Pricing section
│   │   └── Product/       # Product section
│   ├── provider/          # Context providers
│   └── ui/                # UI components (shadcn/ui)
├── constants/
│   └── data.ts           # Static data & configurations
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Design System

### Colors

- **Primary**: Gift bucket brand colors
- **Secondary**: Complementary colors
- **Neutral**: Gray scale untuk teks dan background

### Components

Project ini menggunakan komponen UI yang konsisten:

- **Card Components** - Untuk product cards, category cards
- **Form Components** - Input, textarea, button dengan validasi
- **Navigation** - Header dengan mobile menu
- **Theme Toggle** - Switch antara light/dark mode

## 📱 Pages & Features

### Homepage (`/`)

- **Hero Section** - Banner utama dengan CTA
- **Category Section** - Showcase kategori gift bucket
- **Product Section** - Featured products dengan search & filter
- **Pricing Section** - Paket harga yang tersedia
- **Contact Section** - Form kontak dan informasi bisnis

### Products Page (`/produk-kami`)

- **Product Grid** - Display semua produk
- **Advanced Filtering** - Filter berdasarkan kategori
- **Search Functionality** - Pencarian produk
- **Pagination** - Navigate through products

## 🔧 Konfigurasi

### Environment Variables

Buat file `.env.local` untuk konfigurasi:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
}
```

### Import Organization

Import otomatis terorganisir dengan urutan:

1. React imports
2. Next.js imports
3. Third-party libraries
4. UI components
5. Local components
6. Constants & utilities

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Connect ke Git repository
# Deploy otomatis setiap push ke main branch
```

### Manual Build

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

### Ansori Dev

- GitHub: [@your-github-username](https://github.com/your-github-username)
- Website: [your-website.com](https://your-website.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://radix-ui.com/) - Headless UI components
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ **Star this repository if you found it helpful!**
