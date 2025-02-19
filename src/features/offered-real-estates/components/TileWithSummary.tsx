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
import { useTranslation } from "@/features/translation/hooks/useTranslation";

const tileWSCss = {
  container: (variant) =>
    css([
      {
        display: "grid",

        "& > div": {
          justifySelf: "center",
          borderRadius: variables.borderRadius.md,
          border: `2px solid rgb(${colors.primaryLight}, 0.25)`,
        },
      },

      variant === "details-long" &&
        css({
          "& > div": {
            width: "80vw",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "1fr max-content",
            border: "none",

            "& > section:nth-of-type(1)": {
              gridColumn: "1 / -1",
            },

            "@media (orientation: portrait)": {
              width: "100%",

              "& > section:nth-of-type(2)": {
                gridColumn: "1 / -1",
              },

              "& > section:nth-of-type(3)": {
                justifySelf: "center",
                width: "max-content",
              },
            },
          },
        }),
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

  details: (variant) =>
    css([
      {
        padding: variables.gap.md,
        maxWidth: "1200px",
        display: "grid",
        rowGap: variables.gap.md,

        "@media (orientation: portrait)": {
          "& > h2": {
            textAlign: "center",
          },
        },

        "& svg": {
          fontSize: "2.5rem",
          color: `rgb(${colors.secondaryLight})`,
        },

        "& p, svg": {
          alignSelf: "center",
        },
      },

      variant === "details-long" && {
        padding: `${variables.gap.md} 0`,
      },
    ]),

  location: (variant) =>
    css([
      {
        display: "flex",
        gap: variables.gap.xs,
      },

      variant === "details-long" && {
        "@media (orientation: portrait)": {
          justifySelf: "center",
        },
      },
    ]),

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

  sum: (variant) =>
    css([
      {
        padding: variables.gap.sm,
        // justifySelf: "center",
        display: "grid",
        fontWeight: "bold",
        letterSpacing: "0.1rem",
        color: `rgb(${colors.whiteLight})`,
        borderRadius: `0 0 ${variables.borderRadius.md} ${variables.borderRadius.md}`,
        backgroundColor: `rgb(${colors.secondaryLight})`,
        cursor: "pointer",
        textAlign: "center",

        "&:hover": {
          filter: "saturate(1.25)",
        },
      },

      variant === "details-long" && {
        alignSelf: "center",
        width: "max-content",
        height: "max-content",
        padding: `${variables.gap.sm} ${variables.gap.lg}`,
        borderRadius: variables.borderRadius.md,

        "@media (orientation: landscape)": {
          margin: `${variables.gap.md} 0`,
          fontSize: `calc(${variables.fontSize.regular} * 1.3)`,
        },
      },
    ]),
};

export const TileWithSummary = ({ tile }: TileWithSummaryProps) => {
  const router = useRouter();
  const { t } = useTranslation("offers");

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

      <section css={tileWSCss.details(tile.variant)}>
        <h2>{t.defaultOffersCardsName.apartments}</h2>

        <div css={tileWSCss.location(tile.variant)}>
          <FiMapPin />
          <p>{tile.details.detailedDescriptions.location}</p>
        </div>

        {tile.variant === "summary-short" && (
          <>
            <div css={tileWSCss.roomsAreaAndPrice}>
              <div>
                <MdOutlineMeetingRoom />
                <p>
                  {tile.details.detailedDescriptions.characteristics.roomCount}
                </p>
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
          </>
        )}
      </section>

      <a css={tileWSCss.sum(tile.variant)} href={`tel:+48 604 513 082`}>
        {(
          tile.details.detailedDescriptions.characteristics.area *
          tile.details.detailedDescriptions.characteristics.pricePerSquareMeter
        ).toLocaleString("pl-PL")}
        {` zł`}
      </a>
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
