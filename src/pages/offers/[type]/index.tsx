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

const offersCss = {
  container: css({}),
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
