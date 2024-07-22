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

const icons = {
  first: <BsHouse />,
  second: <AiOutlineTeam />,
  third: <RiBuilding2Line />,
  fourth: <HiOutlineBanknotes />,
};

const homeCss = {
  container: css({}),

  titleVisualizer: {
    container: css({}),

    backgroundVisual: css({ width: "100%", height: "500px" }),
  },

  infoChunks: css({
    "& > div > svg": {
      fontSize: "100px",
      color: `rgb(${colors.secondaryLight}, 0.85)`,
    },
  }),

  aboutUsButton: css({}),
};

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <article css={homeCss.container}>
      <div css={homeCss.titleVisualizer.container}>
        <ImageWithWrapper
          src="/images/home/ltc-title-image.jpg"
          wrapperCss={homeCss.titleVisualizer.backgroundVisual}
        />
        <h1>{t.brandName}</h1>
        <h2>{t.brandSlogan}</h2>
      </div>

      <div css={homeCss.infoChunks}>
        {["first", "second", "third", "fourth"].map((dataVisualizer, index) => {
          return (
            <div key={index}>
              {icons[dataVisualizer]}
              <p>{t.infoChunks[dataVisualizer].header}</p>
              <p>{t.infoChunks[dataVisualizer].content}</p>
            </div>
          );
        })}
      </div>

      <Link css={homeCss.aboutUsButton} href="/about-us">
        {t.aboutUsButton}
      </Link>
    </article>
  );
};

export default Home;
