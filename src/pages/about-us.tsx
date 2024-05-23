/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useRouter } from "next/router";
import { en } from "../../public/locales/en";
import { pl } from "../../public/locales/pl";

const aboutUsCss = {
  container: css({
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "2rem",

    "@media (orientation: landscape)": {
      gridTemplateColumns: "1fr 4fr 1fr",
      columnGap: "3rem",
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
      rowGap: "1rem",

      "@media (orientation: landscape)": {
        gridColumn: position === "left" ? "1/3" : "2/4",
        gridRow: position === "left" ? "3" : "2",
      },
    }),

  imageForDescription: (position: "left" | "right") =>
    css({
      width: "100%",
      aspectRatio: "2/1",

      "@media (orientation: landscape)": {
        gridColumn: position === "left" ? "1" : "3",
        gridRow: position === "left" ? "2" : "3",
        aspectRatio: "1/1.25",
      },
    }),
};

const AboutUs = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en.aboutUs : pl.aboutUs;

  return (
    <article css={aboutUsCss.container}>
      <h1 css={aboutUsCss.pageIdentifier}>O nas</h1>

      <ImageWithWrapper
        wrapperCss={aboutUsCss.imageForDescription("left")}
        src={"/images/about-us/Description_1.jpg"}
      />
      <section css={aboutUsCss.description("right")}>
        <h2>Dynamiczny rozwój w nieruchomościach</h2>
        <p>
          LTC Investments sp. z o.o. to dynamicznie rozwijająca się firma
          działająca w branży nieruchomości. Nasza oferta obejmuje wynajem
          lokali użytkowych i mieszkań, a także kompleksowe zarządzanie
          nieruchomościami. Z pasją i zaangażowaniem wspieramy naszych klientów
          w realizacji ich inwestycyjnych celów, oferując profesjonalne
          doradztwo i wsparcie na każdym etapie.
        </p>
      </section>

      <ImageWithWrapper
        wrapperCss={aboutUsCss.imageForDescription("right")}
        src={"/images/about-us/Description_1b.jpg"}
      />

      <section css={aboutUsCss.description("left")}>
        <h2>Specjaliści od zarządzania nieruchomościami</h2>
        <p>
          Specjalizujemy się w szeroko pojętej branży nieruchomości, oferując
          wynajem mieszkań i lokali użytkowych oraz kompleksowe zarządzanie
          nieruchomościami. LTC Investments sp. z o.o. to zespół doświadczonych
          specjalistów, którzy z pasją podchodzą do inwestycji i doradztwa
          inwestycyjnego, pomagając klientom osiągnąć maksymalne korzyści z ich
          przedsięwzięć.
        </p>
      </section>
    </article>
  );
};

export default AboutUs;
