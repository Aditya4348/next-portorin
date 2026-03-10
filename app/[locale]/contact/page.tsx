import { MotionA, MotionDiv } from '@/helper/Motion/MotionDiv';
import { Mail, Github, Twitter, Linkedin, Send, MessageSquare } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import FormContact from './formContact';
// import { useLanguage } from '../context/LanguageContext';

const Contact = async () => {
  const t = await getTranslations("contact");

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-8">{t("title").split(' ').slice(0, -1).join(' ')} <span className="text-purple-accent">{t("title").split(' ').slice(-1)}</span></h1>
            <p className="text-2xl text-slate-400 mb-12 leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-purple-accent transition-colors">
                  <Mail className="text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">{t("email")}</p>
                  <p className="text-xl font-bold">hello@adit.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-neon-cyan transition-colors">
                  <MessageSquare className="text-slate-300 group-hover:text-navy-900" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">{t("discord")}</p>
                  <p className="text-xl font-bold">adit#1337</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              {[
                { icon: <Github />, link: "#" },
                { icon: <Twitter />, link: "#" },
                { icon: <Linkedin />, link: "#" }
              ].map((social, i) => (
                <MotionA
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-purple-accent transition-colors"
                >
                  {social.icon}
                </MotionA>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-[40px]"
          >
            <FormContact />
          </MotionDiv>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 text-center text-slate-600 text-sm">
          <p>© 2026 Adit. Built with intention and React.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;