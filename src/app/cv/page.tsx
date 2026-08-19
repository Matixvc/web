"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin, Home, FolderOpen, User } from "lucide-react";
import Navigation from "@/components/Navigation";
// import dynamic from "next/dynamic";

// Temporarily disabled 3D integration for stability
// const VRController = dynamic(() => import("@/components/VRController"), {
//   ssr: false,
//   loading: () => <div className="w-full h-64 md:h-80 flex items-center justify-center">
//     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
//   </div>,
// });

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background print:bg-white print:text-black">
      <div className="no-print">
        <Navigation />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 py-12 print:py-4 print:px-2 print:max-w-[210mm]">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cv-header mb-8 print:mb-4"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start print:gap-4">
            <div className="flex-shrink-0 print:hidden">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 print:text-black print:text-2xl">
                Matías Villalobos Cautivo
              </h1>
              <h2 className="text-lg md:text-xl text-cyan-400 mb-3 print:text-blue-600 print:text-base">
                Unity Developer | XR/VR Developer | C#
              </h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:matias.villalobos.dev@gmail.com" className="hover:text-cyan-400 transition-colors print:text-gray-700">
                    matias.villalobos.dev@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-4 print:hidden">
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
            
            <div className="flex-shrink-0 print:hidden">
              <button
                onClick={() => window.print()}
                className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <span>Descargar CV</span>
              </button>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-4">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-4 print:space-y-2">
            {/* Profile Summary */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-2 print:text-blue-600 print:text-sm">Perfil Profesional</h3>
              <p className="text-gray-400 text-xs leading-relaxed print:text-gray-700 print:text-[10px]">
                Desarrollador Unity en formación, enfocado en la creación de videojuegos, simulaciones 3D y experiencias interactivas. Actualmente cursando Ingeniería en Realidad Virtual y Diseño de Juegos Digitales en la Universidad Bernardo O&apos;Higgins. Busco una práctica profesional (part-time) para integrarme a un equipo real, aprender en un entorno profesional y aportar desde el desarrollo.
              </p>
              {/* Temporarily disabled 3D Controller Decoration for stability */}
              {/* <div className="mt-4 hidden md:block print:hidden">
                <VRController />
              </div> */}
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-3 print:text-blue-600 print:text-sm">Habilidades Técnicas</h3>
              
              <div className="space-y-3 print:space-y-2">
                <div>
                  <h4 className="text-xs font-semibold text-white mb-1 print:text-gray-800">Unity & Game Dev</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Unity Engine", "C# Programming", "Gameplay Systems", "UI/HUD Development", "Physics Engine", "Animation Systems"].map((skill) => (
                      <span key={skill} className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-white mb-1 print:text-gray-800">XR/VR/AR</h4>
                  <div className="flex flex-wrap gap-1">
                    {["XR Development", "VR Experiences", "AR Applications", "3D Spatial Computing"].map((skill) => (
                      <span key={skill} className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-white mb-1 print:text-gray-800">3D & Tools</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Blender", "3D Modeling", "Asset Optimization", "Git / GitHub", "AI Tools"].map((skill) => (
                      <span key={skill} className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">
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
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-2 print:text-blue-600 print:text-sm">Idiomas</h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm print:text-gray-800">Español</span>
                  <span className="text-gray-400 text-xs print:text-gray-600">Nativo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm print:text-gray-800">Inglés</span>
                  <span className="text-gray-400 text-xs print:text-gray-600">Intermedio</span>
                </div>
              </div>
            </motion.section>

            {/* Interests */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-2 print:text-blue-600 print:text-sm">Intereses</h3>
              <div className="flex flex-wrap gap-1">
                {["Desarrollo de Videojuegos", "Realidad Virtual", "Diseño de Niveles", "Simuladores", "IA en Juegos", "Modelado 3D"].map((interest) => (
                  <span key={interest} className="text-[10px] bg-cyan-500/10 text-cyan-400 px-1 py-0.5 rounded print:bg-blue-50 print:text-blue-700">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-4 print:space-y-2">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-3 print:text-blue-600 print:text-sm">Experiencia Profesional</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-cyan-500/30 pl-3 print:border-gray-400">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h4 className="text-sm font-semibold text-white print:text-gray-800">
                      Unity Developer | Proyectos Académicos y Personales
                    </h4>
                    <span className="text-xs text-gray-400 print:text-gray-600">Marzo 2021 - Presente</span>
                  </div>
                  <p className="text-cyan-400 text-xs mb-1 print:text-blue-600">Freelance / Formación</p>
                  <p className="text-gray-400 text-xs mb-2 print:text-gray-700">
                    Desarrollo de prototipos y sistemas interactivos en Unity utilizando C#. Implementación de lógica de gameplay, interacción, UI y control de movimiento.
                  </p>
                  <ul className="text-gray-400 text-xs space-y-0.5 list-disc list-inside print:text-gray-700">
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
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-3 print:text-blue-600 print:text-sm">Educación</h3>
              
              <div className="border-l-2 border-cyan-500/30 pl-3 print:border-gray-400">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white print:text-gray-800">
                    Ingeniería en Realidad Virtual y Diseño de Juegos Digitales
                  </h4>
                  <span className="text-xs text-gray-400 print:text-gray-600">Marzo 2021 - Julio 2027</span>
                </div>
                <p className="text-cyan-400 text-xs mb-1 print:text-blue-600">Universidad Bernardo O&apos;Higgins</p>
                <p className="text-gray-400 text-xs print:text-gray-700">
                  Formación especializada en desarrollo de videojuegos, realidad virtual, simulaciones 3D y experiencias interactivas. Enfoque en Unity, C#, diseño de niveles y desarrollo XR/VR/AR.
                </p>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-3 print:text-blue-600 print:text-sm">Proyectos Destacados</h3>
              
              <div className="space-y-2">
                <div className="border border-white/10 rounded-lg p-2 print:border-gray-300">
                  <h4 className="text-sm font-semibold text-white mb-1 print:text-gray-800">Sistema de Movimiento de Personaje</h4>
                  <p className="text-gray-400 text-xs mb-1 print:text-gray-700">
                    Sistema completo de movimiento 3D con física realista, animaciones blend tree y control de cámara en tercera persona.
                  </p>
                  <div className="flex gap-1">
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">Unity</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">C#</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">Physics</span>
                  </div>
                </div>
                
                <div className="border border-white/10 rounded-lg p-2 print:border-gray-300">
                  <h4 className="text-sm font-semibold text-white mb-1 print:text-gray-800">Sistema de Inventarios y UI</h4>
                  <p className="text-gray-400 text-xs mb-1 print:text-gray-700">
                    Sistema modular de inventario con UI/HUD completo, drag & drop, sistema de crafting y gestión de items.
                  </p>
                  <div className="flex gap-1">
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">Unity</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">C#</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">UI Toolkit</span>
                  </div>
                </div>
                
                <div className="border border-white/10 rounded-lg p-2 print:border-gray-300">
                  <h4 className="text-sm font-semibold text-white mb-1 print:text-gray-800">Simulador XR para Entrenamiento</h4>
                  <p className="text-gray-400 text-xs mb-1 print:text-gray-700">
                    Aplicación de realidad extendida para entrenamiento industrial en entornos virtuales seguros.
                  </p>
                  <div className="flex gap-1">
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">Unity</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">XR Toolkit</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">OpenXR</span>
                  </div>
                </div>
                
                <div className="border border-white/10 rounded-lg p-2 print:border-gray-300">
                  <h4 className="text-sm font-semibold text-white mb-1 print:text-gray-800">IA Básica para Enemigos</h4>
                  <p className="text-gray-400 text-xs mb-1 print:text-gray-700">
                    Sistema de inteligencia artificial con pathfinding, patrullas, detección de jugador y estados de comportamiento.
                  </p>
                  <div className="flex gap-1">
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">Unity</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">C#</span>
                    <span className="text-[10px] bg-white/5 text-gray-300 px-1 py-0.5 rounded print:bg-gray-100 print:text-gray-700">NavMesh</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Availability */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-4 rounded-xl print:p-2 print:bg-white print:border print:border-gray-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-3 print:text-blue-600 print:text-sm">Disponibilidad</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs print:text-gray-700">Modalidad:</span>
                  <span className="text-white text-xs print:text-gray-800">Remoto / Híbrido / Presencial</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs print:text-gray-700">Horario:</span>
                  <span className="text-white text-xs print:text-gray-800">Part-time (Práctica Profesional)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs print:text-gray-700">Ubicación:</span>
                  <span className="text-white text-xs print:text-gray-800">Santiago, Región Metropolitana, Chile</span>
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
          className="mt-8 pt-4 border-t border-white/10 text-center text-gray-400 text-xs print:hidden"
        >
          <p>Última actualización: Agosto 2026 | Disponible para práctica profesional como Unity Developer / XR Developer</p>
        </motion.footer>
      </div>
    </main>
  );
}