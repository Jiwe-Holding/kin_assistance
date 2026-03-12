"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Eye, Search, Filter, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Demande {
  id: string;
  name: string;
  phone: string;
  service: string;
  departure: string | null;
  destination: string | null;
  urgency: string;
  createdAt: Date;
  status: string;
}

export default function DemandesTable({ initialDemandes }: { initialDemandes: any[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('toutes');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Demande; direction: 'asc' | 'desc' } | null>(null);
  
  const itemsPerPage = 10;

  // Filter and Search Logic
  const filteredDemandes = useMemo(() => {
    return initialDemandes.filter((demande) => {
      const matchesSearch = 
        demande.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        demande.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        demande.phone.includes(searchTerm);
      
      const matchesStatus = statusFilter === 'toutes' || demande.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [initialDemandes, searchTerm, statusFilter]);

  // Sorting Logic
  const sortedDemandes = useMemo(() => {
    if (!sortConfig) return filteredDemandes;
    
    return [...filteredDemandes].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue === null || bValue === null) return 0;
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredDemandes, sortConfig]);

  // Pagination Logic
  const totalPages = Math.ceil(sortedDemandes.length / itemsPerPage);
  const paginatedDemandes = sortedDemandes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: keyof Demande) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'nouveau':
        return <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-bold text-yellow-700">Nouveau</span>;
      case 'en_cours':
        return <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700">En cours</span>;
      case 'termine':
        return <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">Terminé</span>;
      default:
        return <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700">{status}</span>;
    }
  };

  const SortingIcon = ({ column }: { column: keyof Demande }) => {
    if (sortConfig?.key !== column) return <ChevronUp className="h-3 w-3 opacity-20" />;
    return sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />;
  };

  return (
    <div className="space-y-6">
      
      {/* Tâche 5: Toolbar (Search & Status Filter) */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full lg:max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-xl border-slate-200 py-2.5 pl-10 text-slate-900 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all bg-slate-50/50"
            placeholder="Rechercher par nom, téléphone ou ID..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
          <span className="text-sm font-bold text-slate-500 mr-2 shrink-0">Filtrer par statut :</span>
          {['toutes', 'nouveau', 'en_cours', 'termine'].map((status) => (
            <button
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                statusFilter === status 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status === 'toutes' ? 'Toutes' : status === 'en_cours' ? 'En cours' : status === 'termine' ? 'Terminé' : 'Nouveau'}
            </button>
          ))}
        </div>
      </div>

      {/* Tâche 4: Demandes Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50/50">
              <tr>
                <th 
                  className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">Nom <SortingIcon column="name" /></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Service</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Téléphone</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Adresse (Départ → Destination)</th>
                <th 
                   className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors"
                   onClick={() => handleSort('createdAt')}
                >
                  <div className="flex items-center gap-2">Date <SortingIcon column="createdAt" /></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Statut</th>
                <th className="relative px-6 py-4"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {paginatedDemandes.map((demande) => (
                <tr key={demande.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-slate-900">{demande.name}</div>
                    <div className="text-[10px] text-slate-400 font-medium font-mono uppercase tracking-tight">{demande.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-slate-100 text-slate-600 rounded-lg uppercase tracking-wider">
                      {demande.service.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {demande.phone}
                  </td>
                  <td className="px-6 py-4 max-w-md">
                    <div className="text-xs text-slate-600 line-clamp-1">
                      <span className="font-bold text-slate-800">{demande.departure || "—"}</span>
                      <span className="mx-2 text-slate-300">→</span>
                      <span className="font-bold text-slate-800">{demande.destination || "—"}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 font-medium">
                    {new Date(demande.createdAt).toLocaleDateString('fr-FR', {
                       day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(demande.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/demandes/${demande.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-white bg-blue-50 hover:bg-primary px-3 py-1.5 rounded-xl transition-all font-bold text-xs uppercase tracking-wider"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Détails
                    </Link>
                  </td>
                </tr>
              ))}
              {paginatedDemandes.length === 0 && (
                <tr>
                   <td colSpan={7} className="px-6 py-20 text-center text-slate-400 font-medium italic">
                     Aucune demande ne correspond à vos critères de recherche.
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Card Footer */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/30 px-6 py-4">
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="relative inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 disabled:opacity-50"
              >
                Précédent
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="relative ml-3 inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 disabled:opacity-50"
              >
                Suivant
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Affichage de <span className="font-bold text-slate-900">{(currentPage - 1) * itemsPerPage + 1}</span> à <span className="font-bold text-slate-900">{Math.min(currentPage * itemsPerPage, sortedDemandes.length)}</span> sur <span className="font-bold text-slate-900">{sortedDemandes.length}</span> résultats
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                        currentPage === i + 1 
                        ? 'bg-primary text-white shadow-md shadow-primary/20' 
                        : 'text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
