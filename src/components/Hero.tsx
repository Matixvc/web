"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FolderOpen, User, ExternalLink } from "lucide-react";
import Button from "./ui/button";
import Link from "next/link";
// import dynamic from "next/dynamic";

// Temporarily disabled 3D integration for stability
// const VRHeadset = dynamic(() => import("./VRHeadset"), {
//   ssr: false,
//   loading: () => null,
// });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* <VRHeadset /> */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-gray-300">Bienvenido a mi Espacio Digital</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Matías
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent glow-text">
            Villalobos
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Unity Developer | XR/VR Developer | Diseñador de Experiencias Digitales
        </motion.p>

        {/* Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12"
        >
          {/* Portfolio Card */}
          <Link href="/portafolio">
            <motion.div
              className="glass rounded-2xl p-8 glow-border group cursor-pointer relative overflow-hidden"
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotate: 2,
                boxShadow: "0 30px 60px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div 
                  className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 shadow-2xl shadow-primary/30"
                  whileHover={{ 
                    rotate: 15, 
                    scale: 1.2,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.6)"
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <FolderOpen className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Portafolio</h3>
                <p className="text-gray-400 mb-4">Explora mis proyectos de Unity, XR/VR y desarrollo de videojuegos</p>
                <motion.div 
                  className="flex items-center gap-2 text-primary font-semibold"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <span>Ver Proyectos</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </Link>

          {/* CV Card */}
          <Link href="/cv">
            <motion.div
              className="glass rounded-2xl p-8 glow-border group cursor-pointer relative overflow-hidden"
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotate: -2,
                boxShadow: "0 30px 60px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div 
                  className="w-20 h-20 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center mb-4 shadow-2xl shadow-secondary/30"
                  whileHover={{ 
                    rotate: -15, 
                    scale: 1.2,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.6)"
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <User className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">Currículum</h3>
                <p className="text-gray-400 mb-4">Conoce mi experiencia, habilidades y trayectoria profesional</p>
                <motion.div 
                  className="flex items-center gap-2 text-secondary font-semibold"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <span>Ver CV</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a href="https://github.com/matiasvillalobosdev-web" target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors" aria-label="Enlace a perfil de GitHub">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/matias-vc-dev" target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors" aria-label="Enlace a perfil de LinkedIn">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="mailto:matias.villalobos.dev@gmail.com" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors" aria-label="Enviar correo a matias.villalobos.dev@gmail.com">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Email</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
