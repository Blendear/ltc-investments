/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { ConsultantVisualizerProps } from "../types";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const consultantVCss = {
  container: css({}),

  image: css({
    width: "150px",
    height: "150px",
  }),

  details: css({}),
};

export const ConsultantVisualizer = ({
  consultant,
}: ConsultantVisualizerProps) => {
  return (
    <div css={consultantVCss.container}>
      <ImageWithWrapper
        src={consultant.imagePath}
        wrapperCss={consultantVCss.image}
      />

      <div css={consultantVCss.details}>
        <p>
          {capitalizeFirstLetter(consultant.name) +
            " " +
            capitalizeFirstLetter(consultant.surname)}
        </p>

        <a href={`tel:${consultant.phoneNumber}`}>{consultant.phoneNumber}</a>

        <a href={`mailto:${consultant.email}`}>{consultant.email}</a>
      </div>
    </div>
  );
};
