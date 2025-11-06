import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
