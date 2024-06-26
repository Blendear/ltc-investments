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

const galleryCss = {
  container: css({ width: "400px", aspectRatio: "16/9" }),

  image: css({
    width: "100%",
    aspectRatio: "16/9",
  }),
};

export const Gallery = ({ imagesPathsList }: GalleryProps) => {
  return (
    <Swiper
      css={galleryCss.container}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {imagesPathsList.map((imagePath, index) => (
        <SwiperSlide key={index}>
          <ImageWithWrapper src={imagePath} wrapperCss={galleryCss.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
