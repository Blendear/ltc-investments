/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { offeredRealEstates } from "@/features/offered-real-estates/data/offeredRealEstates";
import { useRouter } from "next/router";
import { TilesWithSummaryList } from "@/features/offered-real-estates/components/TilesWithSummaryList";
import { useEffect, useState } from "react";
import { TypeOfRealEstate } from "@/features/offered-real-estates/types";
import Link from "next/link";
import { TypesOfRealEstatesLinks } from "@/features/offered-real-estates/components/TypesOfRealEstatesLinks";

const offersCss = {
  container: css({
    width: "100%",
    display: "grid",
    rowGap: variables.gap.md,

    "@media (orientation: landscape)": {
      rowGap: variables.gap.lg,
    },

    "& > h1": {
      textAlign: "center",
    },
  }),
};

const OffersByTypeOfRealEstate = () => {
  const { t } = useTranslation("offers");

  const router = useRouter();

  const [typeOfRealEstate, setTypeOfRealEstate] =
    useState<TypeOfRealEstate>(null);

  useEffect(() => {
    setTypeOfRealEstate(router.query.type as TypeOfRealEstate);
  }, [router.query.type]);

  return (
    <article css={offersCss.container}>
      <h1>{t.header}</h1>

      <TypesOfRealEstatesLinks />

      {typeOfRealEstate && (
        <TilesWithSummaryList
          tilesList={offeredRealEstates[typeOfRealEstate].map((realEstate) => ({
            tile: {
              variant: "summary-short",
              details: realEstate,
            },
          }))}
        />
      )}
    </article>
  );
};

export default OffersByTypeOfRealEstate;
