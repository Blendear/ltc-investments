/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { TileWithSummary } from "@/features/offered-real-estates/components/TileWithSummary";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { offeredRealEstates } from "@/features/offered-real-estates/data/offeredRealEstates";

const offersCss = {
  container: css({}),
};

const Offers = () => {
  const t = useTranslation("offers");

  return (
    <div css={offersCss.container}>
      <TileWithSummary
        tile={{
          variant: "summary-short",
          details: offeredRealEstates.apartments[0],
        }}
      />
    </div>
  );
};

export default Offers;
