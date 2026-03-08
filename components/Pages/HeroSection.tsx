"use client"

import { MotionDiv } from "@/helper/Motion/MotionDiv";
import { ArrowRight, Cpu, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";


const HeroSection = () => {
    const t = useTranslations("home");
    const words = t.raw('words') as string[];

    return(
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              {t('hi')} <span className="text-purple-accent">Adit.</span><br />
              <span className="text-4xl md:text-6xl text-slate-400">
                <Typewriter
                  words={words}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/work" className="px-8 py-4 bg-purple-accent hover:bg-purple-600 text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105">
                {t('viewWork')} <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="px-8 py-4 glass hover:bg-white/10 rounded-2xl font-bold transition-all">
                {t('talk')}
              </Link>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-full aspect-square relative glass rounded-[60px] overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/adit-hero/1000/1000" 
                alt="Adit Hero" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/30 to-navy-900/80" />
              
              {/* Abstract shapes overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu size={120} className="text-white/20 relative z-10" />
              </div>
              
              {/* Floating elements */}
              <MotionDiv 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 glass p-4 rounded-2xl flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-mono">{t('systemOnline')}</span>
              </MotionDiv>
              
              <MotionDiv 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 glass p-4 rounded-2xl flex items-center gap-3"
              >
                <Globe size={20} className="text-neon-cyan" />
                <span className="text-sm font-mono">{t('globalImpact')}</span>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
    )
}

export default HeroSection;