"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FolderKanban,
  Building2,
  FlaskConical,
  Newspaper,
  LogOut,
} from "lucide-react";

const menus = [
  { name: "Project", href: "/adminkelola/project", icon: FolderKanban },
  { name: "Organisations", href: "/adminkelola/organisations", icon: Building2 },
  { name: "LAB", href: "/adminkelola/lab", icon: FlaskConical },
  { name: "Blog", href: "/adminkelola/blog", icon: Newspaper },
];

export function Sidebar({ logout }: { logout: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-72 border-r border-white/10 bg-black/30 backdrop-blur-xl flex-col justify-between p-6">

      {/* TOP */}
      <div>
        <div>
          <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
          <p className="text-sm text-slate-400 mt-1">Navigasi admin</p>
        </div>

        <nav className="mt-8 space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;
            const active = pathname.startsWith(menu.href);

            return (
              <Link
                key={menu.name}
                href={menu.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {menu.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* LOGOUT BUTTON */}
      <button
        onClick={logout}
        className="flex items-center justify-center gap-2 bg-red-600/90 hover:bg-red-700 text-white py-2.5 rounded-xl text-sm font-medium transition cursor-pointer"
      >
        <LogOut size={16} />
        Logout
      </button>
    </aside>
  );
}

export function BottomBar({ logout }: { logout: () => void }) {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur border-t border-white/10 flex justify-around py-2">

      {menus.map((menu) => {
        const Icon = menu.icon;
        const active = pathname.startsWith(menu.href);

        return (
          <Link
            key={menu.name}
            href={menu.href}
            className={`flex flex-col items-center text-xs ${
              active ? "text-white" : "text-slate-400"
            }`}
          >
            <Icon size={20} />
            {menu.name}
          </Link>
        );
      })}

      <button
        onClick={logout}
        className="flex flex-col items-center text-xs text-red-400"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
}