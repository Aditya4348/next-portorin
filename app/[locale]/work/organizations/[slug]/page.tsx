import {
  ArrowLeft,
  Users,
  Calendar,
  Award,
  Image as ImageIcon,
} from "lucide-react";
import { organizationsData } from "@/data/Content";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import PrevButton from "@/helper/PrevButton";
import { MotionDiv } from "@/helper/Motion/MotionDiv";

export default async function OrgDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("work");
  const org = organizationsData.find((o) => o.slug === slug);

  if (!org) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Organization Not Found</h1>
          <Link href="/work" className="text-purple-accent hover:underline">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <PrevButton url={"/work"} />

        <div className="grid lg:grid-cols-3 gap-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-purple-accent/10 rounded-2xl">
                  <Users className="text-purple-accent" size={32} />
                </div>
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold">{org.name}</h1>
                  <p className="text-xl text-purple-accent font-mono mt-2">
                    {org.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-slate-500 font-mono mb-12">
                <div className="flex items-center gap-2">
                  <Calendar size={18} /> {org.period}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-2xl text-slate-300 leading-relaxed">
                  {org.fullDesc}
                </p>
              </div>
            </div>

            <div className="p-10 glass rounded-[40px] border-l-8 border-neon-cyan">
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
                <Award className="text-neon-cyan" size={28} />{" "}
                {t('orgImpact')}
              </h3>
              <p className="text-xl text-slate-300 italic">"{org.impact}"</p>
            </div>

            {/* Gallery Section */}
            <div>
              <h3 className="flex items-center gap-3 text-3xl font-bold mb-10">
                <ImageIcon className="text-purple-accent" size={32} />{" "}
                {t('orgGallery')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {org.gallery.map((img, i) => (
                  <MotionDiv
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-3xl overflow-hidden glass aspect-video group"
                  >
                    <img
                      src={img}
                      alt={`${org.name} gallery ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>

          {/* Sidebar Info */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-[40px]">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
                {t('orgRole')}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-accent rounded-full" />
                  <span className="text-slate-300">{org.role}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-accent rounded-full" />
                  <span className="text-slate-300">{org.period}</span>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[40px] bg-gradient-to-br from-purple-accent/10 to-transparent">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
                Quick Summary
              </h4>
              <p className="text-slate-400 leading-relaxed">{org.desc}</p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
