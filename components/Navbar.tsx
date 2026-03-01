import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, LayoutGrid, Languages } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.work, path: '/work' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.lab, path: '/lab' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-purple-accent rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <LayoutGrid className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">ADIT.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-purple-accent",
                location.pathname === link.path ? "text-purple-accent" : "text-slate-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-xs font-bold uppercase"
            >
              <Languages size={18} />
              {language}
            </button>
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setLanguage(language === 'en' ? 'id' : 'en')} className="text-xs font-bold uppercase">
            {language}
          </button>
          <button onClick={toggleDark}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-6 right-6 glass p-6 rounded-2xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium",
                location.pathname === link.path ? "text-purple-accent" : "text-slate-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
