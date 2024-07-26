/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { ConsultantVisualizerProps } from "../types";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { IoMailOpenOutline, IoPhonePortraitOutline } from "react-icons/io5";

const consultantVCss = {
  container: css({
    width: "max-content",
    display: "grid",
    gap: variables.gap.md,
    justifyItems: "center",

    "@media (min-width: 750px)": {
      display: "grid",
      gridAutoFlow: "column",
    },
  }),

  image: css({
    width: "150px",
    aspectRatio: "1/1",

    "& > span": {
      borderRadius: variables.borderRadius.md,
      border: `2px solid rgb(${colors.primaryLight}, 0.25)`,
    },
  }),

  details: css({
    display: "grid",
    gap: variables.gap.sm,
    gridAutoRows: "max-content",
    justifyItems: "center",

    "@media (min-width: 750px)": {
      justifyItems: "start",
    },

    "& > p": {
      fontWeight: "bold",
      fontSize: `calc(${variables.fontSize.regular} * 1.25)`,
    },

    "& > a": {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "max-content",
      gap: variables.gap.sm,

      "& > svg": {
        color: `rgb(${colors.secondaryLight})`,
        fontSize: variables.fontSize.subheading,
      },

      "& > span": {
        alignSelf: "center",

        "&:hover": {
          filter: "opacity(0.75)",
        },
      },
    },
  }),
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

        <a href={`tel:${consultant.phoneNumber}`}>
          <IoPhonePortraitOutline />
          <span>{consultant.phoneNumber}</span>
        </a>

        <a href={`mailto:${consultant.email}`}>
          <IoMailOpenOutline />
          <span>{consultant.email}</span>
        </a>
      </div>
    </div>
  );
};
