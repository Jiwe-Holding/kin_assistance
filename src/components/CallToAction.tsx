"use client";

import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container (Dark Glassmorphism) with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative isolate overflow-hidden bg-white/5 backdrop-blur-2xl px-6 py-24 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 sm:rounded-3xl sm:px-16 text-white text-balance"
        >
          
          {/* Translucent Gradient Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/80 via-blue-900/80 to-slate-900/90 mix-blend-multiply opacity-80 pointer-events-none"></div>
          
          {/* Glass reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

          {/* Decorative blur shapes with animations */}
          <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-secondary/60 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none animate-float-slow" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 -z-10 w-96 h-96 bg-blue-400/60 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none animate-float-slow" style={{ animationDelay: '-5s' }} aria-hidden="true" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 mx-auto max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl drop-shadow-sm"
          >
            Prêt à gagner du temps à <span className="text-secondary drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]">Kinshasa</span> ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative z-10 mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100"
          >
            Envoyez votre première demande et laissez KinAssistance s'occuper du reste, pendant que vous vous concentrez sur ce qui compte vraiment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/95 backdrop-blur-md px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:bg-white hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Faire une demande
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://wa.me/243000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-green-500/90 backdrop-blur-md px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(34,197,94,0.3)] border border-green-400/50 transition-all hover:bg-green-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(34,197,94,0.4)] ring-1 ring-inset ring-green-500/50"
            >
              <Phone className="h-5 w-5 fill-current" />
              Contact WhatsApp
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
