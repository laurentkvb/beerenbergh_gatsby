import { Metadata } from "next";
import { getAllPosts } from "@/lib/getPosts";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blogs — Laurent Kleering van Beerenbergh",
  description: "All blog posts from Laurent Kleering van Beerenbergh about software development, music, and life.",
  openGraph: {
    title: "Blogs — Laurent Kleering van Beerenbergh",
    description: "All blog posts from Laurent Kleering van Beerenbergh about software development, music, and life.",
    type: "website",
  },
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white via-[#fafafa] to-white min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiences of my life, online & offline
          </p>
        </div>

        {/* Blog List */}
        <BlogList posts={posts} />
      </div>
    </section>
  );
}
