# Blog System Documentation

## Overview
This is a minimalist, markdown-based blog system built for scalability and SEO. All blog posts are written in Markdown files stored in the repository—no CMS needed.

## Directory Structure

```
content/blogs/          # All blog post markdown files
lib/
  ├── getPosts.ts       # Utility functions for blog posts
  └── blog.types.ts     # TypeScript types
components/
  ├── BlogCard.tsx      # Individual blog card component
  ├── BlogList.tsx      # Grid of blog cards
  ├── RecentBlogs.tsx   # Recent blogs section for homepage
  └── MarkdownRenderer.tsx  # Renders markdown with custom styling
app/
  ├── blogs/
  │   ├── page.tsx      # Blog overview page (/blogs)
  │   └── [slug]/
  │       └── page.tsx  # Individual blog post page (/blogs/[slug])
  └── page.tsx          # Homepage (includes Recent Blogs section)
```

## Creating a New Blog Post

### 1. Create a new markdown file

Create a new `.md` file in `content/blogs/` with a URL-friendly name (this becomes the slug):

```
content/blogs/my-awesome-post.md
```

### 2. Add frontmatter

Every blog post must start with frontmatter in this format:

```markdown
---
title: "My Awesome Post"
author: "Laurent Kleering van Beerenbergh"
date: "2025-11-25"
description: "A short SEO-friendly description of the post (shown in search results)"
ogImage: "/images/blogs/my-post-og.png"  # optional
tags: ["software", "life", "music"]      # optional
---

Your markdown content starts here...
```

### 3. Write your content

Use standard markdown syntax:

- Headings: `# H1`, `## H2`, `### H3`
- Bold: `**bold text**`
- Italic: `*italic text*`
- Links: `[text](url)`
- Code blocks: Triple backticks with language
- Lists: `-` or `1.`

Example:

```markdown
## My Section

Here's a paragraph with **bold** and *italic* text.

### Code Example

```javascript
const greeting = "Hello, world!";
console.log(greeting);
```

- List item 1
- List item 2
```

## Utility Functions

Located in `lib/getPosts.ts`:

- `getAllPosts()` - Returns all blog posts sorted by date (newest first)
- `getPostBySlug(slug)` - Returns a single blog post by its slug
- `getRecentPosts(limit)` - Returns the most recent posts (default: 3)
- `formatDate(dateString)` - Formats dates for display

## SEO Features

Each blog post automatically generates:

- `<title>` tag with post title
- Meta description from frontmatter
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card metadata
- Canonical URLs
- Proper heading hierarchy

## Styling

The blog uses your site's existing design system:

- Orange-to-red gradient for headings
- Clean typography with proper spacing
- Responsive design (mobile-first)
- Maximum content width: 780px for readability
- Code blocks with syntax highlighting
- Hover effects on cards and links

## Pages

### `/blogs` - Overview Page
- Shows ALL blog posts
- Grid layout (3 columns on desktop)
- Each card shows: title, author, date, excerpt, tags
- "Read more" link to individual post

### `/blogs/[slug]` - Individual Post Page
- Full blog post content
- Back button to blog overview
- Metadata display (author, date, tags)
- Optimized for reading (max 780px width)

### Homepage - Recent Blogs Section
- Shows 3 most recent posts
- "View all posts" CTA button
- Matches site's visual style

## Navigation

The blog link appears in:
- Desktop navigation (left sidebar)
- Mobile navigation menu
- Active state when on blog pages

## Performance

- Static generation: All pages pre-rendered at build time
- Markdown parsing happens at build time (not runtime)
- Optimized for fast page loads
- No external dependencies for rendering

## Adding Images

1. Add images to `public/images/blogs/`
2. Reference in markdown: `![Alt text](/images/blogs/image.png)`
3. For OG images, add path to frontmatter: `ogImage: "/images/blogs/og-image.png"`

## Best Practices

1. **Use descriptive slugs**: `react-hooks-guide` not `post-1`
2. **Write SEO descriptions**: 120-160 characters, engaging
3. **Add tags**: 2-4 relevant tags per post
4. **Use headings properly**: H2 for sections, H3 for subsections
5. **Keep paragraphs short**: 2-4 sentences for readability
6. **Add code examples**: Use triple backticks with language identifier

## Example Post

```markdown
---
title: "Getting Started with React Hooks"
author: "Laurent Kleering van Beerenbergh"
date: "2025-11-25"
description: "Learn the fundamentals of React Hooks with practical examples and best practices."
tags: ["react", "javascript", "tutorial"]
---

# Getting Started with React Hooks

React Hooks revolutionized how we write React components. In this guide, I'll show you the essentials.

## Why Hooks?

Hooks let you use state and other React features without writing a class component.

### useState Example

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Simple, right? That's the power of Hooks.

## Next Steps

- Learn useEffect for side effects
- Explore custom hooks
- Master useCallback and useMemo

Happy coding!
```

## Troubleshooting

**Post not showing up?**
- Check frontmatter format (must have all required fields)
- Ensure file is in `content/blogs/` directory
- Verify file extension is `.md` or `.mdx`

**Build errors?**
- Check for invalid markdown syntax
- Ensure dates are in YYYY-MM-DD format
- Verify all frontmatter fields are properly quoted

**Styling issues?**
- Custom markdown styles are in `MarkdownRenderer.tsx`
- Tailwind prose classes handle most formatting
- Add custom styles if needed

## Future Enhancements

Potential features to add:

- Search functionality
- Category pages
- Related posts
- Reading time estimate
- RSS feed
- Comments system
- Social sharing buttons

---

**Made with ❤️ by Laurent Kleering van Beerenbergh**
