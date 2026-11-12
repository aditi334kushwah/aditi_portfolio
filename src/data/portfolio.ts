export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  fullOverview: string;
  liveUrl: string;
  githubUrl: string;
  backendUrl?: string;
  stats: { label: string; value: string }[];
  tags: string[];
  features: string[];
  architecture: string[];
  challenges: { problem: string; solution: string }[];
  technologies: { category: string; items: string[] }[];
  accentColor: string;
  gradient: string;
  screenshot?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "mailvora",
    title: "Mailvora",
    tagline: "Scalable Full Stack SaaS & Automated Email Marketing Engine",
    category: "Full Stack SaaS / Distributed System",
    description:
      "An email marketing platform designed to help businesses manage contacts, organize audiences, and orchestrate email campaigns through an intuitive dashboard with asynchronous worker dispatch.",
    fullOverview:
      "Mailvora is an end-to-end email marketing automation platform engineered with Django REST Framework and Next.js. It tackles real-world challenges in bulk email delivery, asynchronous campaign dispatching via Celery and Redis, granular contact list segmentation, and comprehensive campaign telemetry.",
    liveUrl: "https://mailvora-eight.vercel.app/",
    githubUrl: "https://github.com/aditi334kushwah/Mailvora",
    stats: [
      { label: "Architecture", value: "Decoupled Next.js + DRF" },
      { label: "Async Queue", value: "Celery & Redis Worker" },
      { label: "Security", value: "JWT Auth & Session Guards" },
      { label: "Database", value: "PostgreSQL with ORM Indexes" },
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Celery",
      "Redis",
      "Tailwind CSS",
    ],
    features: [
      "Robust JWT Authentication and user authorization safeguards.",
      "Dynamic contact management with multi-tagging and metadata attributes.",
      "Bulk contact ingestion with CSV parser and deduplication logic.",
      "Audience segmentation based on activity status, tags, and engagement.",
      "Campaign management suite with visual template editing and preview mode.",
      "Asynchronous email task distribution offloaded via Celery workers and Redis broker.",
      "Campaign analytics reporting tracking sent volume, delivery status, and logs.",
      "Responsive, high-density dashboard optimized for fast data exploration.",
    ],
    architecture: [
      "Client Layer: Next.js App Router with TypeScript and Tailwind CSS for responsive and accessible client dashboards.",
      "API Gateway / Backend: Django REST Framework providing serialized RESTful endpoints with permission classes and throttling.",
      "Job Queue & Worker: Celery connected to Redis for background mailing jobs, preventing HTTP request timeouts on bulk dispatches.",
      "Data Store: PostgreSQL managed via Django ORM with relational schema for Users, Contact Lists, Campaigns, and Dispatch Logs.",
    ],
    challenges: [
      {
        problem:
          "Handling bulk email triggers synchronously would block backend HTTP workers and risk request timeouts.",
        solution:
          "Implemented asynchronous task queues using Celery backed by Redis, chunking email batches into worker tasks with status updates.",
      },
      {
        problem:
          "CSV file uploads with thousands of rows caused potential memory spikes and schema validation bottlenecks.",
        solution:
          "Engineered stream-based CSV parsing with pre-validation and bulk database transactions (`bulk_create`) to maximize throughput.",
      },
      {
        problem:
          "Maintaining authenticated user sessions securely across decoupled frontend and backend domains.",
        solution:
          "Implemented JWT authentication with rotating refresh tokens and secure HTTP headers, standardizing token interception in API clients.",
      },
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      },
      {
        category: "Backend & Queues",
        items: ["Python", "Django", "Django REST Framework", "Celery", "Redis"],
      },
      {
        category: "Storage & Auth",
        items: ["PostgreSQL", "Django ORM", "JWT (JSON Web Tokens)"],
      },
    ],
    accentColor: "#6366f1",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    screenshot: "/projects/mailvora.jpg",
  },
  {
    id: "tripnova",
    title: "Tripnova",
    tagline: "Dynamic Full Stack Travel Experience & Destination Platform",
    category: "Full Stack Travel Platform / Booking Experience",
    description:
      "A travel platform that empowers users to explore curated travel packages and discover destinations through an interactive interface backed by scalable REST APIs.",
    fullOverview:
      "Tripnova brings together a responsive, search-optimized travel catalog with a robust Python Django backend. Users can filter destinations by criteria, review itineraries, and inspect package details while administrators manage offerings through structured API services.",
    liveUrl: "https://travellingwebsite-ten.vercel.app/",
    githubUrl: "https://github.com/aditi334kushwah",
    backendUrl: "https://travellingwebsite-2.onrender.com/",
    stats: [
      { label: "Deployment", value: "Vercel + Render Cloud" },
      { label: "API Design", value: "RESTful JSON Endpoints" },
      { label: "Data Store", value: "PostgreSQL Relational DB" },
      { label: "Interface", value: "Interactive Package Explorer" },
    ],
    tags: [
      "Next.js",
      "React",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
      "Render Cloud",
    ],
    features: [
      "Interactive travel package discovery with rich media presentations.",
      "Multi-facet destination search, budget filters, and categorization.",
      "Clean RESTful backend API hosted on Render with PostgreSQL persistence.",
      "Comprehensive itinerary and tour highlight showcases.",
      "Responsive layouts tuned for high-resolution displays down to mobile screens.",
      "Graceful fallback handling for API cold-starts and network states.",
    ],
    architecture: [
      "Frontend UI: Built using Next.js and Tailwind CSS with server & client hydration for fluid destination browsing.",
      "RESTful API Service: Django application providing clean data endpoints for packages, locations, and testimonials.",
      "Cloud Database: Hosted PostgreSQL database with relational models mapping destinations to packages and media.",
      "Hosting Infrastructure: Static and SSR frontend served on Vercel Edge with Python API running on Render.",
    ],
    challenges: [
      {
        problem:
          "Handling cold start latencies from free-tier cloud hosting (Render) without breaking client user experience.",
        solution:
          "Added polite skeleton loading states, client-side retry logic, and fallback visual notifications in the Next.js frontend.",
      },
      {
        problem:
          "Complex filtering parameters across price, duration, and region requiring responsive UI updates.",
        solution:
          "Designed dynamic query parameter synchronization with optimized Django ORM filtering to keep payload responses compact.",
      },
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & APIs",
        items: ["Python", "Django", "Django REST Framework", "REST APIs"],
      },
      {
        category: "Database & Cloud",
        items: ["PostgreSQL", "Render Cloud Hosting", "Vercel Edge"],
      },
    ],
    accentColor: "#0ea5e9",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    screenshot: "/projects/tripnova.jpg",
  },
  {
    id: "autrinn",
    title: "Autrinn Solutions",
    tagline: "AI-Driven Customer Experience & Contact Center Platform",
    category: "Full Stack Web Platform / AI Transformation",
    description:
      "Enterprise customer experience platform powering AI-driven automation, contact center operations, and modern cloud deployment strategies backed by 20+ years of domain expertise.",
    fullOverview:
      "Autrinn Solutions (autrinn.com) is an enterprise-grade AI CX transformation platform. Built with Next.js, modern React, and robust API integrations, it presents AI customer support automation, call center modernization, and CX consulting with interactive components, real-time status indicators, and responsive modern aesthetics.",
    liveUrl: "https://autrinn.com/",
    githubUrl: "https://github.com/aditi334kushwah",
    stats: [
      { label: "Architecture", value: "Next.js App Router" },
      { label: "Deployment", value: "Production Edge Cloud" },
      { label: "Focus", value: "AI CX Automation" },
      { label: "Efficiency", value: "+40% Operational Gain" },
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI CX Engine",
      "REST APIs",
      "Cloud Deployment",
    ],
    features: [
      "AI-driven customer experience workflows and contact center transformation.",
      "Modern interactive hero with CX automation live indicators and AI engine previews.",
      "Comprehensive service offerings: Cloud CX, managed contact services, and automation consulting.",
      "High-performance responsive design across mobile, tablet, and desktop viewports.",
      "Lead generation and direct inquiry mechanisms with WhatsApp and contact pipelines.",
      "Optimized SEO, metadata structure, and fast Edge delivery.",
    ],
    architecture: [
      "Frontend: Next.js with React 19, TypeScript, and Tailwind CSS for snappy server-rendered layouts and fluid client interactions.",
      "Design System: Modern glassmorphic cards, gradient accents, floating micro-badges, and clean accessible typography.",
      "Integration Layer: RESTful endpoints for contact inquiries, consultation bookings, and customer telemetry.",
      "Cloud Hosting: Deployed on high-availability edge infrastructure ensuring low-latency delivery across India and worldwide.",
    ],
    challenges: [
      {
        problem:
          "Presenting complex enterprise AI contact center capabilities in a visually engaging, recruiter/client-friendly interface.",
        solution:
          "Engineered interactive floating badges (CX automation live, +40% efficiency) and a streamlined service navigation architecture.",
      },
      {
        problem:
          "Ensuring fast initial page load while rendering high-resolution media and interactive component states.",
        solution:
          "Leveraged Next.js App Router font/image optimizations, CSS backdrop filters, and modular component code-splitting.",
      },
    ],
    technologies: [
      {
        category: "Frontend UI",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      },
      {
        category: "Architecture & Integration",
        items: ["REST APIs", "Modern Contact Center Logic", "Cloud Edge CDN"],
      },
      {
        category: "Performance & SEO",
        items: ["Edge Caching", "Responsive Layouts", "SEO Structured Data"],
      },
    ],
    accentColor: "#0284c7",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    screenshot: "/projects/autrinn.jpg",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Backend Architecture",
    description: "Robust, scalable API engines and business logic systems built in Python.",
    skills: [
      { name: "Python", level: "Core Language", highlight: true },
      { name: "Django", level: "Framework", highlight: true },
      { name: "Django REST Framework", level: "API Engine", highlight: true },
      { name: "REST API Development", level: "Architecture", highlight: true },
      { name: "JWT Authentication", level: "Security", highlight: false },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern, responsive, and accessible user interfaces built with React & Next.js.",
    skills: [
      { name: "Next.js", level: "Full Stack Framework", highlight: true },
      { name: "React.js", level: "UI Library", highlight: true },
      { name: "TypeScript", level: "Type Safety", highlight: true },
      { name: "JavaScript (ES6+)", level: "Language", highlight: false },
      { name: "Tailwind CSS", level: "Modern Styling", highlight: true },
      { name: "HTML5 & CSS3", level: "Semantic Markup", highlight: false },
    ],
  },
  {
    title: "Database & Modeling",
    description: "Structured relational schemas, indexing, and performant ORM query optimization.",
    skills: [
      { name: "PostgreSQL", level: "Relational DB", highlight: true },
      { name: "SQL", level: "Query Language", highlight: false },
      { name: "Django ORM", level: "Data Layer", highlight: true },
      { name: "Database Design", level: "Normalization & Schema", highlight: false },
    ],
  },
  {
    title: "Tools & DevOps Workflow",
    description: "Version control, API testing, debugging, and continuous integration workflows.",
    skills: [
      { name: "Git", level: "VCS", highlight: true },
      { name: "GitHub", level: "Collaboration", highlight: true },
      { name: "VS Code", level: "Development IDE", highlight: false },
      { name: "Postman", level: "API Testing & Docs", highlight: true },
    ],
  },
];

