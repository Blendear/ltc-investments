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
  container: css({}),

  logo: css({
    width: "125px",
    height: "125px",

    // "@media (orientation:landscape)": {
    //   width: "150px",
    //   height: "150px",
    // },
  }),
};
const Footer = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en.footer : pl.footer;

  return (
    <footer>
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
        <p> {t.addressStreet}</p>
        <p> {t.addressCode}</p>
        <p> {t.addressCity}</p>
        <p> {t.addressCountry}</p>
      </div>

      <div>
        <p> {t.phoneLabel}: +48 504 537 611</p>
        <p> {t.emailLabel}: ltc.prawne@gmail.com</p>
        <p> {t.nipLabel}: 7543070445</p>
        <p> {t.krsLabel}: 0001059206</p>
      </div>

      <div>
        <div>
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
