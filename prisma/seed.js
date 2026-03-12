const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Clear existing requests just in case
  await prisma.demande.deleteMany({});

  console.log('Seeding the database with mock requests...');

  const now = new Date();
  
  // A helper to generate dates offset by days
  const getDateOffset = (days) => {
    const date = new Date(now);
    date.setDate(date.getDate() + days);
    return date;
  };

  const requests = [
    {
      name: 'Jean Dupont',
      phone: '+243 81 000 0000',
      email: 'jean.dupont@exemple.cd',
      service: 'courses-marche',
      departure: 'Limete, 7ème rue',
      destination: 'Commune de Gombe, croisement Batetela',
      description: 'Acheter 1 carton d\'eau et des fruits (pommes, bananes) au grand marché et me les livrer à domicile. Paiement déjà prêt.',
      status: 'nouveau',
      createdAt: now,
    },
    {
      name: 'Marie Claire',
      phone: '+243 99 123 4567',
      email: 'marie.c@exemple.cd',
      service: 'pharmacie',
      departure: 'Pharmacie 30 Juin',
      destination: 'Ngaliema',
      description: 'Récupérer ma commande de médicaments à la pharmacie et me l\'apporter. Voici mon ordonnance.',
      status: 'en_cours',
      createdAt: getDateOffset(-1), // yesterday
    },
    {
      name: 'Paul Kabeya',
      phone: '+243 82 987 6543',
      email: 'paul.kabeya@mail.cd',
      service: 'paiement-facture',
      departure: null,
      destination: 'SNEL Bandal',
      description: 'Payer ma facture d\'électricité pour ce mois, numéro de compteur fourni séparément par SMS.',
      status: 'termine',
      createdAt: getDateOffset(-5), // 5 days ago
    },
    {
      name: 'Sarah Ilunga',
      phone: '+243 89 555 1234',
      email: 'sarah.i@exemple.cd',
      service: 'livraison',
      departure: 'Gare Centrale',
      destination: 'Aéroport',
      description: 'Déposer ce colis urgent à une connaissance à N\'djili avant son vol de 18h.',
      status: 'termine',
      createdAt: getDateOffset(-8), // 8 days ago
    },
    {
      name: 'Luc Mutombo',
      phone: '+243 85 444 9876',
      email: 'm.luc@exemple.cd',
      service: 'documents',
      departure: 'Hôtel de Ville',
      destination: 'Mon entreprise',
      description: 'Retirer les documents légaux certifiés. Je vous envoie le mandat de représentation par email.',
      status: 'en_cours',
      createdAt: getDateOffset(-2), // 2 days ago
    },
  ];

  for (const req of requests) {
    const created = await prisma.demande.create({
      data: req,
    });
    console.log(`Created request with ID: ${created.id}`);
  }

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
