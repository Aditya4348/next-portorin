import { MotionDiv } from '@/helper/Motion/MotionDiv';
import { getTranslations } from 'next-intl/server';
import BlogGrid from './BlogGrid';
// import { useNavigate } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import { blogPostsData } from '../data/Content';

const Thoughts = async () => {
  const t = await getTranslations("blog");

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

        {/* Blog Grid */}
        <BlogGrid />

      </div>
    </div>
  );
};


export default Thoughts;