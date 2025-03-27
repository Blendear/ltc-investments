/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { GalleryProps } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useState } from "react";
import { FaExpand, FaTimes } from "react-icons/fa";
import { parse } from "path";

const galleryCss = {
  container: (isFullscreen: boolean) =>
    css({
      position: isFullscreen ? "fixed" : "relative",
      top: isFullscreen ? 0 : "unset",
      left: isFullscreen ? 0 : "unset",
      width: isFullscreen ? "100dvw" : "100%",
      height: isFullscreen ? "100dvh" : "100%",
      backgroundColor: isFullscreen ? "rgba(0,0,0,0.9)" : "transparent",
      zIndex: isFullscreen ? 1000 : "unset",
      color: "white",
      borderRadius: isFullscreen ? 0 : variables.borderRadius.md,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // transition: "all 0.3s ease-in-out",

      "& .swiper-wrapper": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      "@media (orientation: landscape)": {
        fontSize: variables.fontSize.subheading,
      },

      "& .swiper-button-prev, .swiper-button-next, .swiper-pagination": {
        color: "white",
        filter: `drop-shadow(0 0 3px rgb(0,0,0,0.8))`,

        ":after": {
          fontSize: variables.fontSize.subheading,

          "@media (min-width: 500px)": {
            fontSize: variables.fontSize.heading,
          },
        },
      },
    }),

  image: css({
    justifySelf: "center",
    aspectRatio: "16/9",
    maxWidth: "1200px",
    width: "100%",
    height: "100%",

    "@media (orientation: landscape)": {
      // maxWidth: "unset",
    },
  }),

  fullscreenButton: (variant: "open" | "close") =>
    css([
      {
        zIndex: 999,
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: `rgba(${colors.whiteLight}, 1)`,
        borderRadius: "50%",

        "@media (min-width: 500px)": {
          bottom: 15,
          right: 15,
          width: 40,
          height: 40,
        },

        "@media (orientation: landscape)": {
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
        },

        "& svg": {
          color: "black",

          "@media (min-width: 500px)": {
            fontSize: `${parseInt(variables.fontSize.regular) * 2}rem`,
          },

          "@media (orientation: landscape)": {
            fontSize: `${parseInt(variables.fontSize.regular) * 3}rem`,
          },
        },
      },

      variant === "close" && {
        zIndex: 1000,
        bottom: "unset",
        top: 20,
        right: 20,
      },
    ]),
};

export const Gallery = ({ imagesPathsList }: GalleryProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div css={galleryCss.container(isFullscreen)}>
      {!isFullscreen && (
        <div
          css={galleryCss.fullscreenButton("open")}
          onClick={() => setIsFullscreen(true)}
        >
          <FaExpand />
        </div>
      )}

      <Swiper
        css={galleryCss.container(isFullscreen)}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
      >
        {imagesPathsList.map((imagePath, index) => (
          <SwiperSlide key={index}>
            <ImageWithWrapper src={imagePath} wrapperCss={galleryCss.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isFullscreen && (
        <div
          css={galleryCss.fullscreenButton("close")}
          onClick={() => setIsFullscreen(false)}
        >
          <FaTimes />
        </div>
      )}
    </div>
  );
};
