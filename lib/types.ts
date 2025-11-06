// Type definitions for portfolio components

export interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface MusicTrack {
  title: string;
  soundcloudUrl: string;
  embedUrl: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  siteName: string;
  locale: string;
}
