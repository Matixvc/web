"use client";

import { motion } from "framer-motion";
import { Github, Play, Lock } from "lucide-react";
import GlassCard from "./GlassCard";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: "image" | "video" | "model";
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const hasDemo = project.demoUrl || project.videoUrl;
  const hasGithub = project.githubUrl;

  return (
    <GlassCard delay={delay} className="group hover:scale-105 transition-transform duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
      <div className="h-full flex flex-col">
        {/* Thumbnail/Video Container */}
        <div className="aspect-square rounded-2xl bg-zinc-900 mb-4 flex items-center justify-center overflow-hidden relative">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={`Thumbnail del proyecto ${project.title}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : project.videoUrl ? (
            <video
              src={project.videoUrl}
              className="w-full h-full object-cover"
              controls
              muted
              loop
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
              <svg className="w-16 h-16 text-cyan-400/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Project Info */}
        <h5 className="font-bold text-sm mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h5>
        <p className="text-white/40 text-xs mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold uppercase tracking-widest text-white/60 bg-white/5 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {hasDemo ? (
            <motion.a
              href={project.demoUrl || project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Play className="w-3 h-3" />
              Demo
            </motion.a>
          ) : (
            <div className="flex-1 bg-white/5 text-white/30 border border-white/10 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider cursor-not-allowed">
              <Lock className="w-3 h-3" />
              Demo
            </div>
          )}

          {hasGithub ? (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Github className="w-3 h-3" />
              GitHub
            </motion.a>
          ) : (
            <div className="flex-1 bg-white/5 text-white/30 border border-white/10 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider cursor-not-allowed">
              <Lock className="w-3 h-3" />
              GitHub
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}