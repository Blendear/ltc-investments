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
  container: css({
    width: "100%",
    display: "grid",
    gap: variables.gap.lg,
    justifyItems: "center",
  }),

  header: css({
    textAlign: "center",

    "@media (max-width: 580px)": {
      width: "25rem",
    },
  }),

  map: css({
    width: "clamp(50px, 80vw, 600px)",
    aspectRatio: "16/9",

    "&:hover": css({
      filter: "drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) saturate(0.8)",
      transition: "filter 0.5s",
    }),

    "& > span": {
      borderRadius: variables.borderRadius.md,
    },
  }),

  contantInfo: {
    display: "grid",
    gap: variables.gap.md,
    justifyItems: "center",

    "@media (min-width: 650px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "& > section": {
      width: "26rem",
      display: "grid",
      gridTemplateColumns: "max-content 1fr",
      gap: variables.gap.md,
      alignItems: "center",

      "& svg": {
        color: `rgb(${colors.secondaryLight})`,
      },

      "& > div:nth-of-type(1)": {
        ...universalCss.wrapperWithCenteredSvg("4rem", "80%"),
      },

      "& > div:nth-of-type(2)": {
        display: "grid",
        gap: variables.gap.sm,
      },

      "& a": {
        "&:hover": {
          opacity: 0.7,
        },
      },
    },

    "& > section:nth-of-type(1)": {
      // gridRow: "1 / 4",
    },
  },
};

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <article css={contactCss.container}>
      <h1 css={contactCss.header}>{t.header}</h1>
      <section>
        <a href="https://www.google.com/maps/place/Aleja+Jana+Paw%C5%82a+II+58%2F7,+47-232+K%C4%99dzierzyn-Ko%C5%BAle/@50.3521152,18.2126408,14z/data=!4m5!3m4!1s0x47111116a621f50f:0xd3e91c2074b54a6e!8m2!3d50.3516983!4d18.2348327?hl=pl-PL&entry=ttu">
          <ImageWithWrapper
            src="/images/contact/map.png"
            alt="A map with a location of the company"
            wrapperCss={contactCss.map}
          />
        </a>
      </section>

      <section css={contactCss.contantInfo}>
        <section>
          <div>
            <IoIosPin />
          </div>
          <div>
            <p>{t.addressStreet}</p>
            <p>
              {t.addressCode}, {t.addressCity}
            </p>
          </div>
        </section>

        <section>
          <div>
            <MdOutlineLocalPhone />
          </div>
          <div>
            <a href={`tel:+48 604 513 082`}>(+48) 604 513 082</a>
          </div>
        </section>
        <section>
          <div>
            <IoMdTime />
          </div>
          <div>
            <p>08:00 - 16:00</p>
          </div>
        </section>

        <section>
          <div>
            <IoMailOutline />
          </div>
          <a href={`mailto:l.cibis@gmail.com`}>l.cibis@gmail.com</a>
        </section>
      </section>
    </article>
  );
};

export default Contact;
