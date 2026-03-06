"use client"

import { useTranslations } from "next-intl";

// export default async function Hero() {
//   const t = await getTranslations("home");

//   return <h1>{t("description")}</h1>;
// }

export default function Hero(){

  const t = useTranslations("home");
  return <h1>{t("description")}</h1>;
}