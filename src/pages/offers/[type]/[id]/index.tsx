/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { offeredRealEstates } from "@/features/offered-real-estates/data/offeredRealEstates";
import { useRouter } from "next/router";
import { TileWithSummary } from "@/features/offered-real-estates/components/TileWithSummary";
import {
  OfferedRealEstatesType,
  RealEstateType,
} from "@/features/offered-real-estates/types";
import { useEffect, useState } from "react";
import { ConsultantVisualizer } from "@/features/offered-real-estates/components/ConsultantVisualizer";
import { consultants } from "@/features/offered-real-estates/data/consultants";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import {
  FaDumbbell,
  FaCouch,
  FaWifi,
  FaBroadcastTower,
  FaWind,
  FaTemperatureHigh,
  FaBath,
  FaShower,
  FaTshirt,
  FaWindowMaximize,
  FaTv,
  FaSnowflake,
  FaUtensils,
  FaMugHot,
  FaDoorClosed,
  FaSolarPanel,
} from "react-icons/fa";
import {
  MdOutlineMicrowave,
  MdOutlineSecurity,
  MdOutlineLightbulb,
  MdOutlineDryCleaning,
  MdOutlineKitchen,
  MdOutlineCountertops,
  MdOutlineLocalLaundryService,
  MdElevator,
} from "react-icons/md";
import { GrElevator } from "react-icons/gr";

const amenitiesIcons = {
  gym: <FaDumbbell />,
  elevator: <MdElevator />,
  furniture: <FaCouch />,
  wifi: <FaWifi />,
  "sound-system": <FaBroadcastTower />,
  "home-theater": <FaBroadcastTower />,
  "air-conditioning": <FaWind />,
  "underfloor-heating": <FaTemperatureHigh />,
  bathtub: <FaBath />,
  shower: <FaShower />,
  hanger: <FaTshirt />,
  "window-blinds": <FaWindowMaximize />,
  tv: <FaTv />,
  fridge: <FaSnowflake />,
  dishwasher: <FaUtensils />,
  microwave: <MdOutlineMicrowave />,
  "coffee-machine": <FaMugHot />,
  oven: <FaDoorClosed />,
  cooktop: <MdOutlineCountertops />,
  "washing-machine": <MdOutlineLocalLaundryService />,
  "clothes-dryer": <MdOutlineDryCleaning />,
  "security-camera": <MdOutlineSecurity />,
  "security-camera-exterior": <MdOutlineSecurity />,
  "security-alarm": <MdOutlineSecurity />,
  skylight: <MdOutlineLightbulb />,
  closet: <FaCouch />,
};

const realEstateDCss = {
  container: css({
    maxWidth: "1200px",
    display: "grid",
    gap: variables.gap.md,

    "@media (orientation: landscape)": {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "max-content max-content 1fr",

      "& > *": {
        // height: "max-content",
      },

      "& > div:nth-of-type(1)": {
        gridColumn: "1 / -1",
      },

      "& > section:nth-of-type(1)": {
        gridColumn: "1",
        gridRow: "2/4",
      },
    },

    "& > section": {
      padding: variables.gap.md,
      borderRadius: variables.borderRadius.md,
      border: `2px solid rgb(${colors.primaryLight}, 0.25)`,

      "& > h2": {
        textAlign: "center",
        marginBottom: variables.gap.md,
      },
    },
  }),

  characteristics: css({
    "& > ul": {
      display: "grid",
      gap: variables.gap.sm,

      "& > li": {
        display: "grid",
        gap: variables.gap.sm,
        gridTemplateColumns: "1fr 1fr",
        wordBreak: "break-word",

        "&::after": {
          content: '""',
          gridColumn: "1 / -1",
          height: "2px",
          backgroundColor: `rgb(${colors.primaryLight}, 0.25)`,
        },

        "&:last-child::after": {
          display: "none",
        },
      },
    },
  }),

  consultant: css({
    display: "grid",
    justifyItems: "center",
  }),

  aboutLocationAndAdditionalInfo: css({
    display: "grid",
    gridAutoRows: "max-content",

    "& > p:not(:last-of-type)": {
      marginBottom: variables.gap.md,
    },
  }),

  amenities: css({
    display: "grid",

    "@media (orientation: landscape)": {
      gridColumn: "1/-1",
    },

    "& > ul": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      justifyItems: "start",
      alignItems: "center",
      gap: variables.gap.md,
      listStyle: "none",

      "& > li": {
        display: "grid",
        gridAutoFlow: "column",
        gap: variables.gap.sm,

        "& > svg": {
          fontSize: "30px",
          placeSelf: "center",
          color: `rgb(${colors.secondaryLight})`,
        },
      },
    },
  }),

  crossSectionImage: css({
    gridColumn: "1 / -1",
    aspectRatio: "16/9",

    // "@media (orientation: landscape)": {
    //   aspectRatio: "20/9",
    // },

    "& > span": {
      borderRadius: variables.borderRadius.md,
    },
  }),
};

