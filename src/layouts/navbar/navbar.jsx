/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import Link from "next/link";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const navbarCss = {
  container: css({
    position: "fixed",
    top: "0",
    zIndex: "100",
    height: "max-content",
    width: "100%",
    display: "grid",
    alignItems: "center",
    backgroundColor: `rgb(${colors.primaryLight})`,
  }),

  logo: css({
    width: "125px",
    height: "125px",

    "@media (orientation:landscape)": {
      width: "150px",
      height: "150px",
    },
  }),
};

const Navbar = () => {
  return (
    <nav css={navbarCss.container}>
      <Link href="/home">
        <ImageWithWrapper
          wrapperCss={navbarCss.logo}
          src={"/images/ltc-logo.png"}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
