/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import Link from "next/link";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { useState } from "react";

const typesOfRealELCss = {
  container: css({
    justifySelf: "center",
    width: "max-content",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: variables.gap.sm,
    columnGap: variables.gap.md,
    justifyItems: "center",

    "@media (max-width: 675px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),

  link: (activeType) =>
    css([
      {
        padding: variables.gap.xs,
        width: "100%",
        border: `2px solid rgb(${colors.primaryLight}, 0.25)`,
        borderRadius: variables.borderRadius.sm,
        textAlign: "center",
        color: `rgb(${colors.primaryLight})`,
      },

      activeType && {
        border: `2px solid rgb(${colors.secondaryLight})`,
        fontWeight: "bold",
        color: `rgb(${colors.secondaryLight})`,
      },
    ]),
};

const NavLink = ({ activeType, setActiveType, type }) => {
  const { t } = useTranslation("offers");

  return (
    <Link href={`/offers/${type}`}>
      <a
        css={typesOfRealELCss.link(activeType === type)}
        onClick={() => setActiveType(type)}
      >
        {t.typesOfRealEstates[type]}
      </a>
    </Link>
  );
};

export const TypesOfRealEstatesLinks = ({}) => {
  const [activeType, setActiveType] = useState("apartments");

  return (
    <div css={typesOfRealELCss.container}>
      <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="apartments"
      />
      {/* <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="houses"
      /> */}
      <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="premises"
      />
      {/* <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="plots"
      /> */}
    </div>
  );
};
