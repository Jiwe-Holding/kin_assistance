"use client";

import { ShoppingBag, HeartPulse, Receipt, FileText, Zap, PackageOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  // ... (keeping services array identical)
  {
    title: 'Courses au marché',
    description: 'Vos produits frais sélectionnés avec soin au marché et livrés chez vous.',
    icon: ShoppingBag,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Courses en pharmacie',
    description: 'Achat de vos médicaments sur ordonnance en toute discrétion et rapidité.',
    icon: HeartPulse,
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Paiement de factures',
    description: 'Réglez vos factures (Regideso, Snel, etc.) sans files d\'attente interminables.',
    icon: Receipt,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Dépôt et retrait de documents',
    description: 'Gestion de vos courriers et démarches administratives en toute sécurité.',
    icon: FileText,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Courses urgentes',
    description: 'Un besoin pressant ? Nous intervenons rapidement pour vous dépanner.',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Livraison de colis',
    description: 'Envoi et réception de colis partout dans Kinshasa avec suivi rigoureux.',
    icon: PackageOpen,
    color: 'bg-emerald-100 text-emerald-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration & Ambient blobs for Glassmorphism */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[120px] -z-10 pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-400/15 rounded-full blur-[120px] -z-10 pointer-events-none animate-float-slow" style={{ animationDelay: '-5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-3 drop-shadow-sm">
            Nos Services
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Une gamme complète de services pour simplifier votre vie urbaine.
          </p>
        </motion.div>

        {/* Services Grid (Glassmorphism Cards) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:bg-white/90 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-white transition-all duration-500 overflow-hidden"
              >
                {/* Internal card reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className={`inline-flex relative z-10 items-center justify-center rounded-xl md:rounded-2xl p-4 md:p-5 mb-6 ${service.color} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ease-out shadow-sm border border-white/50`}>
                  <Icon className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                {/* Subtle bottom accent line that expands on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
