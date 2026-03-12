import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, MapPin, Phone, Mail, Clock, FileText, AlertTriangle } from 'lucide-react';
import prisma from '@/lib/prisma';
import StatusManager from '@/components/admin/StatusManager';

export const dynamic = 'force-dynamic';

export default async function DemandeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Tâche 6 & 7: Fetch real data from Prisma
  const demande: any = await prisma.demande.findUnique({
    where: { id }
  });

  if (!demande) {
    return notFound();
  }

  const getUrgencyBadge = (urgency: string) => {
     if (urgency === 'haute' || urgency === 'urgence') {
        return <span className="inline-flex items-center gap-1 text-red-600 font-bold text-xs uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100 shadow-sm"><AlertTriangle className="h-3 w-3" /> Urgent</span>;
     }
     return <span className="text-slate-400 font-bold text-xs uppercase bg-slate-50 px-3 py-1 rounded-full border border-slate-100 shadow-sm">Normal</span>;
  };

  return (
    <div className="space-y-6 max-w-5xl">
      
      {/* Page Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/demandes"
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-all shadow-sm active:scale-95"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900 font-display uppercase tracking-tight">
                Demande <span className="text-slate-400 font-mono text-xl">#{demande.id.slice(-6).toUpperCase()}</span>
              </h1>
              {getUrgencyBadge(demande.urgency)}
            </div>
            <p className="text-sm text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
              <Clock className="h-4 w-4" />
              Reçue le {new Date(demande.createdAt).toLocaleDateString('fr-FR', {
                day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
              })}
            </p>
          </div>
        </div>

        {/* Tâche 7: Change Status Button */}
        <StatusManager id={demande.id} initialStatus={demande.status} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Columns (Information Client & Trajet) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Mission Details */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
                <FileText className="h-4 w-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                Détails de la mission
              </h3>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <span className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-widest mb-6">
                  Service : {demande.service.replace('-', ' ')}
                </span>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <p className="text-base text-slate-700 leading-relaxed font-medium whitespace-pre-wrap italic">
                    "{demande.description}"
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 relative pt-8 border-t border-slate-100">
                {/* Connecting Line Decoration */}
                <div className="hidden sm:block absolute top-[60px] left-1/2 -translate-x-1/2 w-8 h-px bg-slate-200"></div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Point de départ</h4>
                  <p className="text-base font-bold text-slate-900">{demande.departure || "Non spécifié"}</p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-secondary" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Destination</h4>
                  <p className="text-base font-bold text-slate-900">{demande.destination || "Non spécifié"}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Client Info & Actions) */}
        <div className="space-y-6">
          
          {/* Client Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                <User className="h-4 w-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                Information Client
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-6 flex items-center gap-4">
                 <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-xl font-bold text-slate-500 border border-slate-200 shadow-inner">
                   {demande.name.charAt(0)}
                 </div>
                 <div>
                   <p className="text-lg font-bold text-slate-900">{demande.name}</p>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter italic">Client KinAssistance</p>
                 </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                <a href={`tel:${demande.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center border border-slate-100 group-hover:border-primary/20 transition-all">
                    <Phone className="h-5 w-5 text-slate-400 group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Téléphone</p>
                    <p className="text-sm font-bold text-slate-700">{demande.phone}</p>
                  </div>
                </a>
                
                <a href={`mailto:${demande.email}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center border border-slate-100 group-hover:border-primary/20 transition-all">
                    <Mail className="h-5 w-5 text-slate-400 group-hover:text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Email</p>
                    <p className="text-sm font-bold text-slate-700 truncate">{demande.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Communication</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="pt-2">
                <a 
                  href={`https://wa.me/${demande.phone.replace(/\+/g, '').replace(/\s+/g, '')}?text=Bonjour%20${encodeURIComponent(demande.name)},%20nous%20avons%20bien%20reçu%20votre%20demande%20sur%20KinAssistance...`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-xs font-bold text-white uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-lg shadow-[#25D366]/20 active:scale-95"
                >
                  Contacter WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
