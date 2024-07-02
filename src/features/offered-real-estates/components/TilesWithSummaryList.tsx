/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { TilesWithSummaryListProps } from "../types";
import { TileWithSummary } from "./TileWithSummary";

const TilesWSLCss = {
  container: css({}),
};

export const TilesWithSummaryList = ({
  tilesList,
}: TilesWithSummaryListProps) => {
  return (
    <ul>
      {tilesList.map((realEstate, index) => (
        <li key={index}>
          <TileWithSummary tile={realEstate.tile} />{" "}
        </li>
      ))}
    </ul>
  );
};
