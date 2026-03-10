"use client"

import { MotionDiv, MotionSpan } from "@/helper/Motion/MotionDiv"
import { RefreshCw, Rocket, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl";
import { useState } from "react";


const LabSection = () => {
    const t = useTranslations("lab");
  
    const [careerPath, setCareerPath] = useState<string | null>(null);
    const [sideHustle, setSideHustle] = useState<string | null>(null);
  
    const generateCareer = () => {
      const paths = t("career.paths");
      setCareerPath(paths[Math.floor(Math.random() * paths.length)]);
    }

    const generateHustle = () => {
      const ideas = t("hustle.ideas");
      setSideHustle(ideas[Math.floor(Math.random() * ideas.length)]);
    }


    return(
        <div className="grid md:grid-cols-2 gap-8">
          {/* Career Path Generator */}
          <MotionDiv
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center"
          >
            <div className="p-4 bg-purple-accent/10 rounded-2xl mb-6">
              <Rocket className="text-purple-accent" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("career.title")}</h3>
            <p className="text-slate-400 mb-8">{t("career.desc")}</p>

            <div className="h-16 flex items-center justify-center mb-8">
              {careerPath && (
                <MotionSpan
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl font-display font-bold text-purple-accent"
                >
                  {careerPath}
                </MotionSpan>
              )}
            </div>

            <button
              onClick={generateCareer}
              className="w-full py-4 bg-purple-accent rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-600 transition-colors"
            >
              <RefreshCw size={20} /> {t("career.btn")}
            </button>
          </MotionDiv>

          {/* Side Hustle Idea Generator */}
          <MotionDiv
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center"
          >
            <div className="p-4 bg-neon-cyan/10 rounded-2xl mb-6">
              <Sparkles className="text-neon-cyan" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("hustle.title")}</h3>
            <p className="text-slate-400 mb-8">{t("hustle.desc")}</p>

            <div className="h-16 flex items-center justify-center mb-8">
              {sideHustle && (
                <MotionSpan
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl font-display font-bold text-neon-cyan"
                >
                  {sideHustle}
                </MotionSpan>
              )}
            </div>

            <button
              onClick={generateHustle}
              className="w-full py-4 bg-neon-cyan rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-600 transition-colors text-navy-900"
            >
              <RefreshCw size={20} /> {t("hustle.btn")}
            </button>
          </MotionDiv>
        </div>
    )
}

export default LabSection;