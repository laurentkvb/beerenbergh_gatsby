import type { Metadata } from "next";

export const seoConfig = {
  title: "Laurent Kleering van Beerenbergh | Developer & Musician",
  description:
    "Full-stack developer blending rhythm and code. Building intuitive, fast, and human-centered applications.",
  keywords: [
    "Laurent Kleering van Beerenbergh",
    "Developer",
    "Musician",
    "Full-stack",
    "React",
    "TypeScript",
    "Next.js",
    "Netherlands",
  ],
  url: "https://laurentkleering.com", // Update with actual domain
  siteName: "Laurent Kleering van Beerenbergh",
  locale: "en_US",
};

export function generateSEO(page?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = page?.title
    ? `${page.title} | ${seoConfig.siteName}`
    : seoConfig.title;
  const description = page?.description || seoConfig.description;
  const url = page?.path ? `${seoConfig.url}${page.path}` : seoConfig.url;

  return {
    title,
    description,
    keywords: seoConfig.keywords,
    authors: [{ name: seoConfig.siteName }],
    metadataBase: new URL(seoConfig.url),
    openGraph: {
      type: "website",
      locale: seoConfig.locale,
      url,
      title,
      description,
      siteName: seoConfig.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
