const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { remark } = require('remark');
const html = require('remark-html').default;
const remarkGfm = require('remark-gfm');

const BLOGS_DIRECTORY = path.join(process.cwd(), 'content/blogs');
const OUTPUT_PATH = path.join(process.cwd(), 'public/blogs.json');

async function parseMarkdownFile(filePath, slug) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();
  const plainText = content.replace(/[#*`\[\]]/g, '').trim();
  const excerpt = plainText.slice(0, 150) + (plainText.length > 150 ? '...' : '');

  return {
    slug,
    title: data.title,
    author: data.author,
    date: data.date,
    description: data.description,
    ogImage: data.ogImage || '',
    tags: data.tags || [],
    content: contentHtml,
    excerpt,
  };
}

async function main() {
  const files = fs.readdirSync(BLOGS_DIRECTORY);
  const posts = [];

  for (const file of files) {
    if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const slug = file.replace(/\.mdx?$/, '');
      const filePath = path.join(BLOGS_DIRECTORY, file);
      const post = await parseMarkdownFile(filePath, slug);
      posts.push(post);
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2));
  console.log(`Generated ${posts.length} blog posts to blogs.json`);
}

main();
