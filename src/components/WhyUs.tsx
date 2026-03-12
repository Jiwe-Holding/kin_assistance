"use client";

import { Car, Map, CloudRain, BusFront, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  // ... (keeping problems array identical)
  {
    title: 'Embouteillages chroniques',
    description: 'Des heures perdues chaque jour dans le trafic dense de la capitale.',
    icon: Car,
    color: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    title: 'Routes dégradées',
    description: 'Des trajets difficiles qui usent les véhicules et ralentissent les déplacements.',
    icon: Map,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    title: 'Inondations saisonnières',
    description: 'Des imprévus fréquents qui bloquent des quartiers entiers pendant la pluie.',
    icon: CloudRain,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    title: 'Transports peu fiables',
    description: 'Des options publiques souvent incertaines ou inconfortables pour vos urgences.',
    icon: BusFront,
    color: 'bg-slate-100 text-slate-600 border-slate-200',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background circle & Grid with animations */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/60 opacity-60 blur-3xl -z-10 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100/50 opacity-60 blur-3xl -z-10 pointer-events-none animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4 drop-shadow-sm">
            Pourquoi <span className="text-primary">KinAssistance</span> ?
          </h2>
          <p className="text-lg text-slate-600">
            Vivre à Kinshasa est dynamique, mais les défis quotidiens pour se déplacer sont épuisants.
          </p>
        </motion.div>

        {/* Problems Grid (Glassmorphism Cards with Asymmetry) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-2"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            // Apply vertical offset to even columns on lg screens for asymmetry
            const asymmetryClass = index % 2 === 1 ? 'lg:translate-y-8' : '';
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: index % 2 === 1 ? 24 : -8, scale: 1.02 }}
                className={`bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:bg-white/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group ${asymmetryClass}`}
              >
                {/* Subtle Inner Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className={`relative z-10 inline-flex items-center justify-center rounded-xl p-3 mb-5 border ${problem.color} shadow-sm backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative z-10 text-lg font-bold text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="relative z-10 text-sm text-slate-600">
                  {problem.description}
                </p>
                {/* Subtle side highlight on hover */}
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Result & Conclusion Banner (Dark Glassmorphism with Animation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-700/50 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-8 lg:gap-12 lg:mt-24 mt-16"
        >
          
          {/* Decorative lines inside banner */}
          <div className="absolute top-0 right-0 opacity-20 blur-[50px] pointer-events-none animate-pulse-slow">
             <div className="w-64 h-64 bg-primary rounded-full"></div>
          </div>
          <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/2 opacity-30 pointer-events-none animate-pulse-slow" style={{ animationDelay: '-3s' }}>
             <div className="w-48 h-48 bg-secondary rounded-full blur-[40px]"></div>
          </div>
          {/* Glass reflection on banner */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex-1 border-b md:border-b-0 md:border-r border-slate-700/50 pb-8 md:pb-0 md:pr-12">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-secondary">
              <AlertCircle className="h-6 w-6 animate-pulse" />
              <h4 className="text-xl font-bold uppercase tracking-wider">Le Résultat</h4>
            </div>
            <p className="text-2xl sm:text-3xl font-light text-white leading-relaxed">
              Perte de temps, <span className="font-semibold text-rose-400">fatigue</span> et <span className="font-semibold text-rose-400">stress</span> au quotidien.
            </p>
          </div>

          <div className="relative z-10 flex-1 pt-4 md:pt-0">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-green-400">
              <CheckCircle2 className="h-6 w-6" />
              <h4 className="text-xl font-bold uppercase tracking-wider">Notre Solution</h4>
            </div>
            <p className="text-lg text-slate-200">
              <span className="text-white font-semibold">KinAssistance</span> vous aide à déléguer ces tâches simples mais chronophages pour vous redonner du temps libre.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
