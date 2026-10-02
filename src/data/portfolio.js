// ============================
// PERSONAL INFO
// ============================
export const personal = {
  name: "Satyam Anand",
  firstName: "Satyam Anand",
  role: "MERN-Stack Developer & UI/UX Designer",
  tagline: "I create magic with code. Passionate. Purposeful.",
  email: "satyamkr.16362@gmail.com",        // ⬅️ replace with yours
  phone: "+91 7667571530",             // ⬅️ replace with yours
  location: "India",
  resumeUrl: "/resume.pdf",  // ⬅️ Update this
  experience: "1.5+",
  bio: `As a passionate and UI/UX and MERN-Stack Developer with 1.5+ years of hands-on experience, I thrive on crafting captivating digital experiences. Armed with proficiency in HTML, CSS, and JavaScript, I weave intricate designs into functional and delightful user interfaces. With React.js as my trusty sidekick, and Node.js and Express.js as my backend powerhouses, I transform ideas into reality — ensuring seamless interactions and intuitive navigation.`,
};

// ============================
// STATS (Hero)
// ============================
export const stats = [
  { num: "1.5+", label: "Years Experience" },
  { num: "15+",  label: "Projects Built" },
  { num: "10+",  label: "Tech Stack" },
];

// ============================
// ABOUT — Highlights
// ============================
export const highlights = [
  "Problem Solver",
  "Fast Learner",
  "Team Player",
  "Detail Oriented",
  "Pixel Perfect",
  "Clean Code",
];

// ============================
// SKILLS
// ============================
export const skills = {
  design: {
    title: "Designer",
    description:
      "I cherish elegance: clean design, thoughtful interactions, and interfaces that feel effortless.",
    enjoys: ["UI Design", "UX Research", "Web Design", "Wireframing", "Prototyping"],
    tools: ["Figma", "Adobe XD", "Canva"],
  },
  dev: {
    title: "MERN-Stack Developer",
    description:
      "I sculpt dreams to life in the browser, molding ideas from scratch with clean, scalable code.",
    languages: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "REST APIs",
    ],
    devTools: ["Git", "GitHub", "VS Code", "Postman", "Vite", "Netlify"],
  },
};

// ============================
// TECH ICONS MAP
// ============================
export const techIcons = {
  Figma: "/images/figma-icon.png",
  JavaScript: "/images/js.png",
  HTML5: "/images/html-5.png",
  CSS3: "/images/css-3.png",
  "Express.js": "/images/ex.png",
  "React.js": "/images/react-js-icon.png",
  MongoDB: "/images/mongo.png",
  "Node.js": "/images/node.png",
  TailwindCSS: "/images/tailwind-css-icon.png",
  "VS Code": "/images/visual-studio-code-icon.png",
};