export const TIMELINE_EXPERIENCE = [
  {
    type: "experience",
    role: "Python Full Stack Developer Intern",
    company: "Software Engineering Internship",
    duration: "6 Months Experience",
    badge: "Internship",
    description:
      "Contributed to full stack web development workflows, engineered backend REST APIs using Python and Django, designed database schemas, and integrated dynamic frontend interfaces using React.",
    responsibilities: [
      "Developed and tested modular RESTful endpoints adhering to standard HTTP methods and status codes.",
      "Designed and optimized relational database models and queries with PostgreSQL and Django ORM.",
      "Collaborated on frontend UI integration in React, connecting client state with backend JSON responses.",
      "Participated in Git version control workflows, code reviews, and API debugging sessions using Postman.",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "React", "PostgreSQL", "Git", "Postman"],
  },
];

export const TIMELINE_EDUCATION = [
  {
    type: "education",
    degree: "Master of Computer Applications (Integrated MCA)",
    status: "Final Year Student",
    focus: "Advanced Software Engineering, Web Systems & Database Architecture",
    description:
      "Comprehensive multi-year integrated curriculum covering object-oriented programming, data structures & algorithms, web engineering, database management systems (DBMS), operating systems, and computer networks.",
    highlights: [
      "Specialized coursework in Python Programming, Web Technologies, and Database Systems.",
      "Practical project-based application development simulating industry workflows.",
      "Active problem solving and core computer science fundamentals.",
    ],
  },
];

export const CODING_PROFILES = [
  {
    name: "GitHub",
    handle: "aditi334kushwah",
    url: "https://github.com/aditi334kushwah",
    description:
      "Public repositories showcasing full-stack SaaS platforms, Django REST backends, and Next.js applications.",
    stats: "Active repositories & code contributions",
    badge: "Open Source",
  },
  {
    name: "LeetCode",
    handle: "aditi_123sd",
    url: "https://leetcode.com/u/aditi_123sd/",
    description:
      "Practicing Data Structures, Algorithms, problem analysis, array manipulation, recursion, and search techniques.",
    stats: "Algorithmic Problem Solving",
    badge: "DSA Practice",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

