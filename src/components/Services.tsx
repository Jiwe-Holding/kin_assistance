import { ShoppingBag, HeartPulse, Receipt, FileText, Zap, PackageOpen } from 'lucide-react';

const services = [
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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration & Ambient blobs for Glassmorphism */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-3 drop-shadow-sm">
            Nos Services
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Une gamme complète de services pour simplifier votre vie urbaine.
          </p>
        </div>

        {/* Services Grid (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:bg-white/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-white transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Internal card reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className={`inline-flex relative z-10 items-center justify-center rounded-xl md:rounded-2xl p-4 md:p-5 mb-6 ${service.color} transition-transform duration-300 group-hover:scale-110 ease-out shadow-sm border border-white/50`}>
                  <Icon className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                {/* Subtle bottom accent line that expands on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
