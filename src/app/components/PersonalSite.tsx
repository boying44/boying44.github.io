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
              <h3 className="text-xl font-semibold">API Refactor & Type Unification</h3>
              <p className="text-gray-700 mt-2">
                Refactored frontend/backend API structure to unify types, clarify contracts, and simplify routes. This improved maintainability and reduced integration bugs.
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Observability Enhancements</h3>
              <p className="text-gray-700 mt-2">
                Contributed to improving monitoring and visibility across services by working on dashboards, logs, and telemetry integrations.
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Modern Web Deployment</h3>
              <p className="text-gray-700 mt-2">
                Built and deployed a modern React/Next.js app with GitHub Pages. Automated builds and checks were set up through GitHub Actions.
              </p>
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
