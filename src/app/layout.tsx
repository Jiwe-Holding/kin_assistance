import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KinAssistance | Votre assistant personnel à Kinshasa",
  description: "Déléguez vos courses, paiements de factures et démarches administratives à Kinshasa. Gagnez du temps avec KinAssistance.",
  keywords: ["Kinshasa", "Assistant personnel", "Courses à Kinshasa", "Paiement factures RDC", "Livraison Kinshasa", "Démarches administratives"],
  authors: [{ name: "KinAssistance" }],
  openGraph: {
    title: "KinAssistance | Gagnez du temps à Kinshasa",
    description: "Votre assistant personnel urbain. Nous faisons vos courses et gérons vos démarches pendant que vous gagnez du temps.",
    url: "https://kinassistance.cd", // Replace with real URL later
    siteName: "KinAssistance",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KinAssistance | Votre assistant personnel à Kinshasa",
    description: "Déléguez vos courses et démarches à Kinshasa en toute sécurité.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
