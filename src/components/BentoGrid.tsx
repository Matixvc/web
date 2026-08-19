"use client";

import { motion } from "framer-motion";
import { Gamepad2, Glasses, Code, Cpu, Layers, Zap, Rocket, Users } from "lucide-react";
import GlassCard from "./GlassCard";

const skills = [
  {
    icon: Gamepad2,
    title: "Unity Development",
    description: "Desarrollo de videojuegos y simulaciones 3D con Unity Engine.",
    color: "from-primary to-primary-dark",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Glasses,
    title: "XR/VR/AR",
    description: "Experiencias inmersivas de realidad virtual y aumentada.",
    color: "from-secondary to-secondary-dark",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Code,
    title: "C# Programming",
    description: "Programación robusta de sistemas y lógica de juego.",
    color: "from-accent to-accent-dark",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Cpu,
    title: "Physics & 3D",
    description: "Sistemas de física realistas y modelado 3D interactivo.",
    color: "from-primary to-secondary",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    icon: Layers,
    title: "Level Design",
    description: "Diseño de niveles y creación de experiencias de gameplay.",
    color: "from-secondary to-accent",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Zap,
    title: "Interactive Systems",
    description: "Sistemas interactivos y UI para experiencias de usuario.",
    color: "from-accent to-primary",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimización de rendimiento y experiencias fluidas.",
    color: "from-primary to-accent",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Trabajo en equipo en proyectos multidisciplinarios.",
    color: "from-secondary to-primary",
    size: "col-span-1 row-span-1",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Habilidades & Especialidades
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias digitales extraordinarias
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <GlassCard
                key={index}
                className={skill.size}
                delay={index * 0.1}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                  <motion.div
                    className="w-full h-1 rounded-full bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
