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

const realEstateDCss = {
  container: css({}),
};

const RealEstateDetails = () => {
  const { t } = useTranslation("offers");

  const router = useRouter();

  const [realEstate, setRealEstate] = useState<RealEstateType | null>(null);

  useEffect(() => {
    if (router.query.type && router.query.id) {
      setRealEstate(
        offeredRealEstates[router.query.type as string][router.query.id]
      );
    }
  }, [router.query.type, router.query.id]);

  const characteristicsKeys = t.detailedDescriptions.characteristicsKeys;
  const characteristicsValues = t.detailedDescriptions.characteristicsValues;

  const translateValue = (key, value) => {
    if (characteristicsValues[key] && characteristicsValues[key][value]) {
      return characteristicsValues[key][value];
    }
    return value;
  };

  return (
    <article css={realEstateDCss.container}>
      {realEstate && (
        <div>
          <TileWithSummary
            tile={{
              variant: "details-long",
              details: realEstate,
            }}
          />

          <section>
            <h2>{t.detailedDescriptions.headers.characteristics}</h2>

            {/* Both the key and value of the given characteristic is used as
            a translation label to fetch the language-specific naming, if it's
            not a number nor a offerSymbol */}
            <ul>
              {Object.keys(characteristicsKeys).map((key) => {
                return (
                  realEstate.detailedDescriptions.characteristics[key] && (
                    <li key={key}>
                      <strong>{characteristicsKeys[key]}</strong>
                      {translateValue(
                        key,
                        realEstate.detailedDescriptions.characteristics[key]
                      )}
                    </li>
                  )
                );
              })}
            </ul>
          </section>

          <section>
            <h2>{t.detailedDescriptions.headers.about}</h2>

            <h2>{t.detailedDescriptions.headers.location}</h2>

            <h2>{t.detailedDescriptions.headers.additionalInfo}</h2>
          </section>
        </div>
      )}
    </article>
  );
};

export default RealEstateDetails;
