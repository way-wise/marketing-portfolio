export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  highlightKeyword?: string
  images: string[]
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  completionDate?: string
  longDescription?: string
  features?: string[]
  process?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "seo-1",
    title: "Google Search",
    description: "Google Search for manage users and courses and analytics.",
    category: "seo",
    highlightKeyword: "seo",
    images: ["digital/Google Search 2.png", "digital/Google Search 1.jpg", "digital/Google Search 3.png", "digital/Google Analytic.jpg"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "seo-2",
    title: "On page SEO",
    description: "On page SEO for manage users and courses and analytics.",
    category: "seo",
    highlightKeyword: "On page SEO",
    images: ["digital/On Page SEO.png", ],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "seo-3",
    title: "Backlinks",
    description: "Backlinks for manage users and courses and analytics.",
    category: "seo",
    highlightKeyword: "Backlinks",
    images: ["digital/backlink 1.jpeg", "digital/Local Citation.png", "digital/Web 2.0 Backlinks.png", "digital/Profile Backlinks 1.png", "digital/Guest Post 1.png"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "seo-4",
    title: "Technical SEO",
    description: "Technical SEO for manage users and courses and analytics.",
    category: "seo",
    highlightKeyword: "Technical SEO",
    images: ["digital/Technical SEO.png"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "seo-5",
    title: "Local SEO",
    description: "Local SEO for manage users and courses and analytics.",
    category: "seo",
    highlightKeyword: "Local SEO",
    images: ["digital/Local SEO.png"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },


  {
    id: "Google Ads-1",
    title: "Google Ads",
    description: "Google Ads for manage users and courses and analytics.",
    category: "google ads",
    highlightKeyword: "Google Ads",
    images: ["digital/Google Ads 2.png", "digital/Google Ads 3.png", "digital/Google Ads 4.jpg", "digital/Google Ads 1.jpg"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "meta ads-1",
    title: "Meta Ads",
    description: "Meta Ads for manage users and courses and analytics.",
    category: "meta ads",
    highlightKeyword: "Meta Ads",
    images: ["digital/Meta Ads.jpg"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "blog/article-1",
    title: "Blog/Article",
    description: "Blog/Article for manage users and courses.",
    category: "blog/article",
    highlightKeyword: "Blog",
    images: ["digital/Article Writing.jpg", "digital/Blog Writing.png", "digital/Guest Post 1.png"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "digital branding-1",
    title: "Digital Branding",
    description: "Digital Branding for manage users and courses.",
    category: "digital branding",
    highlightKeyword: "Digital Branding",
    images: ["digital/Digital Branding.webp"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

  {
    id: "social media-1",
    title: "Social Media",
    description: "Social Media for manage users and courses and analytics.",
    category: "social media",
    highlightKeyword: "Social Media",
    images: ["digital/Social Media.webp"],
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "August 2023",
    features: [
      "Real-time message delivery",
      "User presence detection",
      "Message history storage",
      "End-to-end encryption",
    ],
  },

]


export const sectionInfo = {
  "seo": {
    "title": "SEO Projects",
    "description": "Explore my SEO projects with a range of features and capabilities and search engine optimization."
  },
  "google ads": {
    "title": "Google Ads Projects",
    "description": "Discover my Google Ads projects with a range of features and capabilities and google ads optimization."
  },
  "meta ads": {
    "title": "Meta Ads Projects",
    "description": "Discover my Meta Ads projects with a range of features and capabilities and meta ads optimization."
  },
  "blog/article": {
    "title": "Blog/Article Projects",
    "description": "Discover my Blog/Article projects with a range of features and capabilities and blog/article optimization."
  },
  "digital branding": {
    "title": "Digital Branding Projects",
    "description": "Discover my Digital Branding projects with a range of features and capabilities and digital branding optimization."
  },
  "social media": {
    "title": "Social Media Projects",
    "description": "Explore my Social Media projects with a range of features and capabilities."
  }

}
