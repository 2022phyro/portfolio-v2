export const roles = [
  "Fullstack Development",
  "Database Systems",
  "Systems Design & Architecture",
  "Teaching & Education",
];

export const technologies = [
  "Next.js",
  "Django",
  "Rust",
  "Tailwind CSS",
  "Node.js",
  "Socket.io/WebSockets",
  "Fabric.js + Yjs",
  "Apache Kafka",
  "Docker",
  "MongoDB + Redis",
];


export interface ExperienceItem {
  role: string;
  start: string;
  end: string;
  site: string;
  location: string;
  description: string;
  summary: string;
  tools: string[];
  company: string;
}

export interface ExperienceData extends Array<ExperienceItem> {}
export const experiences: ExperienceData = [
  {
    company: "Keenchess",
    role: "Backend Engineer",
    start: "May 2024",
    end: "Present",
    site: "https://www.keenchess.com",
    location: "Remote",
    description:
      "Spearheaded backend transformation and real-time infrastructure enhancements for the Keenchess chess platform.",
    summary:
      "Rebuilt Keenchess’s backend into scalable microservices, integrated secure JWT auth, and enabled real-time gameplay with Kafka and Socket.IO, significantly improving performance and deployment speed.",
    tools: [
      "Node.js",
      "Redis",
      "PostgreSQL",
      "Socket.IO",
      "Kafka",
      "Docker",
      "CI/CD",
    ],
  },

  {
    company: "Codex-Labs",
    role: "Software Engineer",
    start: "January 2025",
    end: "Present",
    site: "https://art.metamuse.onlin",
    location: "Remote",
    description:
      "Led the development of an art collaborative NFT platform (Metamuse) on the Sui blockchain.",
    summary:
      "Built a highly responsive collaborative NFT canvas with Fabric.js and Y.js, integrated Sui blockchain smart contracts, and scaled infrastructure for 10k+ users using Redis and optimized WebSockets.",
    tools: [
      "Fabric.js",
      "Yjs",
      "WebSockets",
      "MongoDB",
      "Redis",
      "Sui Blockchain",
      "Node.js",
    ],
  },
  {
    company: "FutureDevs",
    role: "Software Engineer",
    start: "November 2023",
    end: "June 2024",
    site: "#",
    location: "Remote",
    description:
      "Worked on cost-saving infrastructure and business automation tools.",
    summary:
      "Engineered lightweight backend systems with custom push notifications, internal dashboards, and API-first designs for small businesses, streamlining operations and enhancing data reporting.",
    tools: [
      "Node.js",
      "APIFlask",
      "MongoDB",
      "React",
      "Chart.js",
      "Web Push",
      "Tailwind CSS",
    ],
  },
  {
    company: "MR-International",
    role: "Programming Instructor",
    start: "June 2023",
    end: "April 2024",
    site: "https://www.mr-international.com",
    location: "Port Harcourt",
    description:
      "Educated beginner-to-intermediate learners in Python and web development.",
    summary:
      "Designed and delivered engaging Python and web development lessons, organizing hands-on hackathons and real-world projects to improve learning outcomes.",
    tools: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "VS Code",
      "Replit",
    ],
  },
];

export interface ProjectItem {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  category: "industry" | "collaborative" | "personal";
  layout: "wide" | "narrow";
}

export const projects: ProjectItem[] = [
  {
    name: "Metamuse",
    description:
      "Led the backend and system architecture of Metamuse, a real-time collaborative canvas where users co-create art and mint it as NFTs on the Sui blockchain. Built with CRDT syncing, live chat, and marketplace integration.",
    image: "/shell.png",
    link: "https://art.metamuse.online",
    tags: ["Fabric.js", "Yjs", "WebSockets", "Sui Blockchain", "Node.js"],
    category: "industry",
    layout: "wide"
  },
  {
    name: "Simple Shell",
    description:
      "Built a basic Unix shell in C as a joint systems programming project with a close collaborator. This marked the beginning of my development journey, and taught me the internals of process management and memory handling.",
    image: "/shell.png",
    link: "#",
    tags: ["C", "Bash", "Processes", "Pipes", "Memory"],    category: "collaborative",
    layout: "narrow"
  },
  {
    name: "Notifai",
    description:
      "Developed a web push notification engine using Node.js and Redis that eliminated reliance on third-party services like Firebase Cloud Messaging.",
    image: "/notifai.png",
    link: "https://github.com/2022phyro/notifai-frontend",
    tags: ["Node.js", "Web Push", "MongoDB", "Redis"],
    category: "personal",
    layout: "narrow"
  },
  {
    name: "PoeticVerse",
    description:
      "Designed the backend system for a creative social network that enables poets and writers to post, interact, and share their works in a beautifully minimal interface.",
    image: "/poeticverse.png",
    link: "https://github.com/2022phyro/poeticverse",
    tags: ["Node.js", "Socket.IO", "Kafka", "Docker"],
    category: "collaborative",
    layout: "wide"
  }
];
