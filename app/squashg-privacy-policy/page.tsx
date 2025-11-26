import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: "Privacy Policy — SquashG",
  description: "Privacy Policy for the SquashG app by Laurent Kleering van Beerenbergh.",
};

export default async function PrivacyPolicyPage() {
  // Read markdown file from public folder
  const filePath = path.join(process.cwd(), "public", "squashg-privacy-policy.md");
  const markdown = fs.readFileSync(filePath, "utf8");

  // Convert markdown to HTML so MarkdownRenderer (which uses dangerouslySetInnerHTML)
  // receives ready-to-render HTML (same approach as the blog generator)
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
  const contentHtml = processed.toString();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white via-[#fafafa] to-white">
      <div className="max-w-3xl mx-auto w-full relative z-10 text-center">
        <div className="prose prose-lg mx-auto text-left text-gray-800">
            <MarkdownRenderer content={contentHtml} />

          {/* ReactMarkdown removed in favor of converting markdown to HTML and using MarkdownRenderer */}
        </div>
      </div>
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/90 via-orange-50/40 to-white/90 pointer-events-none" />
    </section>
  );
}
