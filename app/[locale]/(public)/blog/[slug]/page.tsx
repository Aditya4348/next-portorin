import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { blogPostsData } from '@/data/Content';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { MotionDiv } from '@/helper/Motion/MotionDiv';
import PrevButton from '@/helper/PrevButton';

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("blog");
  const post = blogPostsData.find(p => p.slug === slug);


  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-purple-accent hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <PrevButton url={"/about"} page={"about"} />

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1 bg-purple-accent/20 text-purple-accent rounded-full text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              <Calendar size={14} /> {post.date}
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              <Clock size={14} /> {post.readTime} {t('readTime')}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            {post.title}
          </h1>

          <div className="rounded-[40px] overflow-hidden glass mb-16 aspect-video">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="flex items-center gap-4 mb-12 p-6 glass rounded-3xl">
              <div className="w-12 h-12 bg-purple-accent rounded-full flex items-center justify-center">
                <User className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white">Adit</p>
                <p className="text-sm text-slate-500">System Architect & Builder</p>
              </div>
              <button className="ml-auto p-3 glass rounded-xl hover:bg-white/10 transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            <div className="text-xl text-slate-300 leading-relaxed space-y-8 whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};
