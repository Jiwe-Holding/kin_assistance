import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | KinAssistance',
  description: 'Espace d\'administration KinAssistance',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
