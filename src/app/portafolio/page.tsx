"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Home, FolderOpen, User, Phone } from "lucide-react";
import ProjectCard, { Project } from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";

const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Movimiento",
    description: "Unity • C# • Physics",
    technologies: ["Unity", "C#", "Physics"],
    category: "image",
    // thumbnail: "/projects/movement-system.jpg", // Agregar cuando tengas la imagen
    // demoUrl: "https://youtube.com/watch?v=...",
    // githubUrl: "https://github.com/matiasvillalobosdev-web/movement-system",
  },
  {
    id: "2",
    title: "Inventario & UI",
    description: "Unity • UI Toolkit • C#",
    technologies: ["Unity", "UI Toolkit", "C#"],
    category: "image",
    // thumbnail: "/projects/inventory-system.jpg",
    // demoUrl: "https://youtube.com/watch?v=...",
    // githubUrl: "https://github.com/matiasvillalobosdev-web/inventory-system",
  },
  {
    id: "3",
    title: "Simulador XR",
    description: "Unity • XR Toolkit • OpenXR",
    technologies: ["Unity", "XR Toolkit", "OpenXR"],
    category: "image",
    // thumbnail: "/projects/xr-simulator.jpg",
    // demoUrl: "https://youtube.com/watch?v=...",
    // githubUrl: "https://github.com/matiasvillalobosdev-web/xr-simulator",
  },
];

const videoProjects: Project[] = [
  {
    id: "v1",
    title: "Video de Ejemplo",
    description: "Demo técnica de gameplay o entorno.",
    technologies: ["Unity", "Gameplay"],
    category: "video",
    // videoUrl: "/projects/gameplay-demo.mp4",
    // demoUrl: "https://youtube.com/watch?v=...",
  },
];

const modelProjects: Project[] = [
  {
    id: "m1",
    title: "Modelo 3D",
    description: "Asset 3D optimizado para Unity.",
    technologies: ["Blender", "3D"],
    category: "model",
    // thumbnail: "/projects/3d-model.jpg",
  },
];

export default function PortafolioPage() {
  const [activeTab, setActiveTab] = useState<"image" | "video" | "model">("image");

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-6xl w-full text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative inline-block mb-4"
          >
            <span className="text-xs md:text-sm font-bold text-cyan-400 tracking-[0.4em] uppercase opacity-80 block mb-4 border border-cyan-400/30 py-1 px-4 rounded-full mx-auto w-max text-center">
              Ingeniero en Realidad virtual y diseño de juegos digitales
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-none mb-8 tracking-tighter">
              Matías<br />Villalobos C.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-white font-medium">Unity Developer</span> especializado en experiencias interactivas para{" "}
            <span className="text-cyan-400">PC, dispositivos móviles y Realidad Virtual</span>. Transformo ideas en mundos digitales inmersivos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <div className="glass-panel px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">
              Unity Engine
            </div>
            <div className="glass-panel px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">
              C# Programming
            </div>
            <div className="glass-panel px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">
              XR/VR Development
            </div>
            <div className="glass-panel px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">
              3D Modeling
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 text-center lg:text-left">
                Profile
              </h2>
              <h3 className="text-5xl font-bold mb-8 tracking-tight text-center lg:text-left">Sobre Mí</h3>
              
              <div className="glass-panel p-8 rounded-3xl code-font text-sm leading-relaxed border-l-4 border-l-cyan-500">
                <p className="text-cyan-400 mb-4">// Biografía Técnica</p>
                <p className="text-white/70 mb-6">
                  Soy un apasionado por la tecnología disruptiva. Mi enfoque principal es la unión entre el software y la experiencia humana. Me especializo en optimización de rendimiento en motores 3D y en la creación de mecánicas de juego innovadoras para múltiples plataformas.
                </p>
                <ul className="space-y-3 text-white/50">
                  <li><span className="text-cyan-500">▹</span> Ubicación: <span className="text-white">Santiago, Chile</span></li>
                  <li><span className="text-cyan-500">▹</span> Especialidad: <span className="text-white">Unity VR & Mobile Architecture</span></li>
                  <li><span className="text-cyan-500">▹</span> Stack: <span className="text-white">C#, HLSL, Python</span></li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/40 transition-all"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 bg-zinc-900 border-2 border-white/10 rounded-[4rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 italic text-sm">Matías Villalobos C.</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 text-center md:text-left">
                Portfolio
              </h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-center md:text-left">
                Galería
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 md:gap-10 border-b border-white/10 pb-4 w-full md:w-auto"
            >
              <button
                onClick={() => setActiveTab("image")}
                className={`tab-btn text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${
                  activeTab === "image" ? "text-cyan-400" : "text-white/30"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Blueprint (Fotos)
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`tab-btn text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${
                  activeTab === "video" ? "text-cyan-400" : "text-white/30"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Cinema (Videos)
              </button>
              <button
                onClick={() => setActiveTab("model")}
                className={`tab-btn text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${
                  activeTab === "model" ? "text-cyan-400" : "text-white/30"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Artifacts (3D)
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={activeTab}
          >
            {activeTab === "image" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} delay={index * 0.1} />
                ))}
              </div>
            )}
            
            {activeTab === "video" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {videoProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} delay={index * 0.1} />
                ))}
              </div>
            )}
            
            {activeTab === "model" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {modelProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} delay={index * 0.1} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter">Hablemos</h2>
              <p className="text-white/40 mt-4 text-lg">¿Listo para empezar algo grande?</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl w-max">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00f2ff]"></div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">
                Abierto a proyectos
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="group">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.4em] block mb-2 opacity-50">
                Correo
              </span>
              <a
                href="mailto:matias.villalobos.dev@gmail.com"
                className="email-text font-bold tracking-tighter hover:text-cyan-400 transition-colors duration-300"
              >
                matias.villalobos.dev@gmail.com
              </a>
            </div>

            <div className="pt-4">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.4em] block mb-1 opacity-50">
                Celular
              </span>
              <button
                onClick={() => {
                  window.location.href = "tel:+56987576708";
                }}
                className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                Contactar por WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]"
          >
            <div>MATÍAS VILLALOBOS C. © 2024</div>
            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/in/matias-vc-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Enlace a perfil de LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/matiasvillalobosdev-web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Enlace a perfil de GitHub"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}