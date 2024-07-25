/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/features/translation/hooks/useTranslation";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import Link from "next/link";
import { BsHouse } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { RiBuilding2Line } from "react-icons/ri";
import { ReactTyped } from "react-typed";

const icons = {
  first: <BsHouse />,
  second: <AiOutlineTeam />,
  third: <RiBuilding2Line />,
  fourth: <HiOutlineBanknotes />,
};

const homeCss = {
  container: css({
    display: "grid",
    gap: variables.gap.lg,
  }),

  titleVisualizer: css({
    display: "grid",
  }),

  backgroundVisual: css({
    gridRow: 1,
    gridColumn: 1,
    width: "100%",
    height: "500px",
  }),

  frontText: css({
    padding: "70px 50px 50px 50px",
    alignSelf: "end",
    zIndex: 1,
    gridRow: 1,
    gridColumn: 1,
    display: "grid",
    justifyItems: "center",
    alignItems: "end",
    gap: variables.gap.md,
    color: `rgb(${colors.whiteLight})`,
    backgroundColor: `rgba(${colors.primaryLight}, 0.9)`,
    backdropFilter: "blur(3px)",
    clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0% 100%)",

    "& > *": {
      width: "100%",
      fontWeight: "normal",
    },

    "& > h2 ": {
      fontSize: `calc(${variables.fontSize.subheading} * 0.8)`,

      "& > span ": {
        color: `rgb(${colors.secondaryLight})`,
      },
    },
  }),

  infoChunks: css({
    display: "flex",
    gap: "2rem 6rem",
    flexWrap: "wrap",
    justifyContent: "center",

    "& > div": {
      width: "100%",
      flex: "0 0 25rem",
      display: "grid",
      gap: variables.gap.md,
      gridAutoRows: "max-content",

      "& > *": {
        textAlign: "center",
      },

      "& > svg": {
        justifySelf: "center",
        fontSize: "100px",
        color: `rgb(${colors.secondaryLight}, 0.85)`,
      },
    },
  }),

  aboutUsButton: css([
    universalCss.button(true),

    {
      justifySelf: "center",
      padding: `${variables.gap.md} ${variables.gap.lg}`,
      width: "max-content",
      display: "grid",
      fontSize: `calc(${variables.fontSize.subheading} * 0.8)`,
      fontWeight: "bold",
      letterSpacing: "0.1rem",
      color: `rgb(${colors.whiteLight})`,
      borderRadius: variables.borderRadius.md,
      backgroundColor: `rgb(${colors.secondaryLight})`,

      "& > p": {
        alignSelf: "center",
        height: "max-content",
        textAlign: "center",
      },
    },
  ]),
};

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <article css={homeCss.container}>
      <div css={homeCss.titleVisualizer}>
        <ImageWithWrapper
          src="/images/home/ltc-title-image.jpg"
          wrapperCss={homeCss.backgroundVisual}
        />
        <div css={homeCss.frontText}>
          <h1>{t.brandName}</h1>
          <h2>
            {t.brandSlogan.start}{" "}
            <ReactTyped
              strings={t.brandSlogan.endings}
              typeSpeed={40}
              backDelay={1500}
              backSpeed={40}
              loop
            />
          </h2>
        </div>
      </div>

      <div css={homeCss.infoChunks}>
        {["first", "second", "third", "fourth"].map((dataVisualizer, index) => {
          return (
            <div key={index}>
              {icons[dataVisualizer]}
              <h3>{t.infoChunks[dataVisualizer].header}</h3>
              <p>{t.infoChunks[dataVisualizer].content}</p>
            </div>
          );
        })}
      </div>

      <Link href="/about-us">
        <a css={homeCss.aboutUsButton}> {t.aboutUsButton}</a>
      </Link>
    </article>
  );
};

export default Home;
