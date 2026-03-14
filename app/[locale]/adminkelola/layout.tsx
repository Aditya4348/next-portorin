'use client';

import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname?.endsWith('/login');

  return (
    <div className={`min-h-screen ${isLoginPage ? 'flex items-center justify-center' : 'flex'}`}>
      {!isLoginPage && (
        <aside className="w-80 border-r border-white/10 bg-black/20 p-6">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          <p className="text-sm text-slate-400 mt-2">Navigasi admin</p>
        </aside>
      )}

      <main className={`flex-1 ${isLoginPage ? '' : 'p-6'}`}>{children}</main>
    </div>
  );
}
