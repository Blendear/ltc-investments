import { useRouter } from "next/router";
import { en } from "../../../../public/locales/en";
import { pl } from "../../../../public/locales/pl";
import { de } from "../../../../public/locales/de";

export const useTranslation = () => {
  const { locale } = useRouter();

  const t =
    {
      pl: pl.contact,
      en: en.contact,
      de: de.contact,
    }[locale] || en;

  return t;
};
