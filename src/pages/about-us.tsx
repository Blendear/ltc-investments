/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useRouter } from "next/router";
import { en } from "../../public/locales/en";
import { pl } from "../../public/locales/pl";
import { useTranslation } from "@/features/translation/hooks/useTranslation";

export const investmentsAndAboutUsCss = {
  container: css({
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "4rem",

    "@media (orientation: landscape)": {
      maxWidth: "900px",
      gridTemplateColumns: "1fr 2fr 1fr",
      columnGap: "3rem",
      rowGap: "5rem",
    },
  }),

  pageIdentifier: css([
    universalCss.h1,
    {
      "@media (orientation: landscape)": {
        gridColumn: "1/-1",
      },
    },
  ]),

  description: (position: "left" | "right") =>
    css({
      display: "grid",
      rowGap: "2rem",

      "@media (orientation: landscape)": {
        gridColumn: position === "left" ? "1/3" : "2/4",
        gridRow: position === "left" ? "3" : "2",
      },

      "& > h2": {
        "@media (orientation: portrait)": {
          textAlign: "center",
        },
      },
      "& > p": {
        textAlign: "justify",
      },
    }),

  imageForDescription: (position: "left" | "right") =>
    css({
      width: "100%",
      aspectRatio: "2/1",

      "@media (orientation: landscape)": {
        gridColumn: position === "left" ? "1" : "3",
        gridRow: position === "left" ? "2" : "3",
        aspectRatio: "1.5/1",
        height: "250px",
      },
    }),
};

const AboutUs = () => {
  const { t } = useTranslation("aboutUs");

  return (
    <article css={investmentsAndAboutUsCss.container}>
      <h1 css={investmentsAndAboutUsCss.pageIdentifier}>{t.header}</h1>

      <ImageWithWrapper
        wrapperCss={investmentsAndAboutUsCss.imageForDescription("left")}
        src={"/images/about-us/Description_1.jpg"}
      />
      <section css={investmentsAndAboutUsCss.description("right")}>
        <h2>{t.sectionOne.header}</h2>
        <p>{t.sectionOne.paragraphOne}</p>
        <p>{t.sectionOne.paragraphTwo}</p>
      </section>

      <ImageWithWrapper
        wrapperCss={investmentsAndAboutUsCss.imageForDescription("right")}
        src={"/images/about-us/Description_1b.jpg"}
      />

      <section css={investmentsAndAboutUsCss.description("left")}>
        <h2>{t.sectionTwo.header}</h2>
        <p>{t.sectionTwo.paragraphOne}</p>
        <p>{t.sectionTwo.paragraphTwo}</p>
      </section>
    </article>
  );
};

export default AboutUs;
