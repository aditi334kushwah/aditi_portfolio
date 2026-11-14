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
      "A full-stack email marketing platform to design templates, manage subscribers, and send bulk campaigns with asynchronous worker queues and Google Gemini AI content generation.",
    fullOverview:
      "Mailvora is an end-to-end email marketing and campaign delivery platform. Built with Django REST Framework, Next.js, and TypeScript, it secures APIs via JWT (SimpleJWT) with role-based access control and DRF permissions. It implements asynchronous campaign dispatching with Celery and Redis to handle bulk sends without blocking API threads, integrates the Resend API for inbox placement, provides an AI content assistant powered by Google Gemini API with prompt engineering and SSE streaming, and features a drag-and-drop template studio with 10+ pre-built templates and dynamic personalization tags.",
    liveUrl: "https://mailvora-eight.vercel.app/",
    githubUrl: "https://github.com/aditi334kushwah/Mailvora",
    stats: [
      { label: "Architecture", value: "Django DRF + Next.js" },
      { label: "Async Queue", value: "Celery & Redis Workers" },
      { label: "AI Integration", value: "Google Gemini + SSE" },
      { label: "Database", value: "PostgreSQL (Neon)" },
    ],
    tags: [
      "Django",
      "Django REST Framework",
      "Next.js",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Celery",
      "Redis",
      "Resend API",
      "Google Gemini API",
      "JWT / SimpleJWT",
      "Render",
      "Vercel",
    ],
    features: [
      "Secured REST APIs with JWT (SimpleJWT), role-based access control, and DRF permission guards.",
      "Asynchronous campaign dispatch pipeline with Celery and Redis broker preventing request blocking.",
      "Integrated Resend API for reliable, high-deliverability email inbox dispatching.",
      "Subscriber management engine with CSV bulk import and self-service unsubscribe portal.",
      "Drag-and-drop template studio with inline editing, 10+ pre-built templates, and {{first_name}} tags.",
      "AI content assistant using Google Gemini API with prompt engineering and Server-Sent Events (SSE) streaming.",
      "ACID database transactions for strict campaign data integrity across bulk dispatches.",
    ],
    architecture: [
      "Frontend UI: Next.js App Router with TypeScript and Tailwind CSS for snappy template editing and subscriber analytics.",
      "Backend & Security: Django REST Framework with SimpleJWT authentication, role-based access control, and throttled endpoints.",
      "Async Worker Queue: Celery distributed task workers backed by Redis broker offloading heavy email generation and dispatch.",
      "Data & Storage: PostgreSQL on Neon Cloud with relational models for Users, Subscriber Lists, Campaigns, and Dispatch Logs.",
    ],
    challenges: [
      {
        problem:
          "Handling bulk email triggers synchronously blocked backend HTTP workers and risked request timeouts.",
        solution:
          "Implemented asynchronous task queues using Celery backed by Redis, chunking email batches into worker tasks with status updates.",
      },
      {
        problem:
          "Subscriber CSV file uploads with thousands of rows caused potential memory spikes and schema validation bottlenecks.",
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
        items: ["Next.js", "TypeScript", "Tailwind CSS", "React Hooks"],
      },
      {
        category: "Backend & Queues",
        items: ["Python", "Django", "Django REST Framework", "Celery", "Redis", "SSE"],
      },
      {
        category: "AI & Integrations",
        items: ["Google Gemini API", "Resend API", "SimpleJWT", "Cloudinary"],
      },
      {
        category: "Database & Cloud",
        items: ["PostgreSQL (Neon)", "Django ORM", "Vercel", "Render"],
      },
    ],
    accentColor: "#6366f1",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    screenshot: "/projects/mailvora.jpg",
  },
  {
    id: "tripnova",
    title: "Tripnova",
    tagline: "Dynamic Full Stack Travel Experience & Tour Booking Platform",
    category: "Full Stack Travel Platform / Booking Experience",
    description:
      "An end-to-end travel booking platform with package listings, search by trip type & month, Razorpay secure payment gateway, and automated PDF vouchers.",
    fullOverview:
      "Tripnova is a production-grade travel booking platform engineered with a Django REST Framework backend and a Next.js 16 frontend with Server-Side Rendering (SSR) for fast page loads and optimized SEO. It features a complete booking workflow with guest dashboards, package search by destination, trip type, and travel month. The payment architecture integrates Razorpay in test mode with server-side order generation and HMAC-SHA256 signature verification to prevent tampering. Booking confirmations are automated via SMTP HTML emails, and instant downloadable travel vouchers are generated on the fly with jsPDF.",
    liveUrl: "https://travellingwebsite-ten.vercel.app/",
    githubUrl: "https://github.com/aditi334kushwah",
    backendUrl: "https://travellingwebsite-2.onrender.com/",
    stats: [
      { label: "Frontend", value: "Next.js 16 (SSR)" },
      { label: "Payments", value: "Razorpay HMAC-SHA256" },
      { label: "Documents", value: "jsPDF Voucher Engine" },
      { label: "Database", value: "PostgreSQL (Neon)" },
    ],
    tags: [
      "Django",
      "Django REST Framework",
      "Next.js 16",
      "React.js",
      "Tailwind CSS",
      "PostgreSQL (Neon)",
      "Razorpay",
      "Cloudinary",
      "jsPDF",
      "Render",
      "Vercel",
    ],
    features: [
      "End-to-end travel booking workflow with dynamic package listings, search by trip type and travel month, and guest dashboard.",
      "Robust DRF backend with JWT authentication, custom permissions, and CORS security.",
      "Next.js 16 frontend leveraging Server-Side Rendering (SSR) for lightning-fast loads and high SEO rankings.",
      "Secure Razorpay integration with server-side order creation and HMAC-SHA256 cryptographic signature verification.",
      "Automated HTML booking-confirmation emails dispatched via SMTP with transactional guarantees.",
      "Instant downloadable PDF travel vouchers programmatically generated using jsPDF.",
      "ACID database transactions and server-side validation ensuring consistent booking and payment records.",
    ],
    architecture: [
      "Frontend UI: Next.js 16 with React, Tailwind CSS, and Server-Side Rendering (SSR) deployed on Vercel Edge.",
      "RESTful API Service: Django application providing clean data endpoints for packages, bookings, and customer profiles hosted on Render.",
      "Payment & Verification: Razorpay webhook integration with cryptographic HMAC-SHA256 verification preventing replay attacks.",
      "Database & Assets: PostgreSQL hosted on Neon Cloud with Cloudinary CDN for responsive media asset delivery.",
    ],
    challenges: [
      {
        problem:
          "Ensuring payment verification integrity and preventing tampered client-side transaction payloads.",
        solution:
          "Implemented strict server-side Razorpay order generation and HMAC-SHA256 signature verification prior to updating booking states.",
      },
      {
        problem:
          "Handling cold start latencies from cloud hosting (Render) without breaking client user experience.",
        solution:
          "Added polite skeleton loading states, client-side retry logic, and fallback visual notifications in the Next.js frontend.",
      },
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["Next.js 16", "React.js", "Tailwind CSS", "jsPDF"],
      },
      {
        category: "Backend & APIs",
        items: ["Python", "Django", "Django REST Framework", "SMTP Email"],
      },
      {
        category: "Payments & Cloud",
        items: ["Razorpay (HMAC-SHA256)", "Cloudinary", "Render", "Vercel"],
      },
      {
        category: "Database",
        items: ["PostgreSQL (Neon)", "Django ORM", "Database Transactions"],
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
    title: "Programming Languages",
    description: "Strong foundation in object-oriented and functional software development.",
    skills: [
      { name: "Python", level: "Core Language", highlight: true },
      { name: "JavaScript", level: "Web Standard", highlight: true },
      { name: "TypeScript", level: "Type Safe", highlight: true },
      { name: "SQL", level: "Query Engine", highlight: true },
      { name: "Java", level: "OOP", highlight: false },
      { name: "HTML5 & CSS3", level: "Markup & Styling", highlight: false },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern, responsive, and accessible user interfaces built with React & Next.js.",
    skills: [
      { name: "Next.js", level: "Full Stack SSR", highlight: true },
      { name: "React.js", level: "UI Library", highlight: true },
      { name: "Tailwind CSS", level: "Modern Styling", highlight: true },
      { name: "Server-Side Rendering (SSR)", level: "Performance", highlight: true },
      { name: "Responsive Design", level: "Mobile First", highlight: false },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Robust, scalable API engines, asynchronous pipelines, and secure auth.",
    skills: [
      { name: "Django", level: "Framework", highlight: true },
      { name: "Django REST Framework", level: "API Engine", highlight: true },
      { name: "REST API Design", level: "Architecture", highlight: true },
      { name: "JWT / SimpleJWT", level: "Security", highlight: true },
      { name: "Role-Based Access Control", level: "RBAC", highlight: false },
      { name: "Celery & Redis", level: "Async Queues", highlight: true },
      { name: "Server-Sent Events (SSE)", level: "Realtime", highlight: false },
      { name: "OOP Principles", level: "Core Pattern", highlight: false },
    ],
  },
  {
    title: "Databases & ORM",
    description: "Structured relational schemas, indexing, and performant ACID transactions.",
    skills: [
      { name: "PostgreSQL", level: "Relational DB", highlight: true },
      { name: "Neon Cloud DB", level: "Serverless Postgres", highlight: true },
      { name: "MySQL", level: "Relational DB", highlight: false },
      { name: "MongoDB", level: "Document DB", highlight: false },
      { name: "Django ORM", level: "Data Layer", highlight: true },
      { name: "Database Transactions", level: "ACID Integrity", highlight: false },
    ],
  },
  {
    title: "Integrations & Services",
    description: "Production payment systems, delivery APIs, and generative AI engines.",
    skills: [
      { name: "Razorpay (Test Mode)", level: "Payment Gateway", highlight: true },
      { name: "Resend API", level: "Email Deliverability", highlight: true },
      { name: "Google Gemini API", level: "Generative AI", highlight: true },
      { name: "SMTP / Django Email", level: "Notifications", highlight: false },
      { name: "Cloudinary", level: "Media Storage", highlight: false },
      { name: "jsPDF", level: "Voucher Generation", highlight: false },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Version control, API testing, debugging, and continuous cloud deployment.",
    skills: [
      { name: "Git", level: "VCS", highlight: true },
      { name: "GitHub", level: "Collaboration", highlight: true },
      { name: "Postman", level: "API Testing & Docs", highlight: true },
      { name: "VS Code", level: "IDE", highlight: false },
      { name: "Render", level: "Cloud Backend", highlight: true },
      { name: "Vercel", level: "Edge Frontend", highlight: true },
    ],
  },
];

export const TIMELINE_EXPERIENCE = [
  {
    type: "experience",
    role: "Frontend Developer Intern",
    company: "Vedmata",
    duration: "July 2025 – December 2025 (6 Months)",
    badge: "Internship",
    description:
      "Contributed to enterprise web frontend engineering at Vedmata, integrating high-performance React.js applications with Django REST Framework backend APIs.",
    responsibilities: [
      "Integrated React.js frontend with Django REST Framework (DRF) backend APIs, handling authentication state and asynchronous data workflows.",
      "Developed reusable UI components using React Hooks and state management, improving application responsiveness and maintainability.",
      "Built an ATS-optimized resume generator with dynamic section rendering and one-click PDF export functionality.",
      "Collaborated in Agile sprints, managed code versions with Git/GitHub, and adhered to code review standards.",
    ],
    technologies: ["React.js", "Django REST Framework", "JavaScript", "HTML5 & CSS3", "Git", "GitHub", "Postman"],
  },
];

export const TIMELINE_EDUCATION = [
  {
    type: "education",
    degree: "Integrated Master of Computer Applications (MCA)",
    status: "July 2022 – Present (Final Year)",
    institution: "Raja Balwant Singh Management Technical Campus (RBSMTC), Agra",
    cgpa: "8.10 / 10.0",
    focus: "Advanced Software Engineering, Web Systems & Database Architecture",
    description:
      "Comprehensive 5-year integrated MCA curriculum at RBSMTC Agra, specializing in object-oriented programming, data structures & algorithms, web systems, database design, and cloud architectures.",
    highlights: [
      "Academic performance: 8.10 / 10.0 CGPA.",
      "Hands-on expertise in Python, Django, Next.js, React, and modern SQL/PostgreSQL databases.",
      "Strong computer science foundations in Data Structures, Algorithms, DBMS, and Operating Systems.",
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

