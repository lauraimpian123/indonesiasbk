# IndonesiaSBK.com — Frontend

> The Ultimate Ride — Berita, review, dan insight otomotif terdepan.

## 🎨 Design

- **Theme:** Light Futuristic Professional (2035 Aesthetic)
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body), Geist (headings)
- **Animation:** Framer Motion

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (navbar, footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── [category]/         # Category pages
│   └── [category]/[slug]/  # Article pages
└── components/             # Reusable components
```

## 🔗 API

Backend API URL: `http://76.13.218.104:3002`

Endpoints:
- `GET /api/categories` — Get all categories
- `GET /api/articles` — Get articles (with pagination, filters)
- `GET /api/articles/:slug` — Get single article
- `POST /api/articles` — Create article (admin)

## 🌐 Deployment

Deployed on Vercel: [https://indonesiasbk.com](https://indonesiasbk.com)

## 📝 License

© 2026 IndonesiaSBK. All rights reserved.
