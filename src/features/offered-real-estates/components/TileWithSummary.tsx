/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { TileWithSummaryProps } from "../types";
import { BiArea } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { Gallery } from "./Gallery";
import Link from "next/link";

const tileWSCss = {
  container: (variant) => css({}),

  gallery: css({}),

  imageSingle: css({}),
};

export const TileWithSummary = ({ tile }: TileWithSummaryProps) => {
  return (
    <Link css={tileWSCss.container(tile.variant)} href={`/offers/1`}>
      <section css={tileWSCss.gallery}>
        {
          {
            "summary-short": (
              <ImageWithWrapper src={tile.details.imagePathsList[0]} />
            ),

            "details-long": (
              <Gallery imagesPathsList={tile.details.imagePathsList} />
            ),
          }[tile.variant]
        }
      </section>
      <h2>{tile.details.name}</h2>
      <div>
        <FiMapPin />
        <p>{tile.details.localisation}</p>
      </div>
      <div>
        <div>
          <BiArea />
          <p>
            {tile.details.squareMeters} m<sup>2</sup>
          </p>
        </div>

        <div>
          <GrMoney />
          <p>
            {tile.details.pricePerSquareMeter} zł/m<sup>2</sup>
          </p>
        </div>
      </div>
      <p>{tile.details.squareMeters * tile.details.pricePerSquareMeter} zł</p>
    </Link>
  );
};
