/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { offeredRealEstates } from "@/features/offered-real-estates/data/offeredRealEstates";
import { useRouter } from "next/router";

const realEstateDCss = {
  container: css({}),
};

const RealEstateDetails = () => {
  const { t } = useTranslation("offers");

  const router = useRouter();

  console.log(router.query);

  return (
    <div css={realEstateDCss.container}>
      {router.query.type} {router.query.id}
    </div>
  );
};

export default RealEstateDetails;
