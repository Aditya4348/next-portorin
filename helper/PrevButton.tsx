"use client";

import { MotionButton } from "@/helper/Motion/MotionDiv";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function PrevButton({ url, page }: { url: string, page: string }) {
  const router = useRouter();
  const t = useTranslations(page);

  return (
    <MotionButton
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => router.push(url)}
      className="flex items-center gap-2 text-slate-400 hover:text-purple-accent mb-12 transition-colors group"
    >
      <ArrowLeft
        size={20}
        className="group-hover:-translate-x-1 transition-transform"
      />
      {t("back")}
    </MotionButton>
  );
}
