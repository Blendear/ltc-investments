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
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
        }
      />
      <section css={aboutUsCss.description("right")}>
        <h2>Tytuł tytuł tytuł</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <ImageWithWrapper
        wrapperCss={aboutUsCss.imageForDescription("right")}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
        }
      />

      <section css={aboutUsCss.description("left")}>
        <h2>Tytuł tytuł tytuł</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </article>
  );
};

export default AboutUs;
