import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { getAllBlogSlugs, getPostBySlug, formatDate } from "@/lib/getPosts";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} — Laurent Kleering van Beerenbergh`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.ogImage ? [post.ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white via-[#fafafa] to-white min-h-screen">
      <div className="max-w-[780px] mx-auto w-full">
        {/* Back button */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to blogs</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-orange-50 to-red-50 text-gray-700 rounded-full border border-orange-200/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="mb-16">
          <MarkdownRenderer content={post.content} />
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-red-600 font-medium group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all posts</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}
