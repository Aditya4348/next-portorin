import { getTranslations } from 'next-intl/server';
import { MotionDiv } from '@/helper/Motion/MotionDiv';
import LabSection from './LabSection';


 const Lab = async () => {
  const t = await getTranslations("lab");
//   const [careerPath, setCareerPath] = useState<string | null>(null);
//   const [sideHustle, setSideHustle] = useState<string | null>(null);

//   const generateCareer = () => {
//     const paths = t("career.paths");
//     setCareerPath(paths[Math.floor(Math.random() * paths.length)]);
//   };

//   const generateHustle = () => {
//     const ideas = t("hustle.ideas");
//     setSideHustle(ideas[Math.floor(Math.random() * ideas.length)]);
//   };

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{t("title").split(' ').slice(0, -1).join(' ')} <span className="text-purple-accent">{t("title").split(' ').slice(-1)}</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {t("subtitle")}
          </p>
        </MotionDiv>

        {/* Lab Section */}
        <LabSection />
        
      </div>
    </div>
  );
};

export default Lab;