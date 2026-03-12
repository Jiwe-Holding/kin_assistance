import Link from 'next/link';
import { LayoutDashboard, Inbox, BarChart2, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-slate-900 text-white flex flex-col z-50">
      
      {/* Brand area */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
        <Link href="/" className="flex items-center gap-2" title="Retour au site">
          <span className="flex h-6 w-6 rounded-full bg-secondary items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
          </span>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Kin<span className="text-secondary">Assistance</span>
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Menu Principal
        </div>
        
        <Link 
          href="/admin" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white bg-white/10 transition-colors"
        >
          <LayoutDashboard className="h-5 w-5 text-slate-400" />
          Dashboard
        </Link>
        
        <Link 
          href="/admin/demandes" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Inbox className="h-5 w-5 text-slate-400" />
          Demandes
          <span className="ml-auto inline-flex items-center rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
            Nouveau
          </span>
        </Link>

        <Link 
          href="/admin/statistiques" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          <BarChart2 className="h-5 w-5 text-slate-400" />
          Statistiques
        </Link>

        <div className="px-3 mt-8 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Configuration
        </div>
        
        <Link 
          href="/admin/settings" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Settings className="h-5 w-5 text-slate-400" />
          Paramètres
        </Link>
      </nav>

      {/* Footer User Area */}
      <div className="p-4 border-t border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Admin</p>
            <p className="text-xs text-slate-400 truncate">admin@kinassistance.cd</p>
          </div>
        </div>
      </div>

    </aside>
  );
}
