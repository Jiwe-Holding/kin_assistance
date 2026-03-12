"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const statsVariants: any = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const statItemVariants: any = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-primary pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 -mt-20">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left pt-10 pb-16 lg:py-0"
          >
            
            {/* Glassmorphism Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white/90 text-sm font-medium mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
              Nouveau à Kinshasa
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-6">
              Votre assistant personnel à <span className="text-secondary relative inline-block drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Kinshasa</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-medium text-blue-100 mb-4">
              Gagnez du temps en déléguant vos courses et démarches quotidiennes.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg leading-relaxed text-blue-200/90 max-w-2xl mx-auto lg:mx-0 mb-10">
              KinAssistance s'occupe de vos courses, paiements de factures, achats en pharmacie et démarches administratives pendant que vous vous concentrez sur l'essentiel.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:-translate-y-1"
              >
                Faire une demande
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 backdrop-blur-md px-8 py-4 text-base font-bold text-white shadow-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-md hover:-translate-y-1"
              >
                Voir les services
              </Link>
            </motion.div>

            {/* Statistics (Glassmorphism Social Proof) */}
            <motion.div 
              variants={statsVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] max-w-2xl mx-auto lg:mx-0 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
              
              <motion.div variants={statItemVariants} className="text-center lg:text-left relative z-10">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white mb-2">
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black">500+</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-200 font-medium">Missions réalisées</p>
              </motion.div>
              <motion.div variants={statItemVariants} className="text-center lg:text-left relative z-10">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white mb-2">
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black">50+</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-200 font-medium">Agents partenaires</p>
              </motion.div>
              <motion.div variants={statItemVariants} className="text-center lg:text-left relative z-10">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white mb-2">
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black">10</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-200 font-medium">Communes couvertes</p>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual (Esomar geometric style) */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="mt-16 lg:mt-0 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-[1/1.2]">
              <motion.div 
                animate={{ rotate: 5 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-4 -right-4 w-full h-full bg-secondary rounded-[2.5rem] lg:rounded-[3.5rem] opacity-20 z-0"
              />
              <motion.div 
                animate={{ rotate: -5 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-full h-full bg-blue-500 rounded-[2.5rem] lg:rounded-[3.5rem] opacity-30 z-0"
              />
              
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl ring-1 ring-white/20 z-10" 
                   style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 5% 100%)' }}>
                <Image
                  src="/hero-image.png"
                  alt="Agent KinAssistance dynamique en mission urbaine à Kinshasa"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
