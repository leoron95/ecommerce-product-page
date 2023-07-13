import React from "react";
import { IconClose, IconNext, IconPrevious } from "./Icons";
import { useLightBox } from "@/hooks/useLightBox";
import { useStateContext } from "@/context/StateContext";

export const LightBox = ({ product }) => {
  const { images, thumbnails } = product;
  const { handleLightBox } = useStateContext();
  const slidesLength = images.length;
  const { current, handleImage, nextSlide, prevSlide } =
    useLightBox(slidesLength);

  return (
    <div className="absolute z-10 w-full min-h-screen bg-black bg-opacity-80">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col mx-auto mt-[86px]">
          <div className="flex justify-end mb-7">
            <button
              onClick={handleLightBox}
              className=" text-white hover:text-[#ff7d1a] transition-colors ease-in  "
            >
              <div className="w-5">
                <IconClose />
              </div>
            </button>
          </div>
          <div className="relative w-[550px] mb-10">
            <div className="absolute top-0 bottom-0 flex flex-row items-center justify-between w-full ">
              <button
                onClick={prevSlide}
                className="flex flex-row items-center justify-center -ml-6 bg-white rounded-full w-14 h-14 hover:text-[#ff7d1a] transition-colors ease-in"
              >
                <IconPrevious />
              </button>
              <button
                onClick={nextSlide}
                className="flex flex-row items-center justify-center -mr-6 bg-white rounded-full w-14 h-14 hover:text-[#ff7d1a] transition-colors ease-in"
              >
                <IconNext />
              </button>
            </div>
            <img
              className="w-full mx-auto sm:rounded-2xl"
              src={images[current]}
            />
          </div>

          <div className="items-center justify-between w-full px-12 lg:flex">
            {thumbnails.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg hover:outline hover:outline-2 hover:outline-[#ff7d1a] transition-colors ease-in"
              >
                <img
                  className=" w-[86px] h-full hover:opacity-50 transition-opacity ease-in hover:cursor-pointer"
                  onClick={() => handleImage(index)}
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
