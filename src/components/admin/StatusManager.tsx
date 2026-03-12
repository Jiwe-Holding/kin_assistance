"use client";

import { useState } from 'react';
import { updateDemandeStatus } from '@/app/actions';
import { Check, ChevronDown, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const statuses = [
  { id: 'nouveau', label: 'Nouveau', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'en_cours', label: 'En cours', color: 'bg-blue-100 text-blue-700' },
  { id: 'termine', label: 'Terminé', color: 'bg-green-100 text-green-700' },
];

export default function StatusManager({ id, initialStatus }: { id: string, initialStatus: string }) {
  const [status, setStatus] = useState(initialStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus: string) => {
    if (newStatus === status) {
      setIsOpen(false);
      return;
    }

    setIsUpdating(true);
    setIsOpen(false);
    
    try {
      const result = await updateDemandeStatus(id, newStatus);
      if (result.success) {
        setStatus(newStatus);
      } else {
        alert("Erreur lors de la mise à jour du statut.");
      }
    } catch (err) {
      alert("Erreur de connexion.");
    } finally {
      setIsUpdating(false);
    }
  };

  const currentStatusObj = statuses.find(s => s.id === status) || statuses[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isUpdating}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-slate-200 shadow-sm ${isUpdating ? 'opacity-70' : 'hover:bg-slate-50'}`}
      >
        {isUpdating ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <div className={`w-2 h-2 rounded-full ${currentStatusObj.color.split(' ')[0]}`}></div>
        )}
        Statut : {currentStatusObj.label}
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-slate-200 shadow-xl z-50 overflow-hidden"
          >
            <div className="p-2 space-y-1">
              {statuses.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleStatusChange(s.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    status === s.id ? 'bg-slate-50 text-slate-900' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${s.color.split(' ')[0]}`}></div>
                    {s.label}
                  </div>
                  {status === s.id && <Check className="h-3 w-3 text-primary" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