const RealEstateDetails = () => {
  const { t } = useTranslation("offers");

  const router = useRouter();

  const [realEstate, setRealEstate] = useState<RealEstateType | null>(null);

  useEffect(() => {
    if (router.query.type && router.query.id) {
      setRealEstate(
        offeredRealEstates[router.query.type as string][
          (parseInt(router.query.id as string) - 1).toString()
        ]
      );
    }
  }, [router.query.type, router.query.id]);

  const characteristicsKeys = t.detailedDescriptions.characteristicsKeys;
  const characteristicsValues = t.detailedDescriptions.characteristicsValues;

  // if there is a translation for the given value, the translated version is returned,
  // otherwise the original value is returned (for example when it's a number)
  const translateValue = (key, value) => {
    if (characteristicsValues[key] && characteristicsValues[key][value]) {
      return characteristicsValues[key][value];
    }
    return value;
  };

  return (
    <article css={realEstateDCss.container}>
      {realEstate && (
        <>
          <TileWithSummary
            tile={{
              variant: "details-long",
              details: realEstate,
            }}
          />

          <section css={realEstateDCss.characteristics}>
            <h2>{t.detailedDescriptions.headers.characteristics}</h2>

            {/* Both the key and value of the given characteristic is used as
            a translation label to fetch the language-specific naming, if it's
            not a number nor a offerSymbol */}
            <ul>
              {Object.keys(characteristicsKeys).map((key) => {
                // the actual value, not the translation label
                const chValueData =
                  realEstate.detailedDescriptions.characteristics[key];

                return (
                  chValueData && (
                    <li key={key}>
                      <strong>{characteristicsKeys[key]}</strong>
                      {translateValue(key, chValueData)}
                    </li>
                  )
                );
              })}
            </ul>
          </section>

          <section css={realEstateDCss.consultant}>
            <h2>{t.detailedDescriptions.headers.consultant}</h2>
            <ConsultantVisualizer
              consultant={consultants.find(
                (consultant) => consultant.name === realEstate.consultant
              )}
            />
          </section>

          <section css={realEstateDCss.aboutLocationAndAdditionalInfo}>
            {(() => {
              const detailedDescriptions =
                t.detailedDescriptions
                  .realEstateSpecificDescriptionsByFamilyAndId[
                  realEstate.realEstateFamily
                ][realEstate.id];

              return (
                <>
                  <h2>{t.detailedDescriptions.headers.location}</h2>
                  <p>{detailedDescriptions.location}</p>

                  <h2>{t.detailedDescriptions.headers.about}</h2>
                  <p>{detailedDescriptions.about}</p>

                  <h2>{t.detailedDescriptions.headers.additionalInfo}</h2>
                  <p>{detailedDescriptions.additionalInfo}</p>
                </>
              );
            })()}
          </section>

          <section css={realEstateDCss.amenities}>
            <h2>{t.detailedDescriptions.headers.amenities}</h2>
            {(() => {
              const amenities =
                t.detailedDescriptions
                  .realEstateSpecificDescriptionsByFamilyAndId[
                  realEstate.realEstateFamily
                ][realEstate.id];

              return (
                <ul>
                  {amenities.amenities.map((amenity) => (
                    <li key={amenity.name}>
                      {amenitiesIcons[amenity.icon]}
                      <p>{amenity.name}</p>
                    </li>
                  ))}
                </ul>
              );
            })()}
          </section>

          <ImageWithWrapper
            src={realEstate.crossSectionImagePath}
            wrapperCss={realEstateDCss.crossSectionImage}
          />
        </>
      )}
    </article>
  );
};

export default RealEstateDetails;
