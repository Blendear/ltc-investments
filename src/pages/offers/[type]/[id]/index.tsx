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

const realEstateDCss = {
  container: css({
    display: "grid",
    gap: variables.gap.md,

    " & > section": {
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
        gap: variables.gap.xs,
        gridTemplateColumns: "1fr 1fr",

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

  consultant: css({}),

  aboutLocationAndAdditionalInfo: css({}),
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
            <h2>{t.detailedDescriptions.headers.about}</h2>
            <p>{realEstate.detailedDescriptions.about}</p>

            <h2>{t.detailedDescriptions.headers.location}</h2>
            <p>{realEstate.detailedDescriptions.location}</p>

            {realEstate.detailedDescriptions.additionalInfo && (
              <>
                <h2>{t.detailedDescriptions.headers.additionalInfo}</h2>
                <p>{realEstate.detailedDescriptions.additionalInfo}</p>
              </>
            )}
          </section>
        </>
      )}
    </article>
  );
};

export default RealEstateDetails;
