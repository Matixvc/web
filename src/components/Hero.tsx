"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, FolderOpen, User, ExternalLink } from "lucide-react";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
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
          <motion.a
            href="/portafolio/index.html"
            className="glass rounded-2xl p-8 glow-border hover:scale-105 transition-transform duration-300 group"
            whileHover={{ scale: 1.05 }}
            target="_self"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Portafolio</h3>
              <p className="text-gray-400 mb-4">Explora mis proyectos de Unity, XR/VR y desarrollo de videojuegos</p>
              <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Ver Proyectos</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>

          {/* CV Card */}
          <motion.a
            href="/cv/index.html"
            className="glass rounded-2xl p-8 glow-border hover:scale-105 transition-transform duration-300 group"
            whileHover={{ scale: 1.05 }}
            target="_self"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Currículum</h3>
              <p className="text-gray-400 mb-4">Conoce mi experiencia, habilidades y trayectoria profesional</p>
              <div className="flex items-center gap-2 text-secondary group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Ver CV</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a href="https://github.com/matiasvillalobosdev-web" target="_blank" rel="noopener" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/matias-vc-dev" target="_blank" rel="noopener" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="mailto:matias.villalobos.dev@gmail.com" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
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
