import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const demandes = await prisma.demande.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const formattedDemandes = demandes.map((d) => ({
      id: d.id,
      nom: d.name,
      telephone: d.phone,
      service: d.service,
      status: d.status,
      created_at: d.createdAt,
    }));

    return NextResponse.json(formattedDemandes);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
