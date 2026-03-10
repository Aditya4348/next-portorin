import { MotionDiv } from '@/helper/Motion/MotionDiv';
import { motion } from 'framer-motion';
import { BookOpen, Code, Lightbulb, Users, Database, Layout, Smartphone, Sparkles } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export type TimelineItem = {
  year: string
  title: string
  desc: string
}

const skillCategories = [
  {
    title: "Backend Engineering",
    icon: <Database className="text-purple-accent" />,
    skills: [
      { name: "Node.js / Express", level: 90, desc: "Building scalable microservices." },
      { name: "PostgreSQL / MongoDB", level: 85, desc: "Data modeling and optimization." }
    ]
  },
  {
    title: "Frontend & UX",
    icon: <Layout className="text-neon-cyan" />,
    skills: [
      { name: "React / Next.js", level: 95, desc: "Modern, performant web apps." },
      { name: "Tailwind CSS", level: 95, desc: "Utility-first design systems." }
    ]
  }
];

export default async function About() {
  const t = await getTranslations("about");

 const timeline = t.raw('timeline') as TimelineItem[];

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-12">
              {t('title').split('.')[0]} <span className="text-purple-accent">{t('title').split('.')[1] || '.'}</span>
            </h1>
            <p className="text-2xl text-slate-300 leading-relaxed">
              {t('intro')}
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-[60px] overflow-hidden aspect-video lg:aspect-square"
          >
            <img 
              src="https://picsum.photos/seed/adit-about/1000/1000" 
              alt="Adit About" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </MotionDiv>
        </div>

        <div className="max-w-4xl mx-auto space-y-24">
          {/* Timeline */}
          <section className="relative pl-8 border-l border-white/10 space-y-16">
            {timeline.map((item: TimelineItem, i: number ) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-11.25 top-0 w-8 h-8 bg-navy-900 border-2 border-purple-accent rounded-full flex items-center justify-center text-purple-accent z-10">
                  {i === 0 ? <Lightbulb size={16} /> : i === 1 ? <Users size={16} /> : i === 2 ? <Code size={16} /> : <BookOpen size={16} />}
                </div>
                <span className="text-sm font-mono text-purple-accent mb-2 block">{item.year}</span>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-xl text-slate-400 leading-relaxed">{item.desc}</p>
              </MotionDiv>
            ))}
          </section>

          {/* Mindset Sections */}
          <div className="grid md:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-neon-cyan" /> {t('leadership.title')}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t('leadership.desc')}
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="text-pink-500" /> {t('learning.title')}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t('learning.desc')}
              </p>
            </MotionDiv>
          </div>

          {/* Skills Integration */}
          <section>
            <h2 className="text-4xl font-bold mb-12">{t('skillsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white/5 rounded-2xl">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between mb-2">
                          <span className="font-bold">{skill.name}</span>
                          <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <MotionDiv 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            className="h-full bg-purple-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
