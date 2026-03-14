'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getUser();
      if (data) {
        router.replace(`/${locale}/adminkelola`);
      }
    }

    checkSession();
  }, [locale, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push(`/${locale}/adminkelola`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),_rgba(10,10,26,1))] px-4 py-10">
      <div className="w-full max-w-md glass p-10 rounded-3xl shadow-xl border border-white/10">
        <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
        <p className="text-sm text-slate-400 mb-8">Masuk untuk mengelola panel admin.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/40"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/40"
              autoComplete="current-password"
            />
          </div>

          {error ? (
            <div className="rounded-xl bg-red-700/30 border border-red-500/30 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-purple-accent px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60 transition"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-500">
          * Pastikan akun Supabase Anda memiliki akses admin.
        </p>
      </div>
    </div>
  );
}
