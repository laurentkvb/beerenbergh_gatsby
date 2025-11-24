
/**
 * Get all blog post slugs
 */



import blogsJson from "../data/blogs.json";
import type { BlogPost } from "./blog.types";

export async function getAllPosts(): Promise<BlogPost[]> {
  return blogsJson as BlogPost[];
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const blogs = blogsJson as BlogPost[];
  return blogs.map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = blogsJson as BlogPost[];
  return blogs.find((post) => post.slug === slug) || null;
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const blogs = blogsJson as BlogPost[];
  return blogs.slice(0, limit);
}


/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
