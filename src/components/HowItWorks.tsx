"use client";

import { MessageSquarePlus, UserCheck, PlayCircle, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Envoyez votre demande',
    description: 'Décrivez brièvement la tâche à accomplir via notre formulaire.',
    icon: MessageSquarePlus,
  },
  {
    number: '2',
    title: 'Un agent est assigné',
    description: 'Nous sélectionnons l\'agent KinAssistance idéal pour votre besoin.',
    icon: UserCheck,
  },
  {
    number: '3',
    title: 'La mission est exécutée',
    description: 'Votre agent réalise la course rapidement et en toute sécurité.',
    icon: PlayCircle,
  },
  {
    number: '4',
    title: 'Confirmation & Preuve',
    description: 'Vous recevez une notification avec une preuve photo de l\'accomplissement.',
    icon: BadgeCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1], // bouncy effect
    },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative border-t border-slate-100 overflow-hidden">
      
      {/* Subtle background decoration & Ambient blobs for Glassmorphism */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-300/15 rounded-full blur-[100px] -z-10 pointer-events-none animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-300/15 rounded-full blur-[100px] -z-10 pointer-events-none animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3 drop-shadow-sm">
            Processus Simple
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Comment ça marche ?
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            Déléguez vos tâches en 4 étapes simples et laissez-nous faire le reste.
          </p>
        </motion.div>

        {/* Timeline Desktop Container */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) with animation */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 rounded-full origin-left" 
            aria-hidden="true"
          >
            {/* Animated dot on line */}
            <div className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary animate-ping" style={{ animationDuration: '3s' }}></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={stepVariants}
                  className="relative text-center group"
                >
                  
                  {/* Arrow for mobile/tablet (vertical layout indicator) */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-slate-200">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-[6px] border-t-slate-200 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></div>
                    </div>
                  )}

                  {/* Icon & Number Container */}
                  <div className="relative inline-flex flex-col items-center justify-center mb-6">
                    {/* Pulsing ring background */}
                    <div className="absolute inset-0 rounded-full bg-blue-100/30 transform scale-150 transition-all duration-700 group-hover:scale-175 group-hover:bg-blue-200/50 opacity-50 pointer-events-none blur-sm"></div>
                    
                    {/* White Glass Circle Background */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative h-20 w-20 rounded-full bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] group-hover:bg-white/90"
                    >
                      {/* Inner reflection */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/60 pointer-events-none"></div>
                      <Icon className="relative z-10 h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center shadow-md ring-4 ring-white/50 border border-orange-300 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                      {step.number}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed px-4 lg:px-0">
                    {step.description}
                  </p>

                  {/* Subtle right arrow for desktop (optional, if visual line isn't enough) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[4.5rem] -right-[15%] text-slate-300 transform -translate-y-1/2">
                      <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
