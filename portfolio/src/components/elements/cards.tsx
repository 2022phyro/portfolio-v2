// components/ProjectCard.tsx

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export const featuredProjects = [
  {
    id: "nft-canvas",
    title: "Collaborative NFT Canvas",
    company: "Block-Codex",
    year: "2025",
    stack: ["Fabric.js", "Yjs", "Redis", "Node.js", "Sui Blockchain"],
    impact:
      "Built a CRDT-powered real-time canvas with ~150ms sync latency and smart contract minting. Handled 10k+ concurrent users with Redis pub/sub.",
    timelineLink: "/timeline#block-codex",
  },
  {
    id: "chess-engine",
    title: "Real-Time Chess Tournament Engine",
    company: "KeenChess",
    year: "2024",
    stack: ["Django", "Socket.IO", "Kafka", "PostgreSQL"],
    impact:
      "Engineered tournament logic with Kafka and Socket.IO for sub-10ms move latency. Refactored system into microservices and cut deployment time by 40%.",
    timelineLink: "/timeline#keenchess",
  },
  {
    id: "push-service",
    title: "Web Push Notification Service",
    company: "FutureDevs",
    year: "2023",
    stack: ["Node.js", "Fastify", "Service Workers", "MongoDB"],
    impact:
      "Created an in-house push notification system replacing FCM/OneSignal, reducing costs by 20% and improving delivery speed for web clients.",
    timelineLink: "/timeline#futuredevs",
  },
];



export type Project = {
  id: string;
  title: string;
  company: string;
  year: string;
  stack: string[];
  impact: string;
  timelineLink: string;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-2xl bg-white shadow-md p-6 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
          {project.title}
        </h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {project.company} · {project.year}
        </span>
      </div>

      <p className="text-slate-600 dark:text-slate-300 mb-4">{project.impact}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-bl-full rounded-tr-full inline-block
              bg-gradient-to-br from-green-300 via-green-500 to-green-700
              text-white shadow-md
              border border-green-600
              leaf-badge
              "
            style={{
              boxShadow:
                "0 2px 8px 0 rgba(34,139,34,0.15), 0 1.5px 0 0 #a7f3d0 inset",
              clipPath:
                "ellipse(60% 100% at 50% 50%)",
              backgroundBlendMode: "overlay",
              opacity: 0.95,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={project.timelineLink}
        className="inline-flex items-center text-primary hover:underline text-sm font-medium"
      >
        View role in timeline <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};


interface ExperienceItem {
  role: string;
  start: string;
  end: string;
  site: string;
  company: string;
  location: string;
  description: string;
  bulletPoints: string[];
}


export const MetadataCard = ({
  experience,
  visible,
  index,
}: {
  experience: ExperienceItem;
  visible: boolean;
  index: number;
}) => (
  <div
    className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--color-border)] transition-all duration-300 hover:scale-[1.02] h-full ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-muted)] border-2 border-[var(--color-border)] shadow-lg flex items-center justify-center">
        <div className="text-xl">🏢</div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
          {experience.role}
        </h3>
        <div className="flex items-center gap-2 text-[var(--color-text-accent)] font-semibold">
          <span>{experience.company}</span>
          {experience.site !== '#' && (
            <a
              href={experience.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors text-sm"
            >
              🔗
            </a>
          )}
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4 text-sm">
      <span className="bg-[var(--color-accent)] text-[var(--color-text-primary)] px-3 py-1 rounded-full font-medium">
        📅 {experience.start} - {experience.end}
      </span>
      <span className="bg-[var(--color-accent)] text-[var(--color-text-primary)] px-3 py-1 rounded-full font-medium">
        📍 {experience.location}
      </span>
    </div>

    <div className="bg-[var(--color-accent)]/30 rounded-lg p-4 border border-[var(--color-border)]/30">
      <h4 className="text-sm font-semibold text-[var(--color-text-accent)] mb-2 uppercase tracking-wide">
        Mission
      </h4>
      <p className="text-[var(--color-text-primary)] leading-relaxed text-sm">
        {experience.description}
      </p>
    </div>
  </div>
);


export const BulletCard = ({
  experience,
  visible,
  index,
}: {
  experience: ExperienceItem;
  visible: boolean;
  index: number;
}) => (
  <div
    className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--color-border)] transition-all duration-300 hover:scale-[1.02] h-full ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div className="mb-4">
      <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
        <span className="text-[var(--color-primary)]">🎯</span>
        Key Achievements
      </h4>
      <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></div>
    </div>

    <ul className="space-y-3">
      {experience.bulletPoints.map((point, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 p-3 bg-[var(--color-accent)]/40 rounded-lg border border-[var(--color-border)]/30 transition-all duration-300 hover:bg-[var(--color-accent)]/60 transform ${
            visible ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
          }`}
          style={{ transitionDelay: `${(index * 120) + i * 60}ms` }}
        >
          <span className="text-[var(--color-primary)] mt-1 flex-shrink-0 font-bold">
            ✦
          </span>
          <span className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            {point}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
