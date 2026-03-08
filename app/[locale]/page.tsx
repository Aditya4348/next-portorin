import { getTranslations } from "next-intl/server";
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Cpu, Globe, Zap } from 'lucide-react';
import Link from "next/link";
import { MotionDiv } from "@/helper/Motion/MotionDiv";
import HeroSection from "@/components/Pages/HeroSection";

export default async function Hero() {
  const t = await getTranslations("home");

  const words = t.raw('words') as string[]

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Why I Build */}
        <section className="mb-32">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('whyTitle')}</h2>
            <p className="text-xl text-slate-400 leading-relaxed italic">
              {t('whyQuote')}
            </p>
          </MotionDiv>
        </section>

        {/* Core Traits */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          {(t.raw('traits') as any[]).map((trait, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {i === 0 ? <Cpu className="w-8 h-8 text-purple-accent" /> : 
                 i === 1 ? <Zap className="w-8 h-8 text-neon-cyan" /> : 
                 <Globe className="w-8 h-8 text-pink-500" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{trait.title}</h3>
              <p className="text-slate-400">{trait.desc}</p>
            </MotionDiv>
          ))}
        </section>
      </div>
    </div>
  );
}
