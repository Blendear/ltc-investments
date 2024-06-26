/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import { IoIosPin, IoMdTime } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const contactCss = {
  container: css({}),

  weAreHere: {
    container: css({}),

    header: css({}),

    map: css({}),
  },

  svgWithDividerAndData: css({}),
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <article css={contactCss.container}>
      <section>
        <h1>{t.header}</h1>
        <button>
          <ImageWithWrapper
            src="/images/contact/map.png"
            alt="A map with a location of the company"
            wrapperCss={contactCss.weAreHere.map}
          />
        </button>
      </section>

      <section css={contactCss.svgWithDividerAndData}>
        <div>
          <IoIosPin />
        </div>
        <div>
          <p> {t.addressStreet},</p>
          <p> {t.addressCode},</p>
          <p> {t.addressCity},</p>
          <p> {t.addressCountry}</p>
          <p>
            {t.nipLabel}: <span>7543070445</span>
          </p>
          <p>
            {t.krsLabel}: <span>0001059206</span>
          </p>
          <p>
            {t.regonLabel}: <span>161512181</span>
          </p>
        </div>
      </section>

      <section css={contactCss.svgWithDividerAndData}>
        <div>
          <IoMdTime />
        </div>
        <div>
          <p>08:00 - 16:00</p>
        </div>
      </section>

      <section css={contactCss.svgWithDividerAndData}>
        <div>
          <MdOutlineLocalPhone />
        </div>
        <div>
          <p>
            {t.phoneLabel}: <span>+48 604 513 082</span>
          </p>
        </div>
      </section>

      <section css={contactCss.svgWithDividerAndData}>
        <div>
          <IoMailOutline />
        </div>
        <p>
          {t.emailLabel}: <span>email@gmail.com</span>
        </p>
      </section>
    </article>
  );
};

export default Contact;
