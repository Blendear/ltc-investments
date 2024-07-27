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

    map: {
      container: css({ width: "100%" }),

      image: css({
        aspectRatio: "16/9",
      }),
    },
  },

  svgWithDividerAndData: css({}),
};

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <article css={contactCss.container}>
      <section css={contactCss.weAreHere.container}>
        <h1>{t.header}</h1>
        <a
          href="https://www.google.com/maps/place/Aleja+Jana+Paw%C5%82a+II+58%2F7,+47-232+K%C4%99dzierzyn-Ko%C5%BAle/@50.3521152,18.2126408,14z/data=!4m5!3m4!1s0x47111116a621f50f:0xd3e91c2074b54a6e!8m2!3d50.3516983!4d18.2348327?hl=pl-PL&entry=ttu"
          css={contactCss.weAreHere.map.container}
        >
          <ImageWithWrapper
            src="/images/contact/map.png"
            alt="A map with a location of the company"
            wrapperCss={contactCss.weAreHere.map.image}
          />
        </a>
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
            {t.phoneLabel}:{" "}
            <span>
              <a href={`tel:+48 604 513 082`}>+48 604 513 082</a>
            </span>
          </p>
        </div>
      </section>

      <section css={contactCss.svgWithDividerAndData}>
        <div>
          <IoMailOutline />
        </div>
        <p>
          {t.emailLabel}:{" "}
          <span>
            <a href={`mailto:l.cibis@gmail.com`}>l.cibis@gmail.com</a>
          </span>
        </p>
      </section>
    </article>
  );
};

export default Contact;
