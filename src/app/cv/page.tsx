"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin, Home, FolderOpen, User } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cv-header mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </div>
            
            <div className="flex-grow">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Matías Villalobos Cautivo
              </h1>
              <h2 className="text-xl md:text-2xl text-cyan-400 mb-4">
                Unity Developer | XR/VR Developer | C#
              </h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:matias.villalobos.dev@gmail.com" className="hover:text-cyan-400 transition-colors">
                    matias.villalobos.dev@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/matiasvillalobosdev-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Enlace a perfil de GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matias-vc-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label="Enlace a perfil de LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <button
                onClick={() => window.print()}
                className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <span>Imprimir CV</span>
              </button>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Summary */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Perfil Profesional</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desarrollador Unity en formación, enfocado en la creación de videojuegos, simulaciones 3D y experiencias interactivas. Actualmente cursando Ingeniería en Realidad Virtual y Diseño de Juegos Digitales en la Universidad Bernardo O&apos;Higgins. Busco una práctica profesional (part-time) para integrarme a un equipo real, aprender en un entorno profesional y aportar desde el desarrollo.
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Habilidades Técnicas</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Unity & Game Dev</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Unity Engine", "C# Programming", "Gameplay Systems", "UI/HUD Development", "Physics Engine", "Animation Systems"].map((skill) => (
                      <span key={skill} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">XR/VR/AR</h4>
                  <div className="flex flex-wrap gap-2">
                    {["XR Development", "VR Experiences", "AR Applications", "3D Spatial Computing"].map((skill) => (
                      <span key={skill} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">3D & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Blender", "3D Modeling", "Asset Optimization", "Git / GitHub", "AI Tools"].map((skill) => (
                      <span key={skill} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Idiomas</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white">Español</span>
                  <span className="text-gray-400 text-sm">Nativo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Inglés</span>
                  <span className="text-gray-400 text-sm">Intermedio</span>
                </div>
              </div>
            </motion.section>

            {/* Interests */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Intereses</h3>
              <div className="flex flex-wrap gap-2">
                {["Desarrollo de Videojuegos", "Realidad Virtual", "Diseño de Niveles", "Simuladores", "IA en Juegos", "Modelado 3D"].map((interest) => (
                  <span key={interest} className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-md">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-6">Experiencia Profesional</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-cyan-500/30 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-base font-semibold text-white">
                      Unity Developer | Proyectos Académicos y Personales
                    </h4>
                    <span className="text-sm text-gray-400">Marzo 2021 - Presente</span>
                  </div>
                  <p className="text-cyan-400 text-sm mb-2">Freelance / Formación</p>
                  <p className="text-gray-400 text-sm mb-3">
                    Desarrollo de prototipos y sistemas interactivos en Unity utilizando C#. Implementación de lógica de gameplay, interacción, UI y control de movimiento.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                    <li>Implementación de sistemas esenciales: movimiento de personaje, UI/HUD, inventarios, sistema de vida/daño</li>
                    <li>Desarrollo de IA básica, animaciones y físicas para experiencias interactivas</li>
                    <li>Optimización de escenas y rendimiento integrando assets 3D y configuraciones técnicas</li>
                    <li>Uso de IA generativa y prompt engineering para prototipado, documentación y debugging</li>
                    <li>Creación e integración de modelos 3D optimizados en Blender para entornos interactivos</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-6">Educación</h3>
              
              <div className="border-l-2 border-cyan-500/30 pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-base font-semibold text-white">
                    Ingeniería en Realidad Virtual y Diseño de Juegos Digitales
                  </h4>
                  <span className="text-sm text-gray-400">Marzo 2021 - Julio 2027</span>
                </div>
                <p className="text-cyan-400 text-sm mb-2">Universidad Bernardo O&apos;Higgins</p>
                <p className="text-gray-400 text-sm">
                  Formación especializada en desarrollo de videojuegos, realidad virtual, simulaciones 3D y experiencias interactivas. Enfoque en Unity, C#, diseño de niveles y desarrollo XR/VR/AR.
                </p>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-6">Proyectos Destacados</h3>
              
              <div className="space-y-4">
                <div className="border border-white/10 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-white mb-2">Sistema de Movimiento de Personaje</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Sistema completo de movimiento 3D con física realista, animaciones blend tree y control de cámara en tercera persona.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">Unity</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">C#</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">Physics</span>
                  </div>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-white mb-2">Sistema de Inventarios y UI</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Sistema modular de inventario con UI/HUD completo, drag & drop, sistema de crafting y gestión de items.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">Unity</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">C#</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">UI Toolkit</span>
                  </div>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-white mb-2">Simulador XR para Entrenamiento</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Aplicación de realidad extendida para entrenamiento industrial en entornos virtuales seguros.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">Unity</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">XR Toolkit</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">OpenXR</span>
                  </div>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-white mb-2">IA Básica para Enemigos</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Sistema de inteligencia artificial con pathfinding, patrullas, detección de jugador y estados de comportamiento.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">Unity</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">C#</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md">NavMesh</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Availability */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-6">Disponibilidad</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Modalidad:</span>
                  <span className="text-white">Remoto / Híbrido / Presencial</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Horario:</span>
                  <span className="text-white">Part-time (Práctica Profesional)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Ubicación:</span>
                  <span className="text-white">Santiago, Región Metropolitana, Chile</span>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm"
        >
          <p>Última actualización: Agosto 2026 | Disponible para práctica profesional como Unity Developer / XR Developer</p>
        </motion.footer>
      </div>
    </main>
  );
}