/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { TileWithSummaryProps } from "../types";
import { BiArea } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { Gallery } from "./Gallery";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiCoinLine } from "react-icons/ri";
import { MdOutlineMeetingRoom } from "react-icons/md";

const tileWSCss = {
  container: (variant) =>
    css([
      {
        "& > div": {
          borderRadius: variables.borderRadius.md,
          border: `2px solid rgb(${colors.primaryLight}, 0.25)`,
        },
      },

      variant === "summary-short" && {},
    ]),

  imageSingle: css({
    width: "350px",
    aspectRatio: "13/9",

    "& > span": {
      borderRadius: `${variables.borderRadius.md} ${variables.borderRadius.md} 0 0`,
    },

    "@media (min-width: 1540px)": {
      width: "100%",
    },

    "@media (max-width: 410px)": {
      width: "320px",
    },

    "@media (max-width: 375px)": {
      width: "300px",
    },

    "@media (max-width: 325px)": {
      width: "280px",
    },
  }),

  details: css({
    padding: variables.gap.md,
    display: "grid",
    rowGap: variables.gap.md,

    "& svg": {
      fontSize: "2.5rem",
      color: `rgb(${colors.secondaryLight})`,
    },

    "& p, svg": {
      alignSelf: "center",
    },
  }),

  location: css({
    display: "flex",
    gap: variables.gap.xs,
  }),

  roomsAreaAndPrice: css({
    display: "flex",
    gap: variables.gap.md,
    flexWrap: "wrap",
    justifyContent: "start",

    "& > div": {
      display: "flex",
      gap: variables.gap.xs,
    },
  }),

  sum: css({
    padding: variables.gap.sm,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "0.1rem",
    color: `rgb(${colors.whiteLight})`,
    borderRadius: `0 0 ${variables.borderRadius.md} ${variables.borderRadius.md}`,
    backgroundColor: `rgb(${colors.secondaryLight})`,
  }),
};

export const TileWithSummary = ({ tile }: TileWithSummaryProps) => {
  const router = useRouter();

  const conditionalContent = (
    <div>
      <section>
        {
          {
            "summary-short": (
              <ImageWithWrapper
                src={tile.details.imagePathsList[0]}
                wrapperCss={tileWSCss.imageSingle}
              />
            ),

            "details-long": (
              <Gallery imagesPathsList={tile.details.imagePathsList} />
            ),
          }[tile.variant]
        }
      </section>

      <section css={tileWSCss.details}>
        <h2>{tile.details.name}</h2>

        <div css={tileWSCss.location}>
          <FiMapPin />
          <p>{tile.details.detailedDescriptions.location}</p>
        </div>

        <div css={tileWSCss.roomsAreaAndPrice}>
          <div>
            <MdOutlineMeetingRoom />
            <p>{tile.details.detailedDescriptions.characteristics.roomCount}</p>
          </div>

          <div>
            <BiArea />
            <p>
              {tile.details.detailedDescriptions.characteristics.area} m
              <sup>2</sup>
            </p>
          </div>

          <div>
            <RiCoinLine />
            <p>
              {
                tile.details.detailedDescriptions.characteristics
                  .pricePerSquareMeter
              }
              zł/m<sup>2</sup>
            </p>
          </div>
        </div>
      </section>

      <section css={tileWSCss.sum}>
        <p>
          {(
            tile.details.detailedDescriptions.characteristics.area *
            tile.details.detailedDescriptions.characteristics
              .pricePerSquareMeter
          ).toLocaleString("pl-PL")}
          zł
        </p>
      </section>
    </div>
  );

  return {
    "summary-short": (
      <Link href={`${router.query.type}/${tile.details.id}`}>
        <a css={tileWSCss.container(tile.variant)}>{conditionalContent}</a>
      </Link>
    ),

    "details-long": (
      <div css={tileWSCss.container(tile.variant)}>{conditionalContent}</div>
    ),
  }[tile.variant];
};
