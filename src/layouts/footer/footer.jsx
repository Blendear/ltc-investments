/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { FaLinkedin } from "react-icons/fa";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import Link from "next/link";

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
  return (
    <footer>
      <div>
        <ImageWithWrapper
          wrapperCss={footerCss.logo}
          src={"/images/ltc-logo.png"}
        />
      </div>

      <div>
        <Link href="/home">Strona Główna</Link>
        <Link href="/about-us"> O nas</Link>
        <Link href="/contact"> Kontakt</Link>
        <Link href="/investitions"> Inwestycje</Link>
        <Link href="/offers"> Oferty</Link>
      </div>

      <div>
        <p>Al. Jana PAwła II 58 B/7</p>
        <p>470232, Kędzierzyn-Koźle</p>
        <p>Polska</p>
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
