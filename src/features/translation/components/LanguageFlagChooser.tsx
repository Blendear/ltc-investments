/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useState } from "react";
import { useRouter } from "next/router";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const languageFlagChooserCss = {
  container: css({
    position: "relative",
    padding: "0 80px 0 0",
    justifySelf: "end",
    width: "max-content",
    display: "grid",

    "@media (orientation: landscape)": {
      padding: " 0 30px 0 0",
    },
  }),

  flagDropdown: css({
    zIndex: "1",
    position: "absolute",
    top: "30px",
    left: "0",
    padding: "10px",
    display: "none",
    borderRadius: "4px",
    backgroundColor: `rgb(${colors.whiteLight})`,
    boxShadow: `0 4px 8px rgb(${colors.primaryLight}, 0.5)`,
    transform: "translate(-85%, 5%)",
  }),

  flagDropdownActive: css({
    display: "grid",
    rowGap: "10px",
  }),

  flagOption: css({
    display: "grid",
    gridTemplateColumns: "max-content 1fr",
    alignItems: "center",
    columnGap: "10px",
  }),

  flagImage: css({
    width: "35px",
    aspectRatio: "1/1",
    border: `1px solid rgb(${colors.primaryLight}, 0.35)`,
    borderRadius: "100px",
    overflow: "hidden",
  }),
};

export const LanguageFlagChooser = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [activeFlag, setActiveFlag] = useState("PL");

  const handleChangeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
    setIsOpen(false);
    setActiveFlag(locale.toUpperCase());
  };

  return (
    <div css={languageFlagChooserCss.container}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <ImageWithWrapper
          src={`/images/navbar/${activeFlag}.png`}
          alt="Active flag"
          wrapperCss={languageFlagChooserCss.flagImage}
        />
      </button>

      <div
        css={[
          languageFlagChooserCss.flagDropdown,
          isOpen && languageFlagChooserCss.flagDropdownActive,
        ]}
      >
        <button
          css={languageFlagChooserCss.flagOption}
          onClick={() => handleChangeLanguage("pl")}
        >
          <ImageWithWrapper
            src="/images/navbar/PL.png"
            alt="Polish flag"
            wrapperCss={languageFlagChooserCss.flagImage}
          />
          Polski
        </button>

        <button
          css={languageFlagChooserCss.flagOption}
          onClick={() => handleChangeLanguage("en")}
        >
          <ImageWithWrapper
            src="/images/navbar/EN.png"
            alt="English flag"
            wrapperCss={languageFlagChooserCss.flagImage}
          />
          English
        </button>

        <button
          css={languageFlagChooserCss.flagOption}
          onClick={() => handleChangeLanguage("de")}
        >
          <ImageWithWrapper
            src="/images/navbar/DE.png"
            alt="German flag"
            wrapperCss={languageFlagChooserCss.flagImage}
          />
          Deutsch
        </button>
      </div>
    </div>
  );
};
