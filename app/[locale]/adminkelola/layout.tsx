'use client';

import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';
import { Sidebar, BottomBar } from '@/components/admin/AdminNavigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname?.endsWith('/login');
  const { logoutMutate } = useAuth();

  return (
    <div className={`min-h-screen ${isLoginPage ? 'flex items-center justify-center' : 'flex'}`}>

      {!isLoginPage && <Sidebar logout={logoutMutate} />}

      <main className={`flex-1 ${isLoginPage ? '' : 'p-6 pb-20 md:pb-6'}`}>
        {children}
      </main>

      {!isLoginPage && <BottomBar logout={logoutMutate} />}
      
    </div>
  );
}