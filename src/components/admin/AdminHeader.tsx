"use client";

import { usePathname } from 'next/navigation';
import { LogOut, Bell, Loader2 } from 'lucide-react';
import { logoutAdmin } from '@/app/actions';
import { useTransition } from 'react';

export default function AdminHeader() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  
  // Determine page title based on the route
  let pageTitle = "Dashboard";
  if (pathname === '/admin/demandes') {
    pageTitle = "Demandes";
  } else if (pathname.startsWith('/admin/demandes/')) {
    pageTitle = "Détail de la demande";
  } else if (pathname === '/admin/statistiques') {
    pageTitle = "Statistiques";
  } else if (pathname === '/admin/settings') {
    pageTitle = "Paramètres";
  }

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAdmin();
    });
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 shadow-sm z-30 relative">
      <div>
        <h1 className="text-xl font-bold text-slate-800">{pageTitle}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Placeholder for Notifications */}
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-secondary"></span>
        </button>

        <div className="h-6 w-px bg-slate-200 mx-2"></div>

        {/* User / Logout */}
        <button 
          onClick={handleLogout}
          disabled={isPending}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-red-500 transition-colors group disabled:opacity-50"
        >
          <span className="hidden sm:block">
            {isPending ? "Déconnexion..." : "Déconnexion"}
          </span>
          <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-red-50 transition-colors">
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
          </div>
        </button>
      </div>
    </header>
  );
}
