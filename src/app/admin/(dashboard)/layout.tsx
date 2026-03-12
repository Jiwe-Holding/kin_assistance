import { Inter } from 'next/font/google';
import Sidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard | KinAssistance',
  description: 'Espace d\'administration KinAssistance',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wrap everything in a slightly different base style (bg-slate-50 over the body)
    <div className={`flex min-h-screen bg-slate-50 relative isolate ${inter.className}`}>
      
      {/* Sidebar Component (Fixed Left) */}
      <Sidebar />

      {/* Main Content Area (Scrollable Right) */}
      <main className="flex-1 ml-0 sm:ml-64 min-w-0 bg-slate-50 flex flex-col">
        
        {/* Top Header Bar */}
        <AdminHeader />

        {/* Content Wrapper */}
        <div className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>

    </div>
  );
}
