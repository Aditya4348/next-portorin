import { ExternalLink, Github, Code2, Layers, Lightbulb } from 'lucide-react';
import { projectsData } from '@/data/Content';
import Link from 'next/link';
import { MotionButton, MotionDiv } from '@/helper/Motion/MotionDiv';
import { getTranslations } from "next-intl/server";
import PrevButton from "../../../../../helper/PrevButton";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const t  = await getTranslations('work');
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/work" className="text-purple-accent hover:underline">Back to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <PrevButton url={'/work'} />

        <div className="grid lg:grid-cols-2 gap-16">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[40px] overflow-hidden glass aspect-[4/5] lg:aspect-auto"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div>
              <span className="px-4 py-1 bg-purple-accent/20 text-purple-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                {project.complexity} {t('complexity')}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="flex items-center gap-2 text-purple-accent font-bold uppercase tracking-widest text-sm mb-3">
                  <Lightbulb size={16} /> {t('problem')}
                </h4>
                <p className="text-xl text-slate-300">{project.problem}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-neon-cyan font-bold uppercase tracking-widest text-sm mb-3">
                  <Layers size={16} /> {t('solution')}
                </h4>
                <p className="text-xl text-slate-300">{project.solution}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-sm mb-3">
                  <Code2 size={16} /> {t('stack')}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-4 py-2 glass rounded-xl text-sm font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white/5 rounded-3xl border-l-4 border-purple-accent">
                <h4 className="font-bold mb-2 text-lg">{t('lesson')}</h4>
                <p className="text-slate-400 italic text-lg">"{project.lesson}"</p>
              </div>

              <div className="flex gap-4 pt-8">
                <button className="flex-1 py-5 bg-purple-accent hover:bg-purple-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                  <ExternalLink size={20} /> {t('demo')}
                </button>
                <button className="flex-1 py-5 glass hover:bg-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                  <Github size={20} /> {t('source')}
                </button>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};
