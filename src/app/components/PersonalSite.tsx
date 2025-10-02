import React from "react";
import Link from "next/link";

export default function BoyingTangSite() {
  const skills = [
    "TypeScript / JavaScript",
    "React / Next.js",
    "Node.js",
    "AWS (S3, CloudFront, Lambda)",
    "Terraform",
    "Testing (Jest, RTL)",
    "CI/CD (GitHub Actions, GitHub Pages)",
    "API Design (REST, GraphQL)"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Boying Tang</h1>
            <p className="text-sm text-gray-600">Software Engineer · Seattle, WA</p>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Link href="/resume.pdf" className="rounded-md border px-3 py-1">Resume</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 max-w-2xl">
            I&apos;m a software engineer who values clarity, reliability, and pragmatism. My focus is on full-stack TypeScript, scalable API design, and making systems observable and maintainable. Outside of work, I enjoy philosophy, economics, and game theory — perspectives that shape how I think about building software and teams.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
          <div className="grid gap-6">
            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Silk Browser Chromium Integration Accelerator (Amazon)</h3>
              <p className="text-gray-700 mt-2">
                Streamlined weekly ingestion of 1,500+ Chromium commits; reduced commit lag from 3,000 to 1,000 by building custom automation and integration tooling across a 25M+ LOC codebase serving 9.7M+ users.
              </p>
              <p className="text-gray-600 text-sm mt-2">Tech: Python, CI/CD, Linux, Chromium, Git, AWS</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Release CI/CD and Test Automation (Amazon)</h3>
              <p className="text-gray-700 mt-2">
                Designed pipelines and UI Automator suites that cut over 12 hours of manual verification per release through gated builds, parallelization, and automated reporting.
              </p>
              <p className="text-gray-600 text-sm mt-2">Tech: Python, UI Automator, CI/CD, AWS, Linux</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Client-Facing Feature Platform & Design System (Aerware)</h3>
              <p className="text-gray-700 mt-2">
                Partnered with design and backend to ship responsive interfaces; translated 47+ UI/UX specs into production and established reusable components and patterns to reduce UI defects and speed delivery.
              </p>
              <p className="text-gray-600 text-sm mt-2">Tech: React, TypeScript/JavaScript, CSS, API integration, Microservices</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Microservices Caching and Performance Optimization (NYU IT)</h3>
              <p className="text-gray-700 mt-2">
                Implemented targeted caching strategies that lowered latency and stabilized P95 across services with clear invalidation policies and metrics-driven tuning.
              </p>
              <p className="text-gray-600 text-sm mt-2">Tech: ASP.NET Core, C#, Redis/Memcached, REST, SQL</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Role-Based Access Control and Auth Services (NYU IT)</h3>
              <p className="text-gray-700 mt-2">
                Built auth and RBAC services used across multiple departments; hardened security with token-based auth and scoped permissions, simplifying API consumption patterns.
              </p>
              <p className="text-gray-600 text-sm mt-2">Tech: ASP.NET Core, C#, REST, Identity, SQL</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">RESTful API Development and Integration (NYU IT)</h3>
              <p className="text-gray-700 mt-2">
                Delivered REST services and frontend integrations that improved UX and reduced backend load; standardized contracts and error handling to increase reliability across consumers.
              </p>
              <p className="text-gray-600 text-sm mt-2">Tech: ASP.NET Core, React/Redux, REST, TypeScript/JavaScript</p>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-700">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">Interested in working together? Let&apos;s connect.</p>
          <div className="flex gap-4">
            <a href="mailto:boying.tang.44@gmail.com" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Email Me
            </a>
            <a href="https://github.com/boying44" className="px-4 py-2 border rounded">
              GitHub
            </a>
            <a href="https://linkedin.com/in/boyingtang" className="px-4 py-2 border rounded">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Boying Tang. Deployed with GitHub Pages.</p>
      </footer>
    </div>
  );
}
