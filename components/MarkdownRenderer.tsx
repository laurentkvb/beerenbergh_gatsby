interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  console.log(content);
  return (
      <div
          className='prose prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-5xl md:prose-h1:text-6xl prose-h1:mt-0 prose-h1:mb-8 prose-h1:leading-tight prose-h1:bg-gradient-to-r prose-h1:from-orange-600 prose-h1:via-red-600 prose-h1:to-black prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:drop-shadow-lg
        prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-orange-200 prose-h2:bg-gradient-to-r prose-h2:from-orange-600 prose-h2:via-red-600 prose-h2:to-black prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:drop-shadow
        prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-orange-700 prose-h3:font-semibold prose-h3:drop-shadow
        prose-h4:text-xl md:prose-h4:text-2xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-orange-600 prose-h4:font-semibold prose-h4:drop-shadow
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
        prose-a:text-orange-600 prose-a:underline prose-a:decoration-orange-300 prose-a:underline-offset-2 hover:prose-a:text-red-600 hover:prose-a:decoration-red-300 prose-a:transition-colors
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-em:text-gray-800 prose-em:italic
        prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-base prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-code:font-normal
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto prose-pre:shadow-lg prose-pre:border prose-pre:border-gray-800
        prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-3
        prose-ol:my-8 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-3
        prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed prose-li::marker:text-orange-600
        prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-orange-50/30
        prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
        prose-hr:my-12 prose-hr:border-gray-300
        prose-table:my-8
        prose-th:bg-gray-100 prose-th:text-gray-900 prose-th:font-semibold
        prose-td:text-gray-700'
          dangerouslySetInnerHTML={{ __html: content }}
      >
        {/*<slot />*/}
      </div>
  );
}
