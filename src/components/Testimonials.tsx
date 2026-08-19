"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import GlassCard from "./GlassCard";
import { useState } from "react";

const testimonials = [
  {
    name: "María García",
    role: "CEO, TechStart",
    content: "Increíble trabajo. Transformaron completamente nuestra presencia digital con un diseño moderno y funcional. El equipo superó todas nuestras expectativas.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Fundador, InnovateLab",
    content: "Profesionalismo de primer nivel. La atención al detalle y la calidad del código son excepcionales. Recomiendo sus servicios sin dudarlo.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Directora, DesignHub",
    content: "La mejor decisión que tomamos fue trabajar con ellos. Entendieron perfectamente nuestra visión y la materializaron de forma espectacular.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Pedro Sánchez",
    role: "CTO, DigitalFlow",
    content: "Rapidez, calidad y comunicación constante. El proyecto se entregó antes de tiempo con resultados que superaron nuestras metas.",
    rating: 5,
    avatar: "PS",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Lo que dicen nuestros clientes
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Testimonios reales de empresas que transformaron su presencia digital
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "ring-2 ring-primary scale-105" : ""
              }`}
              delay={index * 0.1}
              hover={true}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex flex-col h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Content */}
                <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                  {testimonial.content}
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Active Testimonial Display */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">
              {testimonials[activeIndex].name} - {testimonials[activeIndex].role}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
