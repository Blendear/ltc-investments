/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { investmentsAndAboutUsCss } from "@/pages/about-us";

const Investments = () => {
  const { t } = useTranslation("investments");

  return (
    <article css={investmentsAndAboutUsCss.container}>
      <h1 css={investmentsAndAboutUsCss.pageIdentifier}>{t.header}</h1>

      <ImageWithWrapper
        wrapperCss={investmentsAndAboutUsCss.imageForDescription("left")}
        src={"/images/investments/Description_A.jpg"}
      />
      <section css={investmentsAndAboutUsCss.description("right")}>
        <h2>{t.sectionOne.header}</h2>
        <p>{t.sectionOne.paragraphOne}</p>
        <p>{t.sectionOne.paragraphTwo}</p>
      </section>

      <ImageWithWrapper
        wrapperCss={investmentsAndAboutUsCss.imageForDescription("right")}
        src={"/images/investments/Description_B.jpg"}
      />

      <section css={investmentsAndAboutUsCss.description("left")}>
        <h2>{t.sectionTwo.header}</h2>
        <p>{t.sectionTwo.paragraphOne}</p>
        <p>{t.sectionTwo.paragraphTwo}</p>
      </section>
    </article>
  );
};

export default Investments;
