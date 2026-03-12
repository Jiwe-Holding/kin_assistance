"use client";

import { ShieldCheck, Camera, Clock, DollarSign, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const trustPoints = [
  // ... (keeping trustPoints array identical)
  {
    title: 'Agents locaux vérifiés',
    description: 'Chaque agent passe par une vérification stricte de son identité et et de ses références avant de vous servir.',
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    title: 'Confirmation photo',
    description: 'Recevez systématiquement une preuve visuelle une fois votre course ou démarche accomplie.',
    icon: Camera,
    color: 'text-purple-600 bg-purple-50',
  },
  {
    title: 'Service rapide',
    description: 'Nos agents sillonnent Kinshasa à moto pour garantir des délais d\'intervention imbattables.',
    icon: Clock,
    color: 'text-orange-600 bg-orange-50',
  },
  {
    title: 'Prix abordable',
    description: 'Des tarifs transparents et accessibles pour que déléguer soit à la portée de tous.',
    icon: DollarSign,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'Création d\'emplois',
    description: 'En utilisant KinAssistance, vous contribuez directement à l\'emploi des jeunes congolais.',
    icon: Users,
    color: 'text-rose-600 bg-rose-50',
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function Trust() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      
      {/* Decorative background elements & Glassmorphism ambient mix with animations */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] -z-10 pointer-events-none animate-float-slow" style={{ animationDelay: '-5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">
            Garanties
          </h2>
          <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
            Pourquoi nous faire confiance ?
          </h3>
          <p className="mt-4 text-lg text-slate-400">
            Votre tranquillité d'esprit est notre priorité absolue. Nous avons mis en place des standards stricts de qualité.
          </p>
        </motion.div>

        {/* Trust Points Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:border-white/20 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Subtle Inner Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`relative z-10 inline-flex items-center justify-center rounded-xl p-3 mb-5 ${point.color} shadow-sm backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h4 className="relative z-10 text-xl font-bold text-white mb-2">
                  {point.title}
                </h4>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