// ============================
// PROJECTS
// ============================
// ============================
// PROJECTS
// ============================
export const projects = [
  {
  title: "The Grand Aurelia — Luxury Hotel Website",
  year: "2026",
  category: "Frontend",
  company: "Client Demo",
  role: "Frontend Developer · UI Designer",
  description:
    "A premium, fully responsive single-page-hotel website built for a client demo. Features multi-page routing, glassmorphism UI, cinematic scroll animations, image-rich galleries with keyboard-navigable lightbox, and a complete booking flow with live GST calculation in Indian Rupees. Deployed live on Vercel.",
  highlights: [
    "Multi-page SPA with React Router (Home, Rooms, Room Details, Amenities, Gallery, About, Contact, Booking)",
    "Glassmorphism + champagne-gold luxury design system",
    "Scroll-triggered animations, parallax hero, animated counters (Framer Motion)",
    "Currency toggle with ₹ INR formatting + live 12% GST calculation",
    "Image lightbox with keyboard navigation (← → · Esc) and thumbnail strip",
    "Bento-grid gallery with category filters and animated gold pill",
    "Custom SVG monogram logo + favicon (gold 'A' with crown motif)",
    "Comfortaa + Gruppo + Indie Flower typography pairing",
    "Auto scroll-to-top on route change + floating back-to-top button",
    "Fully responsive — mobile-first, tested 320px → 4K",
    "Lazy-loaded images, code-split routes, optimized for Lighthouse 90+",
    "Deployed live on Vercel with auto-deploy on git push",
  ],
  tech: [
    "React.js",
    "Vite",
    "TailwindCSS v4",
    "Framer Motion",
    "React Router v6",
    "React Icons",
  ],
  code: "", // client demo — code not public
  live: "https://grand-aurelia-hotel.vercel.app/", // ⬅️ replace with your actual Vercel URL
  featured: true,
},
{
  title: "Madhuri Nidan Kendra — Clinic Website",
  year: "2026",
  category: "Full Stack",
  company: "Madhuri Nidan Kendra",
  role: "Full Stack Developer · UI Designer",
  description:
    "The official website for Madhuri Nidan Kendra, a multi-specialty medical clinic in Hasanpura, Siwan (Bihar). Built as a fully responsive, SEO-optimized site featuring a doctors showcase, service catalog, patient testimonials, FAQ, and an online appointment booking flow — designed to convert local search traffic into booked patients. Deployed live on Vercel.",
  highlights: [
    "SEO-optimized for local search ('Top Doctors in Hasanpura, Siwan')",
    "Doctors showcase with qualifications, experience, and specializations",
    "Service catalog: operations, child vaccination, health checkups, lab tests, emergency, consultation",
    "Patient testimonials grid with star ratings",
    "FAQ accordion addressing common patient questions",
    "Online appointment booking flow with phone/visit alternatives",
    "Clinic gallery showcasing facilities and environment",
    "Fully responsive — mobile-first design for local patient base",
    "Emergency contact call-to-action prominently placed",
    "Deployed live on Vercel",
  ],
  tech: [
    "React.js",
    "Vite",
    "TailwindCSS",
    "React Router",
    "Framer Motion",
    "React Icons",
  ],
  code: "", // private client code
  live: "https://madhuri-nidan-kendra.vercel.app/",
  featured: true,
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
},
  {
  title: "Booking System — Client Demo",
  year: "2026",
  category: "Full Stack",
  company: "Client Work",
  role: "Full Stack Developer",
  description:
    "A fully functional booking platform built for a client, featuring real-time availability, secure form submissions, and a clean, conversion-focused UI. Deployed and live in production — ready for client demonstrations.",
  highlights: [
    "Real-time booking & availability",
    "Secure form submission flow",
    "Fully responsive across all devices",
    "Optimized for speed & conversions",
    "Deployed live on Vercel",
    "Clean, modern UI/UX",
  ],
  tech: ["React.js", "TailwindCSS"],
  code: "", // private client code
  live: "https://booking-demo-self.vercel.app/",
  featured: true,
},
  {
    title: "Thermo Packers — Company Website",
    year: "2025",
    category: "Full Stack",
    company: "Thermo Packers",
    role: "MERN-Stack Developer",
    description:
      "Designed and developed the official website for Thermo Packers, a leading packaging solutions company. Built as a fully responsive, SEO-friendly, production-grade web application with a modern UI, smooth animations, and a powerful admin panel for managing products, inquiries, and content.",
    highlights: [
      "Fully responsive multi-page company website",
      "Product catalog with filtering & detail pages",
      "Admin dashboard for content & inquiry management",
      "Contact & inquiry form with email notifications",
      "SEO optimized with fast load times",
      "Deployed and maintained in production",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "REST APIs"],
    code: "", // private company repo — leave empty to hide the button
    live: "https://thermopackers.com", // ⬅️ replace with real URL
    featured: true,
  },

  {
    title: "E-Commerce Web Application",
    year: "2024",
    category: "Full Stack",
    role: "Full Stack Developer",
    description:
      "A full-featured e-commerce platform with authentication, product catalog, shopping cart, and secure checkout. Built with performance in mind using lazy loading, code splitting, and efficient state management.",
    highlights: [
      "User authentication",
      "Product catalog browsing",
      "Cart & secure checkout",
      "Lazy loading + code splitting",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    code: "https://github.com/Pradyumna5777/E-Commerce-Web-App",
    live: "https://dreamy-platypus-0d1a67.netlify.app/",
    featured: true,
  },

  {
    title: "CRUD Application",
    year: "2024",
    category: "Frontend",
    role: "Frontend Developer",
    description:
      "A robust CRUD application built with ReactJS featuring add, edit, delete, form validation, and optimized performance. Implements smooth data flow, client-side rendering, and intuitive UX with error handling at every step.",
    highlights: [
      "Add / Edit / Delete records",
      "Form validation & error handling",
      "Optimized rendering & state flow",
      "Clean, intuitive UI",
    ],
    tech: ["React.js", "JavaScript", "CSS3"],
    code: "https://github.com/Pradyumna5777/CRUD_Application",
    live: "https://dashing-dasik-dee0f0.netlify.app/",
    featured: false,
  },

  // ⬇️ Add more projects here — the card auto-renders anything you add:
  // {
  //   title: "Project Name",
  //   year: "2024",
  //   category: "Frontend",          // Frontend | Backend | Full Stack | UI/UX
  //   company: "Freelance",          // optional
  //   role: "Frontend Developer",    // optional
  //   description: "...",
  //   highlights: ["...", "..."],
  //   tech: ["React.js", "TailwindCSS"],
  //   code: "https://github.com/...",   // leave "" to hide the code button
  //   live: "https://...",              // leave "" to hide the live button
  //   featured: false,
  // },
];

// ============================
// EXPERIENCE TIMELINE
// ============================
// ============================
// EXPERIENCE TIMELINE
// ============================
export const experience = [
  // ⭐ Most recent — full-time role
  // {
  //   role: "MERN-Stack Developer",
  //   company: "Thermo Packers",
  //   period: "2024 — Present",
  //   duration: "Current",
  //   type: "Full-time",
  //   description:
  //     "Working as a full-time MERN-Stack Developer, building and maintaining production-grade web applications with React, Node.js, Express, and MongoDB. Responsible for end-to-end feature delivery — from UI/UX design to backend APIs and deployment.",
  //   points: [
  //     "Developed multiple production features using React.js + Node.js",
  //     "Built and consumed REST APIs with Express.js and MongoDB",
  //     "Designed responsive, pixel-perfect UIs in Figma then implemented with React + TailwindCSS",
  //     "Collaborated with cross-functional teams for feature planning and delivery",
  //     "Optimized performance using lazy loading, memoization, and code splitting",
  //     "Handled deployment, debugging, and ongoing maintenance of live apps",
  //   ],
  //   tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "REST APIs"],
  // },
   {
    role: "MERN-Stack Developer",
    company: "Freelance",
    period: "2024 — Present",
    duration: "Current",
    type: "Freelance",
    description:
      "Working as a freelance MERN-Stack Developer, building and maintaining production-grade web applications with React, Node.js, Express, and MongoDB. Responsible for end-to-end feature delivery — from UI/UX design to backend APIs and deployment.",
    points: [
      "Developed multiple production features using React.js + Node.js",
      "Built and consumed REST APIs with Express.js and MongoDB",
      "Designed responsive, pixel-perfect UIs in Figma then implemented with React + TailwindCSS",
      "Collaborated with cross-functional teams for feature planning and delivery",
      "Optimized performance using lazy loading, memoization, and code splitting",
      "Handled deployment, debugging, and ongoing maintenance of live apps",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "REST APIs"],
  },

  // Freelance / Personal
  {
    role: "Freelance MERN-Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2024 — Present",
    duration: "1.5+ yrs",
    type: "Freelance",
    description:
      "Designed and shipped multiple full-stack web applications using React, Node, Express, and MongoDB. Focused on clean architecture, responsive UI, and performance optimization.",
    points: [
      "Built 15+ responsive, production-ready web apps",
      "Implemented REST APIs with Node.js & Express",
      "Crafted pixel-perfect UIs in Figma then coded them in React + Tailwind",
      "Optimized apps using lazy loading, code splitting & memoization",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
  },

  // UI/UX
  {
    role: "UI/UX Designer",
    company: "Self-taught / Client Work",
    period: "2024 — Present",
    duration: "1.5+ yrs",
    type: "Freelance",
    description:
      "Designed intuitive interfaces for web apps — from wireframes to high-fidelity prototypes — ensuring the final coded product matches the design vision.",
    points: [
      "Created wireframes, prototypes & design systems in Figma",
      "Focused on accessibility, hierarchy & micro-interactions",
      "Bridged the gap between design and development",
    ],
    tech: ["Figma", "UI Design", "Prototyping", "Design Systems"],
  },
];

// ============================
// SOCIALS
// ============================
export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pradyumna-kumar-chaurasiya-b958611b7/",
    icon: "FaLinkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Pradyumna5777",
    icon: "FaGithub",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_p_chaurasiya/",
    icon: "FaInstagram",
  },
];