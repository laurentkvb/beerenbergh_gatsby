import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'content/blogs');
const OUTPUT_PATH = path.join(process.cwd(), 'data/blogs.json');

async function parseMarkdownFile(filePath, slug) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
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
  const blogDirs = fs.readdirSync(BLOGS_DIRECTORY).filter((dir) => {
    const fullPath = path.join(BLOGS_DIRECTORY, dir);
    return fs.statSync(fullPath).isDirectory();
  });
  const posts = [];

  for (const dir of blogDirs) {
    const slug = dir;
    const postPath = path.join(BLOGS_DIRECTORY, dir, 'post.md');
    if (fs.existsSync(postPath)) {
      const post = await parseMarkdownFile(postPath, slug);
      posts.push(post);
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2));
  console.log(`Generated ${posts.length} blog posts to blogs.json`);
}

main();
