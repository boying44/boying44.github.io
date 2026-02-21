"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  getResumeContent,
  defaultSectionSelection,
  type ResumeVariant,
  type SectionSelection,
} from "@/data/resumeData";

function ResumeContent() {
  const searchParams = useSearchParams();
  const param = searchParams.get("variant");
  const initialVariant: ResumeVariant =
    param === "client-facing" ? "client-facing" : "engineering";
  const [variant, setVariant] = useState<ResumeVariant>(initialVariant);
  const [sections, setSections] = useState<SectionSelection>(defaultSectionSelection);
  const [isGenerating, setIsGenerating] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (param === "client-facing" || param === "engineering") {
      setVariant(param);
    }
  }, [param]);

  const toggleSection = (key: keyof SectionSelection) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    const [{ default: JsPDF }, { default: html2canvasFn }] = await Promise.all([
      import("jspdf"),
      import("html2canvas"),
    ]);
    setIsGenerating(true);
    try {
      const canvas = await html2canvasFn(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = pdfWidth / imgWidth;
      const imgPdfHeight = imgHeight * ratio;
      if (imgPdfHeight <= pdfHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgPdfHeight);
      } else {
        let heightLeft = imgPdfHeight;
        let position = 0;
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgPdfHeight);
        heightLeft -= pdfHeight;
        while (heightLeft > 0) {
          position = heightLeft - imgPdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgPdfHeight);
          heightLeft -= pdfHeight;
        }
      }
      pdf.save(`Boying-Tang-Resume-${variant}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const content = getResumeContent(variant, sections);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Print: hide controls */}
      <div className="print:hidden max-w-4xl mx-auto px-6 py-8">
        <Link href="/" className="text-indigo-600 hover:underline mb-6 inline-block">
          ← Back to site
        </Link>

        <div className="mb-8 space-y-6">
          <div>
            <span className="text-sm font-medium text-gray-600 block mb-2">
              Skills focus
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setVariant("engineering")}
                className={`px-4 py-2 rounded border ${
                  variant === "engineering"
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                }`}
              >
                Technical
              </button>
              <button
                onClick={() => setVariant("client-facing")}
                className={`px-4 py-2 rounded border ${
                  variant === "client-facing"
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                }`}
              >
                Client-Facing
              </button>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-600 block mb-2">
              Sections to include
            </span>
            <div className="flex flex-wrap gap-4">
              {(
                [
                  ["summary", "Summary"],
                  ["education", "Education"],
                  ["experience", "Experience"],
                  ["projects", "Projects"],
                  ["skills", "Skills"],
                ] as const
              ).map(([key, label]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sections[key]}
                    onChange={() => toggleSection(key)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
            >
              {isGenerating ? "Generating…" : "Download PDF"}
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 border rounded hover:bg-gray-50"
            >
              Print / Save as PDF
            </button>
          </div>
        </div>
      </div>

      {/* Resume content - print-optimized */}
      <div
        className="max-w-4xl mx-auto px-6 pb-16 print:px-0 print:pb-0 print:max-w-none"
        ref={resumeRef}
      >
        <article
          className="bg-white shadow-lg rounded-lg p-8 print:shadow-none print:rounded-none print:p-0"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{content.name}</h1>
            <p className="text-gray-600">
              {content.title} · {content.location}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
              <a href={`mailto:${content.email}`} className="hover:underline">
                {content.email}
              </a>
              <a
                href={content.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={content.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </header>

          {content.summary && (
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Summary
              </h2>
              <p className="text-gray-700">{content.summary}</p>
            </section>
          )}

          {content.education.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Education
              </h2>
              {content.education.map((ed, i) => (
                <div key={i} className="mb-2">
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="text-gray-700">{ed.school}</p>
                  {ed.details && (
                    <p className="text-sm text-gray-600">{ed.details}</p>
                  )}
                </div>
              ))}
            </section>
          )}

          {content.projects.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Experience
              </h2>
              {content.projects.map((proj, i) => (
                <div key={i} className="mb-4">
                  <h3 className="font-semibold text-gray-900">
                    {proj.title} · {proj.company}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">{proj.description}</p>
                  <p className="text-gray-500 text-xs mt-1">{proj.tech}</p>
                </div>
              ))}
            </section>
          )}

          {content.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">
                Skills
              </h2>
              <p className="text-gray-700 text-sm">
                {content.skills.join(" · ")}
              </p>
            </section>
          )}
        </article>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ResumeContent />
    </Suspense>
  );
}
