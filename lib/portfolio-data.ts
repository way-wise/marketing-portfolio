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
    id: "mobile-2",
    title: "E-commerce App",
    description: "e-commerce app with payment processing and inventory management.",
    category: "mobile",
    highlightKeyword: "E-commerce",
    images: ["/mobile/app-2.png"],
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-3",
    title: "Finance App",
    description: "finance app with stock market analysis and portfolio management.",
    category: "mobile",
    highlightKeyword: "Finance",
    images: ["/mobile/app-3.png"],
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-4",
    title: "Weather App",
    description: "weather app with weather forecast and location tracking.",
    category: "mobile",
    highlightKeyword: "Weather",
    images: ["/mobile/app-4.png"],
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-5",
    title: "Event Booking App",
    description: "event booking app with event planning and management.",
    category: "mobile",
    highlightKeyword: "Events",
    images: ["/mobile/app-5.png"],
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-6",
    title: "Travel & Tour Guide App",
    description: "travel & tour guide app with travel planning and management.",
    category: "mobile",
    highlightKeyword: "Travel",
    images: ["/mobile/app-6.png"],
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-7",
    title: "E-commerce App",
    description: "ecommerce app with e-commerce features.",
    category: "mobile",
    highlightKeyword: "E-commerce",
    images: ["/mobile/app-7.png"],
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "mobile-8",
    title: "Food Recipe App",
    description: "food recipe app with food recipe features.",
    category: "mobile",
    highlightKeyword: "Recipes",
    images: ["/mobile/app-8.png"],
    technologies: ["Flutter", "Dart", "Google Maps API"],
    demoUrl: "https://example.com/demo",
    completionDate: "October 2023",
    features: [
      "Offline map functionality",
      "Itinerary planning and management",
      "Local recommendations engine",
      "Travel journal and photo storage",
    ],
  },
  {
    id: "frontend-1",
    title: "Web Application",
    description: "Web application with modern design and responsive layout.",
    category: "frontend",
    highlightKeyword: "Web",
    images: ["/web/web-1.webp"],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "January 2023",
    features: [
      "Interactive data visualizations",
      "Real-time data updates",
      "Customizable dashboard layouts",
      "Export and reporting capabilities",
    ],
  },
  {
    id: "frontend-2",
    title: "E-commerce Platform",
    description: "E-commerce platform with e-commerce features.",
    category: "frontend",
    highlightKeyword: "E-commerce",
    images: ["/web/web-2.jpg"],
    technologies: ["Vue.js", "Vuex", "SCSS"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "May 2023",
    features: [
      "Course content management",
      "Progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Certificate generation",
    ],
  },
  {
    id: "frontend-3",
    title: "Sports Application",
    description: "Sports application with sports features and analytics.",
    category: "frontend",
    highlightKeyword: "Sports",
    images: ["/web/web-3.jpg"],
    technologies: ["Vue.js", "Nuxt.js", "SCSS", "TypeScript"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "May 2023",
    features: [
      "Course content management",
      "Progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Certificate generation",
    ],
  },
  {
    id: "frontend-4",
    title: "Deshboard",
    description: "Deshboard application with deshboard features and analytics.",
    category: "frontend",
    highlightKeyword: "Dashboard",
    images: ["/web/web-4.webp"],
    technologies: ["Vue.js", "Nuxt.js", "SCSS", "TypeScript"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    completionDate: "May 2023",
    features: [
      "Course content management",
      "Progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Certificate generation",
    ],
  },
  {
    id: "nocode-1",
    title: "Customar Relationship",
    description: "No-code solution for client .",
    category: "nocode",
    highlightKeyword: "CRM",
    images: ["/no-code/nc-1.webp"],
    technologies: ["Webflow", "Airtable", "Zapier"],
    demoUrl: "https://example.com/demo",
    completionDate: "February 2023",
    features: [
      "Client onboarding workflow",
      "Document sharing and management",
      "Automated notifications",
      "Client feedback collection",
    ],
  },
  {
    id: "nocode-2",
    title: "Wordpress AI theme",
    description: "Wordpress AI theme with AI features and easy to manage.",
    category: "nocode",
    highlightKeyword: "AI",
    images: ["/no-code/nc-2.webp"],
    technologies: ["Bubble", "Stripe", "Memberstack"],
    demoUrl: "https://example.com/demo",
    completionDate: "July 2023",
    features: [
      "Subscription management",
      "Content access control",
      "Member directory and profiles",
      "Integrated payment processing",
    ],
  },
  {
    id: "nocode-2",
    title: "Wordpress AI theme",
    description: "Wordpress AI theme with AI features and easy to manage.",
    category: "nocode",
    highlightKeyword: "AI",
    images: ["/no-code/nc-2.webp"],
    technologies: ["Bubble", "Stripe", "Memberstack"],
    demoUrl: "https://example.com/demo",
    completionDate: "July 2023",
    features: [
      "Subscription management",
      "Content access control",
      "Member directory and profiles",
      "Integrated payment processing",
    ],
  },
  {
    id: "nocode-2",
    title: "Wordpress AI theme",
    description: "Wordpress AI theme with AI features and easy to manage.",
    category: "nocode",
    highlightKeyword: "AI",
    images: ["/no-code/nc-2.webp"],
    technologies: ["Bubble", "Stripe", "Memberstack"],
    demoUrl: "https://example.com/demo",
    completionDate: "July 2023",
    features: [
      "Subscription management",
      "Content access control",
      "Member directory and profiles",
      "Integrated payment processing",
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
  "frontend": {
    "title": "Frontend Projects",
    "description": "Check out my frontend projects with a focus on user experience and design."
  },
  "nocode": {
    "title": "No-code Projects",
    "description": "Explore my no-code projects with a range of features and capabilities."
  },
  "api": {
    "title": "API Projects",
    "description": "Discover my API projects with a focus on scalability and performance."
  }

}
