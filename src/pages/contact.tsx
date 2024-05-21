/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useRouter } from "next/router";
import { en } from "../../public/locales/en";
import { pl } from "../../public/locales/pl";

const contactCss = {
  container: css({
    // gridRow: "1 / 3",
    // padding: "1rem",
    //
    // width: "100%",
    // boxSizing: "border-box",
    // aspectRatio: "2/1",
    // backgroundColor: `rgb(${colors.primaryLight})`,
    //
    // display: "grid",
    // gridTemplateRows: "1fr",
    // rowGap: "1rem",
    // columnGap: "2rem",
    //
    // justifyItems: "center",
    // fontSize: variables.fontSize.heading,
    //
    // "@media (orientation: landscape)": {
    // ...
    // }
    //
    // "& div:nth-child(1)": {
    //   backgroundColor: "yellow",
    // },
  }),
};

const Contact = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en.contact : pl.contact;

  return <div css={contactCss.container}>AComponent</div>;
};

export default Contact;
