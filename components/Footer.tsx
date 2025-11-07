"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-apple-dark text-white">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/laurentkleering"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-apple-blue transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/laurentkleering"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-apple-blue transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lkvb90@gmail.com"
              className="hover:text-apple-blue transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-center">
            © {currentYear} Laurent Kleering van Beerenbergh — built with React & care.
          </p>
        </div>
      </div>
    </footer>
  );
}
