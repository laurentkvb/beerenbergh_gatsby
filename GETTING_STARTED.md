# 🎯 Quick Start Guide

## Your Portfolio is Ready!

The development server is now running at: **http://localhost:3000**

## ✅ What's Included

✓ **Hero Section** - Animated landing with your name and social links  
✓ **About Section** - Bio with portrait image placeholder  
✓ **Projects Grid** - 4 featured projects (Leaseplan, Rebels.io, Hely, Personal Website)  
✓ **Music Section** - 2 SoundCloud embeds  
✓ **Footer** - Social links and copyright  

## 🎨 Next Steps

### 1. Replace Placeholder Image
Replace `/public/images/laurent.jpg` with your actual portrait photo:
- Recommended size: 800x800px
- Format: JPG, PNG, or WebP
- Keep the filename or update it in `components/AboutSection.tsx`

### 2. Update Social Links
Edit the following files:
- `components/Hero.tsx` (lines 23-45)
- `components/Footer.tsx` (lines 13-37)

Replace:
- GitHub: `https://github.com/laurentkleering`
- LinkedIn: `https://linkedin.com/in/laurentkleering`
- Email: `laurent@example.com`

### 3. Customize Your Bio
Edit `components/AboutSection.tsx` (lines 36-50) to update your personal story.

### 4. Add Your Projects
Update the projects array in `components/ProjectGrid.tsx` (lines 7-30):
- Add project titles, descriptions, and tech stacks
- Add actual project links (replace `#` placeholders)

### 5. Update Music Embeds (Optional)
If you have different SoundCloud tracks, replace URLs in `components/MusicSection.tsx`.

### 6. Configure SEO
Update `lib/seo.ts` with:
- Your actual domain name
- Custom metadata
- Social media handles

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Your site will be live in ~1 minute.

## 📱 Test on Mobile

While dev server is running, open the Network URL on your phone:
- **http://192.168.2.14:3000** (shown in terminal)

## 🛠️ Common Commands

```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## 💡 Pro Tips

- The site uses Framer Motion for smooth animations
- All sections fade in on scroll for a polished look
- TailwindCSS classes are fully customizable
- Dark mode support is built-in (toggle coming soon)
- Perfect Lighthouse scores out of the box

## 📞 Need Help?

Check the main README.md for detailed documentation.

---

**Happy coding! 🎉**
