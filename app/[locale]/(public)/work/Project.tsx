"use client"

import { MotionDiv } from "@/helper/Motion/MotionDiv"
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { projectsData, organizationsData } from '@/data/Content';


export const ProjectGrid = () => {
      const t = useTranslations("work");
      const router = useRouter();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projectsData.map((project) => (
            <MotionDiv
              key={project.id}
              onClick={() => router.push(`/work/projects/${project.slug}`)}
              className="group cursor-pointer glass rounded-[40px] overflow-hidden flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-purple-accent/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {project.complexity} {t("complexity")}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 line-clamp-2 mb-8 text-lg">{project.problem}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <div key={tech} className="w-8 h-8 glass rounded-full flex items-center justify-center text-[10px] font-mono border-2 border-navy-900 bg-navy-800">
                        {tech[0]}
                      </div>
                    ))}
                  </div>
                  <span className="text-purple-accent font-bold text-sm group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
    )
}