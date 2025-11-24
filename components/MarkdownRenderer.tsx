interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div
      className="prose prose-lg max-w-none
        prose-headings:font-bold
        prose-h1:text-4xl prose-h1:mb-4 prose-h1:bg-gradient-to-r prose-h1:from-orange-600 prose-h1:via-red-600 prose-h1:to-black prose-h1:bg-clip-text prose-h1:text-transparent
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:bg-gradient-to-r prose-h2:from-orange-600 prose-h2:via-red-600 prose-h2:to-black prose-h2:bg-clip-text prose-h2:text-transparent
        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-900
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
        prose-a:text-orange-600 prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-red-600
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:shadow-lg
        prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
        prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
        prose-li:text-gray-700 prose-li:my-2
        prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
        prose-img:rounded-xl prose-img:shadow-lg"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
