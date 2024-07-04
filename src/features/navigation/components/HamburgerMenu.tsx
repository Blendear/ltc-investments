/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { HamburgerMenuProps } from "../types";
import dynamic from "next/dynamic";
import { useOrientation } from "../hooks/useOrientation";
import { useRouter } from "next/router";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const hamburgerMenuCss = {
  container: css({
    display: "grid",
  }),

  hamburgerIcon: css({
    zIndex: "101",
    position: "absolute",
    alignSelf: "self",
    right: "30px",
    display: "grid",
    width: "26px",
  }),

  bar: css({
    margin: "4px 0",
    width: "26px",
    height: "3px",
    backgroundColor: `rgb(${colors.secondaryLight})`,
    transition: "0.4s",
  }),

  barOpen: css({
    transform: "translate(0px, 11px) rotate(-45deg) ",
  }),

  barOpenMiddle: css({
    opacity: 0,
  }),

  barOpenBottom: css({
    transform: "translate(0px, -11px) rotate(45deg) ",
  }),

  menu: css({
    position: "absolute",
    justifySelf: "end",
    top: "0px",
    padding: "125px 4rem",
    width: "100%",
    height: "100vh",
    display: "none",
    animation: `${slideIn} 0.5s forwards`,
    backgroundColor: `rgb(${colors.whiteLight})`,

    "@media (min-width: 380px)": {
      justifyItems: "center",
    },

    "@media (orientation:landscape)": {
      position: "relative",
      padding: "0 4rem 0 0",
      width: "max-content",
      height: "auto",
      gridAutoFlow: "column",
      gridAutoColumns: "max-content",
      columnGap: "2rem",
      backgroundColor: "transparent",
      animation: "none",
    },
  }),

  menuOpen: css({
    display: "grid",
    gridAutoRows: "max-content",
    rowGap: "2rem",
  }),

  linkItem: (isActive) =>
    css(
      {
        cursor: "pointer",

        "& > a": {
          color: `rgb(${colors.primaryLight})`,
          textDecoration: "none",
          fontSize: `${parseFloat(variables.fontSize.regular) * 1.35}rem`,

          "&:hover, :active": {
            color: `rgb(${colors.secondaryLight})`,
          },

          "@media (orientation:landscape)": {
            color: `rgb(${colors.secondaryLight})`,

            "&:hover, :active": {
              color: `rgb(${colors.whiteLight})`,
            },
          },
        },
      },

      isActive && {
        "& > a": {
          textDecoration: "underline",
          textDecorationColor: `rgb(${colors.secondaryLight})`,
          textDecorationSkip: "spaces",
          textUnderlineOffset: "0.8rem",

          "@media (orientation:landscape)": {
            color: `rgb(${colors.whiteLight})`,
          },
        },
      }
    ),
};

const HamburgerMenu = ({ subpages }: HamburgerMenuProps) => {
  const { t } = useTranslation("menu");

  const showDesktopVariant = useOrientation();

  const router = useRouter();

  const [subpageName, setSubpageName] = useState<string>("");

  useEffect(() => {
    const newSubpageName = router.pathname.split("/")[1];
    setSubpageName(newSubpageName);
  }, [router]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!showDesktopVariant && (
        <div css={hamburgerMenuCss.hamburgerIcon} onClick={toggleMenu}>
          <div
            css={[hamburgerMenuCss.bar, isOpen && hamburgerMenuCss.barOpen]}
          ></div>
          <div
            css={[
              hamburgerMenuCss.bar,
              isOpen && hamburgerMenuCss.barOpenMiddle,
            ]}
          ></div>
          <div
            css={[
              hamburgerMenuCss.bar,
              isOpen && hamburgerMenuCss.barOpenBottom,
            ]}
          ></div>
        </div>
      )}

      <ul
        css={[
          hamburgerMenuCss.menu,
          (showDesktopVariant || isOpen) && hamburgerMenuCss.menuOpen,
        ]}
      >
        {subpages.map((subpage) => {
          // Remake strings like "aboustUs" into "about-us", so that they can follow the translation
          // label convention & be used as hrefs
          let hrefString = subpage
            .split(/(?=[A-Z])/)
            .join("-")
            .toLowerCase();

          return (
            <li
              key={subpage}
              css={hamburgerMenuCss.linkItem(subpageName === hrefString)}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link
                href={`/${
                  hrefString === "offers" ? "offers/apartments" : hrefString
                }`}
              >
                <a>{t[subpage]}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default dynamic(() => Promise.resolve(HamburgerMenu), {
  ssr: false,
});
