/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/features/translation/hooks/useTranslation";

const contactCss = {
  container: css({}),
};

const Contact = () => {
  const { t } = useTranslation();

  return <div css={contactCss.container}>AComponent</div>;
};

export default Contact;
