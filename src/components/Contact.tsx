"use client";

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simplified handler to show successful state for the template
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success briefly
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
      // We would normally reset the HTML form here using a ref
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Subtle background decoration & Ambient blobs for Glassmorphism */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3 drop-shadow-sm">
            Contact
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Passer une commande
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            Remplissez ce formulaire et un agent KinAssistance vous contactera dans les plus brefs délais.
          </p>
        </div>

        {/* Glassmorphism Form Container */}
        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 relative overflow-hidden">
          
          {/* Subtle decoration inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-tr-[80px] pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* Row 1: Nom & Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-slate-300/50 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-slate-300/50 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  placeholder="+243 00 000 0000"
                />
              </div>
            </div>

            {/* Row 2: Email & Type de service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-slate-300/50 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  placeholder="jean@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Type de service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-slate-300/50 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Sélectionnez un service</option>
                  <option value="courses-marche">Courses marché</option>
                  <option value="pharmacie">Pharmacie</option>
                  <option value="paiement-facture">Paiement facture</option>
                  <option value="documents">Documents</option>
                  <option value="livraison">Livraison</option>
                  <option value="urgence">Urgence</option>
                </select>
              </div>
            </div>

            {/* Row 3: Adresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="departure" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Adresse de départ
                </label>
                <input
                  type="text"
                  name="departure"
                  id="departure"
                  className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-slate-300/50 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  placeholder="Ex: Commune de Gombe, Croisement..."
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Adresse de destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-slate-300/50 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  placeholder="Ex: Limete, 7ème rue..."
                />
              </div>
            </div>

            {/* Row 4: Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                Description de la mission
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                required
                className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-slate-300/50 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all resize-y"
                placeholder="Détaillez ce que notre agent doit faire précisément..."
              />
            </div>

            {/* Submit Button & Status */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <p className="text-sm text-slate-500 order-2 sm:order-1 text-center sm:text-left">
                Vos données sont sécurisées et <br className="hidden md:block"/> traitées confidentiellement.
              </p>
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full sm:w-auto order-1 sm:order-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Demande envoyée !
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Envoyer la demande
                  </>
                )}
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
