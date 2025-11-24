export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  description: string;
  ogImage?: string;
  tags?: string[];
  content: string;
  excerpt: string;
}

export interface BlogFrontmatter {
  title: string;
  author: string;
  date: string;
  description: string;
  ogImage?: string;
  tags?: string[];
}
