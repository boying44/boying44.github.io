/**
 * Structured resume data for Engineering (technical) and Client-facing versions.
 * Edit this file to update resume content for both variants.
 */

export type ResumeVariant = "engineering" | "client-facing";

export interface Project {
  title: string;
  company: string;
  description: string;
  tech: string;
  /** Emphasize in client-facing version (collaboration, UX, delivery) */
  clientFacingHighlights?: string[];
  /** Emphasize in engineering version (scale, tech depth) */
  technicalHighlights?: string[];
}

export interface ResumeContent {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  education: { degree: string; school: string; details?: string }[];
  projects: Project[];
  skills: string[];
  /** Optional: skills to add/emphasize for this variant */
  skillsEmphasis?: string[];
}

const baseContent = {
  name: "Boying Tang",
  title: "Software Engineer",
  location: "Seattle, WA",
  email: "boying.tang.44@gmail.com",
  linkedin: "https://linkedin.com/in/boyingtang",
  github: "https://github.com/boying44",
  summary:
    "Software engineer who values clarity, reliability, and pragmatism. Focus on full-stack TypeScript, scalable API design, and making systems observable and maintainable.",
  education: [
    {
      degree: "Bachelor of Science",
      school: "New York University",
      details: "Computer Science", // Edit as needed
    },
  ],
  projects: [
    {
      title: "Silk Browser Chromium Integration Accelerator",
      company: "Amazon",
      description:
        "Streamlined weekly ingestion of 1,500+ Chromium commits; reduced commit lag from 3,000 to 1,000 by building custom automation and integration tooling across a 25M+ LOC codebase serving 9.7M+ users.",
      tech: "Python, CI/CD, Linux, Chromium, Git, AWS",
      technicalHighlights: ["25M+ LOC codebase", "9.7M+ users", "automation tooling"],
      clientFacingHighlights: ["Cross-team coordination", "release pipeline ownership"],
    },
    {
      title: "Release CI/CD and Test Automation",
      company: "Amazon",
      description:
        "Designed pipelines and UI Automator suites that cut over 12 hours of manual verification per release through gated builds, parallelization, and automated reporting.",
      tech: "Python, UI Automator, CI/CD, AWS, Linux",
      technicalHighlights: ["12+ hours saved per release", "parallelization"],
      clientFacingHighlights: ["Stakeholder visibility", "automated reporting"],
    },
    {
      title: "Client-Facing Feature Platform & Design System",
      company: "Aerware",
      description:
        "Partnered with design and backend to ship responsive interfaces; translated 47+ UI/UX specs into production and established reusable components and patterns to reduce UI defects and speed delivery.",
      tech: "React, TypeScript/JavaScript, CSS, API integration, Microservices",
      technicalHighlights: ["47+ UI specs", "reusable components"],
      clientFacingHighlights: ["Partnered with design", "UI/UX translation", "reduced defects"],
    },
    {
      title: "Microservices Caching and Performance Optimization",
      company: "NYU IT",
      description:
        "Implemented targeted caching strategies that lowered latency and stabilized P95 across services with clear invalidation policies and metrics-driven tuning.",
      tech: "ASP.NET Core, C#, Redis/Memcached, REST, SQL",
      technicalHighlights: ["P95 latency", "caching strategies"],
      clientFacingHighlights: ["Service reliability", "metrics-driven"],
    },
    {
      title: "Role-Based Access Control and Auth Services",
      company: "NYU IT",
      description:
        "Built auth and RBAC services used across multiple departments; hardened security with token-based auth and scoped permissions, simplifying API consumption patterns.",
      tech: "ASP.NET Core, C#, REST, Identity, SQL",
      technicalHighlights: ["Token-based auth", "scoped permissions"],
      clientFacingHighlights: ["Multi-department adoption", "simplified consumption"],
    },
    {
      title: "RESTful API Development and Integration",
      company: "NYU IT",
      description:
        "Delivered REST services and frontend integrations that improved UX and reduced backend load; standardized contracts and error handling to increase reliability across consumers.",
      tech: "ASP.NET Core, React/Redux, REST, TypeScript/JavaScript",
      technicalHighlights: ["REST services", "error handling"],
      clientFacingHighlights: ["UX improvement", "reliability across consumers"],
    },
  ],
};

/** Technical / engineering skills – emphasize for engineering resume */
const technicalSkills = [
  "TypeScript / JavaScript",
  "React / Next.js",
  "Node.js",
  "Python",
  "AWS (S3, CloudFront, Lambda)",
  "Terraform",
  "Testing (Jest, RTL)",
  "CI/CD (GitHub Actions)",
  "API Design (REST, GraphQL)",
  "Linux, Git",
  "Redis, SQL",
];

/** Client-facing / collaborative skills – emphasize for client-facing resume */
const clientFacingSkills = [
  "Cross-functional Collaboration",
  "UI/UX Implementation",
  "API Integration",
  "Design System Development",
  "Stakeholder Communication",
  "Agile Delivery",
  "TypeScript / JavaScript",
  "React / Next.js",
  "REST APIs",
  "CI/CD",
];

export type SectionKey = "education" | "experience" | "projects" | "skills";

export interface SectionSelection {
  summary: boolean;
  education: boolean;
  experience: boolean;
  projects: boolean;
  skills: boolean;
}

export const defaultSectionSelection: SectionSelection = {
  summary: true,
  education: true,
  experience: true,
  projects: true,
  skills: true,
};

export function getResumeContent(
  variant: ResumeVariant,
  sections?: Partial<SectionSelection>
): ResumeContent {
  const full = {
    ...baseContent,
    summary:
      variant === "engineering"
        ? "Software engineer focused on full-stack TypeScript, scalable API design, and systems observability. Experience with 25M+ LOC codebases, CI/CD automation, and performance optimization."
        : "Software engineer who partners with design and stakeholders to ship reliable, user-focused software. Strong in cross-functional delivery, UI/UX implementation, and API integration.",
    skills: variant === "engineering" ? technicalSkills : clientFacingSkills,
  };
  if (!sections) return full;
  const showExperience = sections.experience !== false || sections.projects !== false;
  return {
    ...full,
    summary: sections.summary !== false ? full.summary : "",
    education: sections.education !== false ? full.education : [],
    projects: showExperience ? full.projects : [],
    skills: sections.skills !== false ? full.skills : [],
  };
}
