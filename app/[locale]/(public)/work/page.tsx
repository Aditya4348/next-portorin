import { motion } from 'framer-motion';
import { getTranslations } from 'next-intl/server';
import { ProjectGrid } from './Project';
import { ExperienceSection } from './Experience';
import { MotionDiv } from '@/helper/Motion/MotionDiv';




const WorkPage = async () => {
  const  t  = await getTranslations("work");


  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {t("subtitle")}
          </p>
        </MotionDiv>

        {/* Projects Section */}
        <ProjectGrid />
        

        {/* Experience Section */}
        <ExperienceSection />
      </div>
    </div>
  );
};


export default WorkPage;