import { useState } from "react";

export const useLightBox = (slidesLength) => {
  const [current, setCurrent] = useState(0);

  const handleImage = (index) => {
    setCurrent(index);
    console.log(index);
  };

  const nextSlide = () => {
    setCurrent(current === slidesLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slidesLength - 1 : current - 1);
  };
  return { current, handleImage, nextSlide, prevSlide };
};
