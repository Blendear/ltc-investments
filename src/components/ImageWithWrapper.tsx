/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import Image from "next/image";
import { ImageWithWrapperProps } from "@/types";

const shimmer = keyframes`
  0% { background: linear-gradient(90deg, rgb(50, 50, 50), rgb(100, 100, 100)); }
  50% { background: linear-gradient(90deg, rgb(70, 70, 70), rgb(150, 150, 150)); }
  100% { background: linear-gradient(90deg, rgb(50, 50, 50), rgb(100, 100, 100)); }
`;

const ImageWithWrapper = ({ src, alt, wrapperCss }: ImageWithWrapperProps) => {
  return (
    <div
      css={[
        wrapperCss,
        {
          animation: `${shimmer} 1.5s infinite linear`,
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
