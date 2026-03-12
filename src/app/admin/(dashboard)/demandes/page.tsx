import prisma from '@/lib/prisma';
import DemandesTable from '@/components/admin/DemandesTable';

export const dynamic = 'force-dynamic';

export default async function DemandesPage() {
  // Fetch all demandes from the database
  const demandes = await prisma.demande.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Demandes de Services</h1>
          <p className="text-sm text-slate-500 mt-1">Consultez, filtrez et gérez toutes les demandes entrantes.</p>
        </div>
      </div>

      {/* Dynamic Table with Filter, Sort and Pagination */}
      <DemandesTable initialDemandes={demandes} />

    </div>
  );
}
