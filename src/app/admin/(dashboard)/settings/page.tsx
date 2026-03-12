import { Settings as SettingsIcon, Shield, Bell, Cloud, Database, Server, Info } from 'lucide-react';

export default function SettingsPage() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@kin-assistance.com';

  return (
    <div className="space-y-8 max-w-4xl pb-12">
      
      {/* Configuration Sections */}
      <div className="grid grid-cols-1 gap-8">
        
        {/* Account Security */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
            <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Sécurité du Compte</h3>
              <p className="text-xs text-slate-400 font-medium">Gérez vos accès administrateur</p>
            </div>
          </div>
          <div className="p-8 space-y-6">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <p className="text-sm font-bold text-slate-700">Email Administrateur</p>
                  <p className="text-xs text-slate-400 mt-0.5">{adminEmail}</p>
                </div>
                <button className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all active:scale-95">
                  Modifier
                </button>
             </div>
             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border border-dashed border-slate-200">
                <div>
                  <p className="text-sm font-bold text-slate-700">Mot de passe</p>
                  <p className="text-xs text-slate-400 mt-0.5">Dernière modification : il y a 30 jours</p>
                </div>
                <button className="px-4 py-2 text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 border border-primary/10 rounded-xl hover:bg-primary/10 transition-all active:scale-95">
                  Changer
                </button>
             </div>
          </div>
        </div>

        {/* Global Notifications */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
            <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-secondary">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Notifications</h3>
              <p className="text-xs text-slate-400 font-medium">Configurez les alertes en temps réel</p>
            </div>
          </div>
          <div className="p-8 space-y-4">
             {[
               { id: 'email-alert', label: 'Alertes par email', desc: 'Recevoir un mail pour chaque nouvelle demande' },
               { id: 'whatsapp-alert', label: 'Notifications WhatsApp', desc: 'Recevoir une alerte WhatsApp directe' },
               { id: 'browser-alert', label: 'Notifications Navigateur', desc: 'Alertes sonores dans le dashboard' },
             ].map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2">
                   <div>
                      <p className="text-sm font-bold text-slate-700">{item.label}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                   </div>
                   <div className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-slate-200">
                      <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* System Information */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
            <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-primary">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Informations Système</h3>
              <p className="text-xs text-slate-400 font-medium">Détails techniques de l'instance</p>
            </div>
          </div>
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Database className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base de données</p>
                  <p className="text-xs font-bold text-slate-700">SQLite (Prisma 6.0)</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Server className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Environnement</p>
                  <p className="text-xs font-bold text-slate-700">{process.env.NODE_ENV === 'production' ? 'Production' : 'Développement'}</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Cloud className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mode Standalone</p>
                  <p className="text-xs font-bold text-slate-700">Activé (Docker Ready)</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <SettingsIcon className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Version App</p>
                  <p className="text-xs font-bold text-slate-700">v1.2.0-stable</p>
                </div>
             </div>
          </div>
        </div>

      </div>

    </div>
  );
}
