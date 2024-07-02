/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import Link from "next/link";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { useState } from "react";

const typesOfRealELCss = {
  container: css({}),

  link: (activeType) =>
    css({
      color: activeType
        ? `rgb(${colors.secondaryLight})`
        : `rgb(${colors.primaryLight})`,
    }),
};

const NavLink = ({ activeType, setActiveType, type }) => {
  const { t } = useTranslation("offers");

  return (
    <Link href={`/offers/${type}`}>
      <div
        css={typesOfRealELCss.link(activeType === type)}
        onClick={() => setActiveType(type)}
      >
        {t.typesOfRealEstates[type]}
      </div>
    </Link>
  );
};

export const TypesOfRealEstatesLinks = ({}) => {
  const [activeType, setActiveType] = useState("apartments");

  console.log(activeType);
  return (
    <div>
      <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="apartments"
      />
      <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="houses"
      />
      <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="premises"
      />
      <NavLink
        activeType={activeType}
        setActiveType={setActiveType}
        type="plots"
      />
    </div>
  );
};
