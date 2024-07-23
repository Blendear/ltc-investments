/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { TilesWithSummaryListProps } from "../types";
import { TileWithSummary } from "./TileWithSummary";

const TilesWSLCss = {
  container: css({
    display: "flex",
    gap: variables.gap.md,
    flexWrap: "wrap",
    justifyContent: "center",

    "& > li": {
      width: "100%",
      flex: "0 0 23%",
    },
  }),
};

export const TilesWithSummaryList = ({
  tilesList,
}: TilesWithSummaryListProps) => {
  return (
    <ul css={TilesWSLCss.container}>
      {tilesList.map((realEstate, index) => (
        <li key={index}>
          <TileWithSummary tile={realEstate.tile} />
        </li>
      ))}
    </ul>
  );
};
