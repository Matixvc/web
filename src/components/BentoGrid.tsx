"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Rocket, Shield, Zap, Users, Target } from "lucide-react";
import GlassCard from "./GlassCard";

const features = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas con las últimas tecnologías y mejores prácticas.",
    color: "from-primary to-primary-dark",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
    color: "from-secondary to-secondary-dark",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Sitios perfectamente adaptados a cualquier dispositivo y tamaño de pantalla.",
    color: "from-accent to-accent-dark",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Rocket,
    title: "Alto Rendimiento",
    description: "Optimización para velocidades de carga ultrarrápidas y SEO mejorado.",
    color: "from-primary to-secondary",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Implementación de las mejores prácticas de seguridad y protección de datos.",
    color: "from-secondary to-accent",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Zap,
    title: "Animaciones",
    description: "Micro-interacciones y animaciones fluidas que dan vida a tu sitio.",
    color: "from-accent to-primary",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo en equipo transparente con comunicación constante y feedback.",
    color: "from-primary to-accent",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Target,
    title: "Enfoque",
    description: "Soluciones personalizadas alineadas con tus objetivos de negocio.",
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
              Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales para llevar tu presencia digital al siguiente nivel
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard
                key={index}
                className={feature.size}
                delay={index * 0.1}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
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
