import { useState, useEffect } from "react";

export const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  const handleOrientationChange = () => {
    setIsLandscape(window.innerWidth > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleOrientationChange);
    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  return isLandscape;
};
