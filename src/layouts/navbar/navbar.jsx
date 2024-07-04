/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import Link from "next/link";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import HamburgerMenu from "@/features/navigation/components/HamburgerMenu";

const navbarCss = {
  container: css({
    position: "fixed",
    top: "0",
    zIndex: "100",
    height: "125px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "max-content 1fr",
    alignItems: "center",
    backgroundColor: `rgb(${colors.primaryLight})`,

    "@media (orientation:landscape)": {
      height: "150px",
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
};

const Navbar = () => {
  return (
    <nav css={navbarCss.container}>
      <Link href="/home">
        <ImageWithWrapper
          wrapperCss={navbarCss.logo}
          src={"/images/brand/ltc-investments-logo.png"}
        />
      </Link>

      {/* <HamburgerMenu
        subpages={["home", "aboutUs", "contact", "investitions", "offers"]}
      /> */}
    </nav>
  );
};

export default Navbar;
