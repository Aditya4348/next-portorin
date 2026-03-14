"use client";

import { organizationsData } from "@/data/Content";
import { MotionDiv } from "@/helper/Motion/MotionDiv";
import { BookOpen, Building2, Code, Lightbulb, Trophy, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const ExperienceSection = () => {
  const t = useTranslations("work");
  const router = useRouter();

  const experiences = [
  {
    role: "Lead System Architect",
    company: "TechNexus Lab",
    period: "2024 - Present",
    desc: "Designing scalable backend architectures for high-traffic applications. Leading a team of 5 developers.",
    impact: "Reduced system latency by 40% through intelligent caching layers.",
    icon: <Zap className="text-purple-accent" />
  },
  {
    role: "Full Stack Developer",
    company: "Creative Solutions Inc.",
    period: "2022 - 2024",
    desc: "Built and shipped 10+ web and mobile products for global clients.",
    impact: "Shipped products used by over 50k active users.",
    icon: <Code className="text-neon-cyan" />
  }
];


  // In a real app, this data would likely come from an API or CMS
  const stats = t.raw("stats") as any[];

  const orgIcons: Record<string, any> = {
    "global-tech": <Users className="text-pink-500" />,
    "open-source": <Building2 className="text-yellow-500" />,
  };

  return (
    <div className="grid lg:grid-cols-2 gap-20 mb-32">
      <MotionDiv
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("expTitle")}</h2>
        <p className="text-xl text-slate-400 mb-12">{t("expSubtitle")}</p>

        <div className="grid grid-cols-2 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-8 rounded-3xl text-center">
              <h3 className="text-4xl font-bold text-purple-accent mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-2xl">{exp.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-purple-accent text-sm">{exp.company}</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">{exp.desc}</p>
              <p className="text-xs font-mono text-slate-500">{exp.period}</p>
            </div>
          ))}
        </div>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("orgTitle")}</h2>
        <p className="text-xl text-slate-400 mb-12">{t("orgSubtitle")}</p>

        <div className="space-y-6">
          {organizationsData.map((org, i) => (
            <div
              key={org.id}
              onClick={() => router.push(`/work/organizations/${org.slug}`)}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-2xl">
                  {orgIcons[org.id]}
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-purple-accent transition-colors">
                    {org.name}
                  </h3>
                  <p className="text-pink-500 text-sm">{org.role}</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">{org.desc}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono text-slate-500">{org.period}</p>
                <span className="text-purple-accent font-bold text-xs group-hover:translate-x-1 transition-transform">
                  Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass p-12 rounded-[40px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-br from-purple-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Trophy className="text-purple-accent mb-6" size={48} />
          <h3 className="text-2xl font-bold mb-4 italic">
            "True leadership is building systems that empower others to lead."
          </h3>
          <p className="text-slate-500 font-mono text-sm">
            — Adit's Philosophy
          </p>
        </div>
      </MotionDiv>
    </div>
  );
};
