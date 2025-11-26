import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laurent Kleering van Beerenbergh | Developer & Musician",
  description: "Full-stack developer blending rhythm and code. Building intuitive, fast, and human-centered applications.",
  keywords: ["Laurent Kleering van Beerenbergh", "Developer", "Musician", "Full-stack", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Laurent Kleering van Beerenbergh" }],
  openGraph: {
    title: "Laurent Kleering van Beerenbergh | Developer & Musician",
    description: "Full-stack developer blending rhythm and code.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurent Kleering van Beerenbergh | Developer & Musician",
    description: "Full-stack developer blending rhythm and code.",
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      '/favicon_io/favicon.ico',
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/favicon_io/site.webmanifest' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <Analytics/>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
