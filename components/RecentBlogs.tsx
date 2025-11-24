"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog.types";
import { formatDate } from "@/lib/getPosts";

interface RecentBlogsProps {
  posts: BlogPost[];
}

export default function RecentBlogs({ posts }: RecentBlogsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      id="blogs"
      className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-[#fafafa]"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 mb-6">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Recent Posts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-black bg-clip-text text-transparent">
            Latest from the Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on software development, music, and lessons learned along the way.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <Link href={`/blogs/${post.slug}`}>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:via-red-600 group-hover:to-black group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600">{formatDate(post.date)}</p>

                  <p className="text-gray-700 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all pt-2">
                    <span className="text-sm">Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-black via-red-600 to-orange-500 text-white rounded-full hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 text-lg font-semibold"
          >
            <span>View all posts</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
