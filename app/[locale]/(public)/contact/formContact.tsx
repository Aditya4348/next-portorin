"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FormContact() {
  const t = useTranslations("contact");

  const formSubjects = t.raw("form.subjects") as string[];

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            {t("form.name")}
          </label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors"
            placeholder={t("form.placeholderName")}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            {t("form.email")}
          </label>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors"
            placeholder={t("form.placeholderEmail")}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          {t("form.subject")}
        </label>
        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors appearance-none">
          {formSubjects.map((s, index) => (
            <option key={index}>{s}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          {t("form.message")}
        </label>
        <textarea
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-accent transition-colors resize-none"
          placeholder={t("form.placeholderMsg")}
        />
      </div>
      <button className="w-full py-5 bg-purple-accent hover:bg-purple-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
        {t("form.btn")} <Send size={20} />
      </button>
    </form>
  );
}
