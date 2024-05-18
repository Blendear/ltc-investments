/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import Link from "next/link";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const navbarCss = {
  container: css({
    backgroundColor: `rgb(${colors.tertiaryLight})`,
  }),

  logo: css({ width: "125px", height: "125px" }),
};

const Navbar = () => {
  return (
    <nav css={navbarCss.container}>
      <Link href="/home">
        <ImageWithWrapper
          wrapperCss={navbarCss.logo}
          src={"/images/LTC Investments - Logo.png"}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
