import fs from "fs";
import path from "path";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
  title: "Privacy Policy — SquashG",
  description: "Privacy Policy for the SquashG app by Laurent Kleering van Beerenbergh.",
};

export default async function PrivacyPolicyPage() {
  // Read markdown file from public folder
  const filePath = path.join(process.cwd(), "public", "squashg-privacy-policy.md");
  const markdown = fs.readFileSync(filePath, "utf8");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white via-[#fafafa] to-white">
      <div className="max-w-3xl mx-auto w-full relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent">
          Privacy Policy — SquashG
        </h1>
        <div className="prose prose-lg mx-auto text-left text-gray-800">
          <ReactMarkdown
            components={{
              h2: ({node, ...props}) => (
                <h2
                  className="mt-12 mb-4 text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-black bg-clip-text text-transparent"
                  {...props}
                />
              ),
              h3: ({node, ...props}) => (
                <h3
                  className="mt-10 mb-3 text-2xl font-semibold bg-gradient-to-r from-orange-600 via-red-600 to-black bg-clip-text text-transparent"
                  {...props}
                />
              ),
              h4: ({node, ...props}) => (
                <h4
                  className="mt-8 mb-2 text-xl font-semibold bg-gradient-to-r from-orange-600 via-red-600 to-black bg-clip-text text-transparent"
                  {...props}
                />
              ),
              p: ({node, ...props}) => (
                <p className="mb-6" {...props} />
              ),
              ul: ({node, ...props}) => (
                <ul className="mb-6" {...props} />
              ),
              ol: ({node, ...props}) => (
                <ol className="mb-6" {...props} />
              ),
              hr: ({node, ...props}) => (
                <hr className="my-10 border-orange-100" {...props} />
              ),
              a: ({href, children, ...props}) => {
                // Check for mailto
                const isEmail = href && href.startsWith('mailto:');
                return (
                  <a
                    href={href}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                    className="font-semibold underline underline-offset-2 text-orange-600 hover:text-red-600 transition-colors"
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/90 via-orange-50/40 to-white/90 pointer-events-none" />
    </section>
  );
}
