"use client";

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  // ... (keeping tiers array identical)
  {
    name: 'Essentiel',
    id: 'tier-essentiel',
    href: '#contact',
    priceMonthly: '5',
    description: 'Parfait pour des besoins ponctuels.',
    features: ['2 courses / mois', 'Support standard', 'Paiement de factures'],
    featured: false,
  },
  {
    name: 'Confort',
    id: 'tier-confort',
    href: '#contact',
    priceMonthly: '9',
    description: 'L\'équilibre parfait pour la majorité de nos clients.',
    features: ['4 courses / mois', 'Support prioritaire', 'Paiement de factures', 'Dépôt de documents'],
    featured: true,
  },
  {
    name: 'Super Confort',
    id: 'tier-super-confort',
    href: '#contact',
    priceMonthly: '12',
    description: 'Pour ceux qui veulent une tranquillité d\'esprit totale.',
    features: ['5 courses / mois', 'Support VIP 24/7', 'Toutes les courses incluses', 'Livraison de colis prioritaires'],
    featured: false,
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle background decoration & Ambient blobs for Glassmorphism with animations */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] -z-10 pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] -z-10 pointer-events-none animate-float-slow" style={{ animationDelay: '-6s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4 drop-shadow-sm">
            Nos Abonnements
          </h2>
          <p className="text-lg text-slate-600">
            Choisissez la formule qui s'adapte le mieux à votre quotidien pour ne plus jamais perdre de temps.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto"
        >
           {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              whileHover={{ y: tier.featured ? -24 : -12, scale: tier.featured ? 1.06 : 1.02 }}
              className={`relative rounded-3xl p-8 shadow-xl ring-1 transition-all duration-300 flex flex-col h-full overflow-hidden group ${
                tier.featured
                  ? 'bg-slate-900/95 backdrop-blur-2xl ring-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform md:-translate-y-4 z-10 border border-slate-700/50'
                  : 'bg-white/60 backdrop-blur-xl ring-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:bg-white/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/50'
              }`}
            >
              {/* Internal reflection for glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="mb-6 relative z-10">
                {tier.featured && (
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 inset-x-0 mx-auto w-fit px-4 py-1 rounded-full bg-secondary text-white text-sm font-bold tracking-wide shadow-md"
                  >
                    Populaire
                  </motion.span>
                )}
                <h3 id={tier.id} className={`text-2xl font-bold ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <p className={`mt-2 text-sm leading-6 ${tier.featured ? 'text-slate-300' : 'text-slate-50'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-x-2 relative z-10">
                <span className={`text-5xl font-extrabold tracking-tight ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                  {tier.priceMonthly}$
                </span>
                <span className={`text-base font-medium ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                  /mois
                </span>
              </div>

              <ul role="list" className={`flex-1 space-y-4 text-sm leading-6 relative z-10 ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <Check className={`h-5 w-5 flex-none ${tier.featured ? 'text-secondary' : 'text-primary'}`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`mt-8 block rounded-xl px-3 py-3.5 text-center text-sm font-bold leading-6 transition-all duration-300 relative z-10 ${
                  tier.featured
                    ? 'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-900/50'
                    : 'bg-white/50 backdrop-blur-sm text-primary ring-1 ring-inset ring-primary/30 hover:bg-primary hover:text-white shadow-sm'
                }`}
              >
                Choisir
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center relative z-10"
        >
          <p className="text-sm text-slate-500 italic">
            * Frais supplémentaires pour longues distances et urgences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
