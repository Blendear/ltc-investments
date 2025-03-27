/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import Image from "next/image";
import { ImageWithWrapperProps } from "@/types";
import { variables } from "@/styles/emotion-css/variables";
import "swiper/css/zoom";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const ImageWithWrapper = ({
  src,
  alt,
  wrapperCss,
  thirdPartyClassName,
}: ImageWithWrapperProps) => {
  return (
    <div
      css={[
        wrapperCss,
        {
          background:
            "linear-gradient(90deg, rgb(223, 223, 223) 25%, rgb(243, 243, 243) 50%, rgb(223, 223, 223) 75%)",
          backgroundSize: "200% 100%",
          animation: `${shimmer} 3s infinite linear`,
          borderRadius: `${variables.borderRadius.md}`,
        },
      ]}
      style={
        !wrapperCss
          ? {
              position: "relative",
              width: "4rem",
              height: "4rem",
            }
          : { position: "relative" }
      }
      className={thirdPartyClassName}
    >
      <Image
        src={src}
        alt={alt || "An image based on the given URL image path"}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default ImageWithWrapper;
