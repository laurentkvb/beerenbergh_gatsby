"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/getPosts";

interface BlogCardProps {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  tags?: string[];
  index?: number;
}

export default function BlogCard({
  slug,
  title,
  author,
  date,
  excerpt,
  tags,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
    >
      <Link href={`/blogs/${slug}`}>
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:via-red-600 group-hover:to-black group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(date)}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-gray-700 leading-relaxed line-clamp-3">{excerpt}</p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gradient-to-r from-orange-50 to-red-50 text-gray-700 rounded-full border border-orange-200/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read more */}
          <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all pt-2">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
