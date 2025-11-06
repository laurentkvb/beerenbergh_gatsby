# Portfolio Website - Laurent Kleering van Beerenbergh

A minimalist, Apple-inspired portfolio website showcasing development projects and music.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Geist Sans & Geist Mono
- **Dark Mode:** next-themes
- **Deployment:** Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd beerenbergh-portfolio
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

## 📁 Project Structure

```
/app
  layout.tsx          # Root layout with fonts and theme provider
  page.tsx            # Main home page
  globals.css         # Global styles
/components
  Hero.tsx            # Hero section with animated intro
  AboutSection.tsx    # About section with bio and image
  ProjectGrid.tsx     # Projects showcase with cards
  MusicSection.tsx    # SoundCloud embeds
  Footer.tsx          # Footer with social links
/lib
  seo.ts              # SEO configuration and helpers
  analytics.ts        # Analytics setup (Vercel/Plausible)
/public
  /images
    laurent.jpg       # Portrait image (replace with actual photo)
```

## 🎨 Design Features

- **Max width:** 960px centered layout
- **Colors:** Apple Blue (#007AFF) accent
- **Typography:** Geist Sans font family
- **Animations:** Smooth fade-in and slide-up transitions
- **Responsive:** Mobile-first design
- **Accessibility:** Semantic HTML and ARIA labels

## 📝 Customization

### Update Personal Information

1. **Social Links:** Edit links in `components/Hero.tsx` and `components/Footer.tsx`
2. **Bio:** Update text in `components/AboutSection.tsx`
3. **Projects:** Modify the projects array in `components/ProjectGrid.tsx`
4. **Music:** Replace SoundCloud URLs in `components/MusicSection.tsx`
5. **Image:** Replace `/public/images/laurent.jpg` with your portrait
6. **SEO:** Update metadata in `lib/seo.ts`

### Environment Variables

Create a `.env.local` file for analytics:

```bash
# Vercel Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-id

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure settings
4. Add environment variables in Vercel dashboard
5. Deploy!

The site is optimized for static generation (SSG) for maximum performance.

## 📊 Performance

The website is optimized for:
- ✅ Lightning-fast load times
- ✅ Perfect Lighthouse scores
- ✅ SEO optimization
- ✅ Accessibility standards
- ✅ Responsive design
- ✅ Smooth animations

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

Laurent Kleering van Beerenbergh
- GitHub: [@laurentkleering](https://github.com/laurentkleering)
- LinkedIn: [laurentkleering](https://linkedin.com/in/laurentkleering)
- Email: laurent@example.com

---

Built with ❤️ using Next.js and TailwindCSS

