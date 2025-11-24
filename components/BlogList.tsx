"use client";

import BlogCard from "./BlogCard";
import { BlogPost } from "@/lib/blog.types";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-500">No blog posts yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
      {posts.map((post, index) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          author={post.author}
          date={post.date}
          excerpt={post.excerpt}
          tags={post.tags}
          index={index}
        />
      ))}
    </div>
  );
}
