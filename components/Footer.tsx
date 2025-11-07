"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 md:px-12 lg:px-16 bg-apple-dark text-white">
      <div className="max-w-content mx-auto w-full">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/laurentkleering"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 stroke-[2.5] [stroke:url(#gradient1)]" />
            </a>
            <a
              href="https://linkedin.com/in/laurentkleering"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 stroke-[2.5] [stroke:url(#gradient2)]" />
            </a>
            <a
              href="mailto:lkvb90@gmail.com"
              className="hover:scale-110 transform transition-transform duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 stroke-[2.5] [stroke:url(#gradient3)]" />
            </a>
          </div>

          {/* SVG Gradients for icons */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>

          {/* Copyright */}
          <p className="text-gray-400 text-center">
            © {currentYear} Laurent Kleering van Beerenbergh — built with React & care.
          </p>
        </div>
      </div>
    </footer>
  );
}
