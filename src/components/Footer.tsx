"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, FolderOpen, User } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/matiasvillalobosdev-web", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/matias-vc-dev", label: "LinkedIn" },
  { icon: Mail, href: "mailto:matias.villalobos.dev@gmail.com", label: "Email" },
];

const footerLinks = [
  {
    title: "Proyectos",
    links: [
      { name: "Portafolio", href: "/portafolio", icon: FolderOpen },
      { name: "Currículum", href: "/cv", icon: User },
    ],
  },
  {
    title: "Contacto",
    links: [
      { name: "GitHub", href: "https://github.com/matiasvillalobosdev-web", icon: Github },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/matias-vc-dev", icon: Linkedin },
      { name: "Email", href: "mailto:matias.villalobos.dev@gmail.com", icon: Mail },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Matías Villalobos
            </h3>
            <p className="text-gray-400 mb-6">
              Unity Developer | XR/VR Developer | Diseñador de Experiencias Digitales
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enlace a ${social.label}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  const isInternal = link.href.startsWith("/");
                  return (
                    <li key={linkIndex}>
                      {isInternal ? (
                        <Link href={link.href}>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                          >
                            <Icon className="w-4 h-4" />
                            {link.name}
                          </motion.div>
                        </Link>
                      ) : (
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                          aria-label={`Enlace a ${link.name}`}
                        >
                          <Icon className="w-4 h-4" />
                          {link.name}
                        </motion.a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © 2024 Matías Villalobos. Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
          <p className="text-gray-400 text-sm">
            Unity Developer | XR/VR Specialist
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
