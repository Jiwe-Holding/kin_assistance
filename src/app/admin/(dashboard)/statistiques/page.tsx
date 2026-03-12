import prisma from '@/lib/prisma';
import { BarChart3, PieChart, Activity, TrendingUp, AlertTriangle, Briefcase } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function StatistiquesPage() {
  // Fetch statistics from DB
  const totalDemandes = await prisma.demande.count();
  
  // Breakdown by Service
  const servicesData = await prisma.demande.groupBy({
    by: ['service'],
    _count: {
      id: true,
    },
  });

  // Breakdown by Status
  const statusData = await prisma.demande.groupBy({
    by: ['status'],
    _count: {
      id: true,
    },
  });

  // Breakdown by Urgency
  const urgencyData = await prisma.demande.groupBy({
    by: ['urgency'],
    _count: {
      id: true,
    },
  });

  const getPercentage = (count: number) => {
    if (totalDemandes === 0) return 0;
    return Math.round((count / totalDemandes) * 100);
  };

  return (
    <div className="space-y-8 max-w-6xl">
      
      {/* Page Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/10">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Total Volume</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{totalDemandes}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/10">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Taux de Complétion</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">
                {getPercentage(statusData.find(s => s.status === 'termine')?._count.id || 0)}%
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#FF4D00] p-6 rounded-[2rem] shadow-xl shadow-orange-500/20">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-white/70 uppercase tracking-widest leading-tight">Urgences Hautes</p>
              <h2 className="text-3xl font-bold text-white mt-1">
                {urgencyData.find(u => u.urgency === 'haute' || u.urgency === 'urgence')?._count.id || 0}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Services Distribution */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Services les plus demandés</h3>
            </div>
          </div>

          <div className="space-y-6">
            {servicesData.sort((a, b) => b._count.id - a._count.id).map((item) => (
              <div key={item.service} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-slate-700 capitalize">{item.service.replace('-', ' ')}</span>
                  <span className="text-xs font-bold text-slate-400">{item._count.id} demandes ({getPercentage(item._count.id)}%)</span>
                </div>
                <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                  <div 
                    className="h-full bg-slate-900 rounded-full transition-all duration-1000"
                    style={{ width: `${getPercentage(item._count.id)}%` }}
                  ></div>
                </div>
              </div>
            ))}
            {servicesData.length === 0 && <p className="text-sm text-slate-400 italic">Aucune donnée disponible</p>}
          </div>
        </div>

        {/* Urgency breakdown */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <BarChart3 className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Analyse de l'urgence</h3>
            </div>
          </div>

          <div className="relative h-64 flex items-end justify-around gap-4 pb-8 border-b border-slate-100">
             {urgencyData.map((item) => (
                <div key={item.urgency} className="flex-1 flex flex-col items-center gap-4 group">
                   <div 
                    className={`w-12 rounded-2xl transition-all duration-1000 group-hover:scale-105 shadow-lg ${
                      item.urgency === 'haute' || item.urgency === 'urgence' ? 'bg-orange-500 shadow-orange-500/20' : 'bg-slate-200 shadow-slate-200/20'
                    }`}
                    style={{ height: `${Math.max(getPercentage(item._count.id), 5)}%` }}
                   ></div>
                   <div className="text-center">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.urgency}</p>
                     <p className="text-sm font-bold text-slate-900">{item._count.id}</p>
                   </div>
                </div>
             ))}
             {urgencyData.length === 0 && <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-slate-400 italic">Aucune donnée disponible</p>}
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
             <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Plus fréquent</p>
                <p className="text-sm font-bold text-slate-900 text-center capitalize">
                  {servicesData.sort((a, b) => b._count.id - a._count.id)[0]?.service.replace('-', ' ') || '-'}
                </p>
             </div>
             <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Priorité Haute</p>
                <p className="text-sm font-bold text-slate-900 text-center">
                   {getPercentage(urgencyData.find(u => u.urgency === 'haute' || u.urgency === 'urgence')?._count.id || 0)}% du total
                </p>
             </div>
          </div>
        </div>

      </div>

    </div>
  );
}
