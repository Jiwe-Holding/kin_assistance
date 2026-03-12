import { FileText, TrendingUp, Calendar, Inbox } from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { startOfDay, startOfWeek } from 'date-fns';

export default async function AdminDashboard() {
  // Fetch real stats from Prisma
  const now = new Date();
  const today = startOfDay(now);
  const week = startOfWeek(now, { weekStartsOn: 1 });

  const totalDemandes = await prisma.demande.count();
  
  const demandesToday = await prisma.demande.count({
    where: {
      createdAt: {
        gte: today
      }
    }
  });

  const demandesWeek = await prisma.demande.count({
    where: {
      createdAt: {
        gte: week
      }
    }
  });

  const recentDemandes = await prisma.demande.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Vue d'ensemble</h1>
          <p className="text-sm text-slate-500 mt-1">Gérez vos demandes de services urbains à Kinshasa.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/demandes"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-95"
          >
            Gérer les demandes
          </Link>
        </div>
      </div>

      {/* Stats Cards (Tâches 3) */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {/* Card 1: Aujourd'hui */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
              <Inbox className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full uppercase">Aujourd'hui</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Nouvelles Demandes</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{demandesToday}</p>
          </div>
        </div>

        {/* Card 2: Cette Semaine */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded-full uppercase">Cette semaine</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Demandes Hebdo</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{demandesWeek}</p>
          </div>
        </div>

        {/* Card 3: Total */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
              <FileText className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase">Total</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Demandes</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{totalDemandes}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity Table (Preview) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-base font-bold text-slate-900">Demandes Récentes</h3>
          <Link href="/admin/demandes" className="text-sm font-bold text-primary hover:text-blue-700 transition-colors">
            Voir tout l'historique →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Client</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Service</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Statut</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {recentDemandes.map((demande) => (
                <tr key={demande.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-slate-900">{demande.name}</div>
                    <div className="text-xs text-slate-400">{demande.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 text-xs font-bold bg-slate-100 text-slate-600 rounded-lg uppercase tracking-wider">
                      {demande.service.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                    {new Date(demande.createdAt).toLocaleDateString('fr-FR', {
                       day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {demande.status === 'nouveau' && (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-bold text-yellow-700">
                        Nouveau
                      </span>
                    )}
                    {demande.status === 'en_cours' && (
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                        En cours
                      </span>
                    )}
                    {demande.status === 'termine' && (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">
                        Terminé
                      </span>
                    )}
                  </td>
                </tr>
              ))}
              {recentDemandes.length === 0 && (
                <tr>
                   <td colSpan={4} className="px-6 py-10 text-center text-slate-400 font-medium italic">
                     Aucun demande enregistrée pour le moment.
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
