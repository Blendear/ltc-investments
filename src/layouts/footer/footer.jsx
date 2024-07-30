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
    backgroundColor: `rgb(${colors.primaryLight})`,
    color: `rgb(${colors.whiteLight})`,

    "& > div": {
      padding: "2rem 0 6rem 0",
      display: "grid",
      width: "100%",
      justifyItems: "center",
      columnGap: "20px",

      "@media (min-width:922px)": {
        padding: "0",
        maxWidth: "1100px",
        gridAutoFlow: "column",
      },

      "& > div:not(:first-of-type):not(:last-of-type)": {
        alignSelf: "center",
        width: "23rem",
        display: "grid",
        justifyItems: "center",
        rowGap: "1rem",

        "@media (min-width:922px)": {
          width: "max-content",
          justifyItems: "start",
          gridTemplateRows: `repeat(5, ${variables.fontSize.regular})`,
        },

        "& > a": {
          ":hover": {
            color: `rgb(${colors.secondaryLight})`,
          },
        },

        "& > p": {
          "& > span": {
            color: `rgb(${colors.secondaryLight})`,
          },
        },

        "& > p:nth-of-type(1), & > p:nth-of-type(2)": {
          "& > span:hover": {
            filter: "brightness(0.85)",
          },
        },
      },

      "& > div:not(:first-of-type):not(:nth-of-type(2))": {
        "@media (max-width:922px)": {
          margin: "40px 0 0 0",
        },
      },
    },
  }),

  logo: css({
    width: "275px",
    height: "275px",
  }),

  socialsSvgs: css({
    display: "grid",
    gridAutoFlow: "column",
    gap: "1rem",
    alignItems: "center",

    "@media (orientation:landscape)": {
      gridAutoFlow: "row",
    },

    "& > a:hover": {
      filter: "brightness(0.85)",
    },
  }),

  socialSvg: css([
    universalCss.wrapperWithCenteredSvg("6rem", "80%"),
    {
      color: `rgb(${colors.whiteLight},0.75)`,
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
            src={"/images/brand/ltc-investments-logo.png"}
          />
        </div>

        <div>
          {/* <Link href="/home">{t.home}</Link>
          <Link href="/about-us">{t.aboutUs}</Link>
          <Link href="/contact">{t.contact}</Link>
          <Link href="/investments">{t.investments}</Link>
          <Link href="/offers">{t.offers}</Link> */}
          <Link href="/about-us">{t.home}</Link>
          <Link href="/about-us">{t.aboutUs}</Link>
          <Link href="/about-us">{t.contact}</Link>
          <Link href="/about-us">{t.investments}</Link>
          <Link href="/about-us">{t.offers}</Link>
        </div>

        <div>
          <p>LTC Investments sp. z o. o.</p>
          <p> {t.addressStreet},</p>
          <p>
            {" "}
            {t.addressCode}, {t.addressCity},
          </p>
          <p> {t.addressCountry}</p>
        </div>

        <div>
          <p>
            {t.nipLabel}: <span>7543070445</span>
          </p>
          <p>
            {t.krsLabel}: <span>0001059206</span>
          </p>
          <p>
            {t.regonLabel}: <span>161512181</span>
          </p>
          <p></p>
          <p>
            {`${t.phoneLabel}: `}
            <span>
              <a href={`tel:+48 604 513 082`}>(+48) 604 513 082</a>
            </span>
          </p>
          <p>
            {`${t.emailLabel}: `}
            <span>
              <a href={`mailto:l.cibis@gmail.com`}>l.cibis@gmail.com</a>
            </span>
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
