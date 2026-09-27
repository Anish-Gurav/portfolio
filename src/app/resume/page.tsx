'use client';

import { ArrowLeft, Download, Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { resumeData as resume } from '@/data/resume';

export default function ResumePage() {
  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm 15mm;
          }

          body {
            background: white !important;
            color: black !important;
            font-size: 11px !important;
            line-height: 1.4 !important;
          }

          .no-print {
            display: none !important;
          }

          .print-page {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .print-section-heading {
            color: black !important;
            border-bottom-color: #333 !important;
          }

          .print-text {
            color: black !important;
          }

          .print-subtext {
            color: #444 !important;
          }

          .print-accent {
            color: #0066cc !important;
          }

          .print-border {
            border-color: #ddd !important;
          }

          a {
            color: #0066cc !important;
            text-decoration: none !important;
          }
        }
      `}</style>

      {/* Fixed controls - hidden in print */}
      <div className="no-print fixed top-6 right-6 z-50 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111119] border border-[#1a1a2e] text-[#E4E4E7] text-sm hover:border-[#00D4FF] transition-colors font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF] text-[#0A0A0F] text-sm font-semibold hover:bg-[#00D4FF]/90 transition-colors font-body"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      <div className="print-page max-w-4xl mx-auto py-12 px-6 min-h-screen">
        {/* Header */}
        <header className="mb-6">
          <h1
            className="print-text text-3xl md:text-4xl font-bold text-[#E4E4E7]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {resume.name}
          </h1>
          <p className="print-accent text-[#00D4FF] text-lg mt-1 font-body">
            {resume.title}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-[#71717A] print-subtext font-body">
            {resume.email && (
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <a href={`mailto:${resume.email}`}>{resume.email}</a>
              </span>
            )}
            {resume.linkedin && (
              <span className="flex items-center gap-1.5">
                <FaLinkedin className="w-3.5 h-3.5" />
                <a href={resume.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </span>
            )}
            {resume.github && (
              <span className="flex items-center gap-1.5">
                <FaGithub className="w-3.5 h-3.5" />
                <a href={resume.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </span>
            )}
            {resume.phone && (
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                {resume.phone}
              </span>
            )}
            {resume.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {resume.location}
              </span>
            )}
          </div>
        </header>

        {/* Career Objective */}
        {resume.objective && (
          <ResumeSection title="Career Objective">
            <p className="print-subtext text-[#71717A] text-sm leading-relaxed font-body">
              {resume.objective}
            </p>
          </ResumeSection>
        )}

        {/* Education */}
        {resume.education && resume.education.length > 0 && (
          <ResumeSection title="Education">
            <div className="space-y-3">
              {resume.education.map((edu, i) => (
                <div key={i}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3
                      className="print-text text-[#E4E4E7] font-semibold text-sm"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {edu.degree}
                    </h3>
                    <span className="print-subtext text-[#71717A] text-xs font-body">
                      {edu.year}
                    </span>
                  </div>
                  <p className="print-accent text-[#00D4FF] text-sm font-body">
                    {edu.university}
                  </p>
                  {edu.cgpa && (
                    <p className="print-subtext text-[#71717A] text-xs mt-1 font-body">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Technical Skills */}
        {resume.skills && resume.skills.length > 0 && (
          <ResumeSection title="Technical Skills">
            <div className="space-y-2">
              {resume.skills.map((category, i) => (
                <div key={i} className="flex flex-wrap gap-1">
                  <span
                    className="print-text text-[#E4E4E7] text-sm font-semibold min-w-[140px]"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {category.category}:
                  </span>
                  <span className="print-subtext text-[#71717A] text-sm font-body">
                    {category.items.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Projects */}
        {resume.projects && resume.projects.length > 0 && (
          <ResumeSection title="Projects">
            <div className="space-y-4">
              {resume.projects.map((project, i) => (
                <div key={i}>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3
                      className="print-text text-[#E4E4E7] font-semibold text-sm"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {project.title}
                    </h3>
                    <span className="print-subtext text-[#71717A] text-xs font-body">
                      | {project.tech}
                    </span>
                  </div>
                  {project.bullets && project.bullets.length > 0 && (
                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                      {project.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="print-subtext text-[#71717A] text-sm font-body"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Certifications */}
        {resume.certifications && resume.certifications.length > 0 && (
          <ResumeSection title="Certifications">
            <ul className="list-disc pl-5 space-y-1">
              {resume.certifications.map((cert, i) => (
                <li
                  key={i}
                  className="print-subtext text-[#71717A] text-sm font-body"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </ResumeSection>
        )}

        {/* Achievements */}
        {resume.achievements && resume.achievements.length > 0 && (
          <ResumeSection title="Achievements">
            <ul className="list-disc pl-5 space-y-1">
              {resume.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="print-subtext text-[#71717A] text-sm font-body"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </ResumeSection>
        )}
      </div>
    </>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h2
        className="print-section-heading text-[#E4E4E7] font-bold text-base uppercase tracking-wider border-b border-[#1a1a2e] pb-1 mb-3"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
