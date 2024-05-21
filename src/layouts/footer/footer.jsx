/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { FaLinkedin } from "react-icons/fa";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { en } from "../../../public/locales/en";
import { pl } from "../../../public/locales/pl";

const footerCss = {
  container: css({
    display: "grid",
    justifyItems: "center",

    "& > div": {
      padding: "0 0 6rem 0",
      display: "grid",
      width: "100%",
      justifyItems: "center",
      rowGap: "3rem",

      "@media (orientation: landscape)": {
        maxWidth: "1100px",
        gridAutoFlow: "column",
      },

      "& div:not(:first-of-type):not(:last-of-type)": {
        display: "grid",
        width: "23rem",

        "@media (orientation: landscape)": {
          width: "max-content",
        },

        "& > a": {
          ":hover": {
            color: `rgb(${colors.secondaryLight})`,
          },
        },

        "& > p > span": {
          color: `rgb(${colors.secondaryLight})`,
        },
      },
    },
  }),

  logo: css({
    width: "125px",
    height: "125px",

    "@media (orientation:landscape)": {
      width: "150px",
      height: "150px",
    },
  }),

  socialsSvgs: css({
    display: "grid",
    gridAutoFlow: "column",
    gap: "1rem",
    alignItems: "center",

    "@media (orientation:landscape)": {
      gridAutoFlow: "row",
    },
  }),

  socialSvg: css([
    universalCss.wrapperWithCenteredSvg("6rem", "80%"),
    {
      color: `rgb(${colors.primaryLight},0.5)`,
    },
  ]),
};
const Footer = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en.footer : pl.footer;

  return (
    <footer css={footerCss.container}>
      <div>
        <div>
          <ImageWithWrapper
            wrapperCss={footerCss.logo}
            src={"/images/ltc-logo.png"}
          />
        </div>

        <div>
          <Link href="/home">{t.home}</Link>
          <Link href="/about-us">{t.aboutUs}</Link>
          <Link href="/contact">{t.contact}</Link>
          <Link href="/investitions">{t.investitions}</Link>
          <Link href="/offers">{t.offers}</Link>
        </div>

        <div>
          <p> {t.addressStreet},</p>
          <p> {t.addressCode},</p>
          <p> {t.addressCity},</p>
          <p> {t.addressCountry}</p>
        </div>

        <div>
          <p>
            {t.phoneLabel}: <span>+48 504 537 611</span>
          </p>
          <p>
            {t.emailLabel}: <span>ltc.prawne@gmail.com</span>
          </p>
          <p>
            {t.nipLabel}: <span>7543070445</span>
          </p>
          <p>
            {t.krsLabel}: <span>0001059206</span>
          </p>
        </div>

        <div css={footerCss.socialsSvgs}>
          <a href="https://www.linkedin.com/company/ltc-investments-sp-z-o-o/">
            <div css={footerCss.socialSvg}>
              <FaLinkedin />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
