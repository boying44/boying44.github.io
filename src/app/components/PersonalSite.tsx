"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const email =
  "mailto:boying.tang.44@gmail.com?subject=Let%27s%20talk%20about%20a%20project";
const skills = [
  "TypeScript / JavaScript",
  "React / Next.js",
  "Node.js",
  "AWS (S3, CloudFront, Lambda)",
  "Terraform",
  "Testing (Jest, RTL)",
  "CI/CD (GitHub Actions, GitHub Pages)",
  "API Design (REST, GraphQL)",
];
const otherProjects = [
  {
    company: "Amazon",
    title: "Release CI/CD and Test Automation",
    description:
      "Designed pipelines and UI Automator suites that cut over 12 hours of manual verification per release through gated builds, parallelization, and automated reporting.",
    tech: "Python · UI Automator · CI/CD · AWS · Linux",
  },
  {
    company: "NYU IT",
    title: "Microservices Caching and Performance Optimization",
    description:
      "Implemented targeted caching strategies that lowered latency and stabilized P95 across services with clear invalidation policies and metrics-driven tuning.",
    tech: "ASP.NET Core · C# · Redis/Memcached · REST · SQL",
  },
  {
    company: "NYU IT",
    title: "Role-Based Access Control and Auth Services",
    description:
      "Built auth and RBAC services used across multiple departments; hardened security with token-based auth and scoped permissions, simplifying API consumption patterns.",
    tech: "ASP.NET Core · C# · REST · Identity · SQL",
  },
  {
    company: "NYU IT",
    title: "RESTful API Development and Integration",
    description:
      "Delivered REST services and frontend integrations that improved UX and reduced backend load; standardized contracts and error handling to increase reliability across consumers.",
    tech: "ASP.NET Core · React/Redux · REST · TypeScript/JavaScript",
  },
];
function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

export default function BoyingTangSite() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resumeButtonRef = useRef<HTMLButtonElement>(null);
  const navButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        setResumeOpen(false);
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      )
        setNavOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (resumeOpen) {
        setResumeOpen(false);
        resumeButtonRef.current?.focus();
      } else if (navOpen) {
        setNavOpen(false);
        navButtonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [resumeOpen, navOpen]);
  function closeNavigation() {
    setResumeOpen(false);
    setNavOpen(false);
  }
  return (
    <div className="portfolio" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header" ref={headerRef}>
        <div className="site-shell header-inner">
          <a
            href="#top"
            className="brand"
            aria-label="Boying Tang, home"
            onClick={closeNavigation}
          >
            <Image
              src="/brand/bt-mark.svg"
              width={47}
              height={45}
              alt=""
              priority
            />
            <span>
              Boying Tang
              <span className="brand-subtitle">Software engineer</span>
            </span>
          </a>
          <button
            ref={navButtonRef}
            className="mobile-menu-toggle"
            aria-expanded={navOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setNavOpen(!navOpen);
              setResumeOpen(false);
            }}
          >
            {navOpen ? "Close" : "Menu"}
            <span aria-hidden="true">{navOpen ? "−" : "+"}</span>
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`main-nav${navOpen ? " is-open" : ""}`}
          >
            <a href="#projects" onClick={closeNavigation}>
              Work
            </a>
            <a href="#skills" onClick={closeNavigation}>
              Expertise
            </a>
            <a href="#about" onClick={closeNavigation}>
              About
            </a>
            <div
              className="resume-disclosure"
              ref={dropdownRef}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  setResumeOpen(false);
              }}
            >
              <button
                ref={resumeButtonRef}
                className="resume-toggle"
                aria-expanded={resumeOpen}
                aria-controls="resume-links"
                onClick={() => setResumeOpen(!resumeOpen)}
              >
                Résumé{" "}
                <span
                  aria-hidden="true"
                  className={resumeOpen ? "chevron is-open" : "chevron"}
                >
                  ⌄
                </span>
              </button>
              <div
                id="resume-links"
                className="resume-links"
                hidden={!resumeOpen}
              >
                <a
                  href="/resume-engineering.pdf"
                  download="Boying-Tang-Resume-Engineering.pdf"
                  onClick={closeNavigation}
                >
                  Engineering <span>Technical résumé · PDF</span>
                </a>
                <a
                  href="/resume-client-facing.pdf"
                  download="Boying-Tang-Resume-Client-Facing.pdf"
                  onClick={closeNavigation}
                >
                  Client-facing <span>Client-facing résumé · PDF</span>
                </a>
                <Link href="/resume" onClick={closeNavigation}>
                  Create a custom résumé{" "}
                  <span>Choose the sections to include</span>
                </Link>
              </div>
            </div>
            <a
              href="#contact"
              className="nav-contact"
              onClick={closeNavigation}
            >
              Let&apos;s talk <Arrow />
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content">
        <section className="hero site-shell" aria-labelledby="hero-title">
          <div className="hero-eyebrow">
            <span className="eyebrow">Software engineering & consulting</span>
            <span className="location">Seattle, WA</span>
          </div>
          <div className="hero-grid">
            <div>
              <h1 id="hero-title" className="personal-hero-title">
                I like figuring out why something is harder than it needs to be.
                <em> Then I build a better way.</em>
              </h1>
              <div className="hero-actions">
                <a href={email} className="button button-primary">
                  Tell me about your project <Arrow />
                </a>
                <a href="#projects" className="text-link">
                  Explore my work <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="hero-intro">
              <span className="small-rule" aria-hidden="true" />
              <p>
                I&apos;m Boying. I build web applications, connect APIs, and
                improve the systems behind them.
              </p>
              <p className="muted">
                I also look after what&apos;s already running: hosting,
                maintenance, mobile fixes, and the work that helps a website
                keep doing its job.
              </p>
            </div>
          </div>
          <div className="experience-strip">
            <span className="eyebrow">Experience across</span>
            <div>
              <span>Amazon</span>
              <span>Aerware</span>
              <span>NYU IT</span>
            </div>
            <span className="experience-note">
              Products. Platforms. The work in between.
            </span>
          </div>
        </section>
        <section
          id="projects"
          className="work-section section-pad"
          aria-labelledby="work-title"
        >
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-index">01 / Selected work</p>
                <h2 id="work-title">
                  Different problems.
                  <br />
                  <em>Work I can point to.</em>
                </h2>
              </div>
              <p>
                Sometimes the work is a new interface. Sometimes it&apos;s a
                release process that takes too much manual effort, or a website
                that needs someone to keep looking after it.
              </p>
            </div>
            <article
              className="client-project"
              aria-labelledby="neurosymptoms-title"
            >
              <div className="client-project-summary">
                <p className="eyebrow">Neurosymptoms / Ongoing client work</p>
                <h3 id="neurosymptoms-title">
                  Keeping Neurosymptoms
                  <br />
                  working, day to day.
                </h3>
                <p>
                  I look after hosting and maintenance for Neurosymptoms, a
                  multilingual WordPress website. Alongside the hosting work, I
                  work through client feedback on mobile layouts and language
                  versions, turning specific issues into practical fixes.
                </p>
                <p className="tech-list">
                  WordPress · AWS Lightsail · Hosting · Maintenance
                </p>
              </div>
              <div className="client-project-details">
                <div>
                  <h4>A place to work through changes</h4>
                  <p>
                    My work includes migration and hosting on AWS Lightsail,
                    with production and pre-production environments. That gives
                    changes a place to be checked before they reach the live
                    site.
                  </p>
                </div>
                <div>
                  <h4>Paying attention to the small things</h4>
                  <p>
                    Mobile layouts and different language versions each bring
                    their own issues. I use client feedback to work through
                    those details and improve how the site behaves.
                  </p>
                </div>
                <div>
                  <h4>Staying with the work</h4>
                  <p>
                    I continue to handle hosting, maintenance, and technical
                    issues as they come up. The relationship carries on after a
                    migration or a release, as the website&apos;s needs change.
                  </p>
                </div>
              </div>
            </article>
            <div className="featured-grid">
              <article className="featured-project">
                <div className="project-proof proof-navy">
                  <div className="proof-label">
                    <span>Amazon · Silk Browser</span>
                    <span>Integration & automation</span>
                  </div>
                  <div className="commit-metric">
                    <span className="metric-before">3,000</span>
                    <span className="metric-arrow" aria-hidden="true">
                      →
                    </span>
                    <span>1,000</span>
                  </div>
                  <p>Chromium commit lag, reduced</p>
                  <div className="proof-bottom">
                    <span>1,500+ commits ingested weekly</span>
                    <span aria-hidden="true">01</span>
                  </div>
                </div>
                <div className="project-details">
                  <p className="eyebrow">Automation / Developer experience</p>
                  <h3>Silk Browser Chromium Integration Accelerator</h3>
                  <p>
                    Built custom automation and integration tooling to
                    streamline weekly ingestion of 1,500+ Chromium commits.
                    Reduced commit lag from 3,000 to 1,000 across a 25M+ line
                    codebase serving 9.7M+ users.
                  </p>
                  <p className="tech-list">
                    Python · CI/CD · Linux · Chromium · Git · AWS
                  </p>
                </div>
              </article>
              <article className="featured-project">
                <div className="project-proof proof-light">
                  <div className="proof-label">
                    <span>Aerware</span>
                    <span>Product & interface</span>
                  </div>
                  <div className="interface-metric">
                    47<span>+</span>
                  </div>
                  <p>UI/UX specs translated into production</p>
                  <div className="proof-bottom">
                    <span>Responsive interfaces. Reusable foundations.</span>
                    <span aria-hidden="true">02</span>
                  </div>
                </div>
                <div className="project-details">
                  <p className="eyebrow">
                    Product development / Design systems
                  </p>
                  <h3>Client-Facing Feature Platform & Design System</h3>
                  <p>
                    Partnered with design and backend to ship responsive
                    interfaces, translating 47+ UI/UX specs into production.
                    Established reusable components and patterns to reduce UI
                    defects and speed delivery.
                  </p>
                  <p className="tech-list">
                    React · TypeScript/JavaScript · CSS · API integration ·
                    Microservices
                  </p>
                </div>
              </article>
            </div>
            <div className="more-work-heading">
              <h3>More engineering work</h3>
              <span className="eyebrow">Reliability, end to end</span>
            </div>
            <div className="more-work-grid">
              {otherProjects.map((project, index) => (
                <article className="supporting-project" key={project.title}>
                  <div className="supporting-project-meta">
                    <span className="eyebrow">{project.company}</span>
                    <span className="project-number">0{index + 3}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="tech-list">{project.tech}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="expertise-section section-pad"
          aria-labelledby="expertise-title"
        >
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-index">02 / Expertise</p>
                <h2 id="expertise-title">
                  From the first interface
                  <br />
                  to the final release.
                </h2>
              </div>
              <p>
                Hands-on engineering for the parts of your product that
                customers see, and the systems they depend on.
              </p>
            </div>
            <div className="services-grid">
              <div>
                <span className="service-number">01</span>
                <h3>Build the product</h3>
                <p>
                  Responsive web applications, reusable design systems, and
                  full-stack features that connect a considered interface to the
                  right backend.
                </p>
                <span className="service-detail">
                  React · Next.js · TypeScript · Node.js
                </span>
              </div>
              <div>
                <span className="service-number">02</span>
                <h3>Strengthen the systems</h3>
                <p>
                  APIs, integrations, caching, and access control, with an
                  emphasis on reliability, maintainability, and clear contracts.
                </p>
                <span className="service-detail">
                  REST · GraphQL · AWS · Performance
                </span>
              </div>
              <div>
                <span className="service-number">03</span>
                <h3>Improve the delivery</h3>
                <p>
                  Release pipelines, automated testing, and developer tooling
                  that take repetitive work out of the path to production.
                </p>
                <span className="service-detail">
                  CI/CD · Testing · Terraform · Automation
                </span>
              </div>
            </div>
            <div className="toolkit">
              <h3>My toolkit</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about-section site-shell section-pad"
          aria-labelledby="about-title"
        >
          <div className="about-heading">
            <p className="eyebrow section-index">03 / About</p>
            <h2 id="about-title">
              An engineer.
              <br />
              <em>A thinking partner.</em>
            </h2>
            <Image
              src="/brand/bt-mark.svg"
              width={92}
              height={88}
              alt=""
              className="about-mark"
            />
          </div>
          <div className="about-copy">
            <p className="lead-copy">
              Good software starts with understanding the problem.
            </p>
            <p>
              I&apos;m Boying Tang, a Seattle-based software engineer who values
              clarity, reliability, and pragmatism. My focus is full-stack
              TypeScript, scalable API design, and making systems observable and
              maintainable.
            </p>
            <p>
              I care about how software works, how people use it, and how teams
              keep it moving. My experience spans product development at
              Aerware, browser tooling at Amazon, and backend services at NYU
              IT.
            </p>
            <p>
              Outside of work, I enjoy philosophy, economics, and game theory.
              Those perspectives shape how I think about building software and
              working with people.
            </p>
            <Link href="/resume?variant=client-facing" className="text-link">
              Explore my experience <Arrow />
            </Link>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="site-shell contact-grid">
            <div>
              <p className="eyebrow section-index">
                04 / Let&apos;s work together
              </p>
              <h2 id="contact-title">
                What are you
                <br />
                <em>building next?</em>
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                Have a product to build, a system to improve, or a technical
                problem to untangle? Tell me what you have in mind.
              </p>
              <a href={email} className="button button-primary">
                Start a conversation <Arrow />
              </a>
              <a href="mailto:boying.tang.44@gmail.com" className="email-link">
                boying.tang.44@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer site-shell">
        <p>© {new Date().getFullYear()} Boying Tang</p>
        <span>Software engineering & consulting.</span>
        <div>
          <a href="https://github.com/boying44">
            GitHub <Arrow />
          </a>
          <a href="https://linkedin.com/in/boyingtang">
            LinkedIn <Arrow />
          </a>
          <a href="#top" className="back-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
