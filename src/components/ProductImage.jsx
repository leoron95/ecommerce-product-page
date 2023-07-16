import { IconNext, IconPrevious } from "./Icons";
import { useLightBox } from "@/hooks/useLightBox";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";

export const ProductImage = ({ product }) => {
  const { handleLightBox } = useStateContext();
  const slidesLength = product.images.length;
  const { current, handleImage, nextSlide, prevSlide } =
    useLightBox(slidesLength);
  return (
    <div className="flex flex-col gap-8 mx-auto ">
      <div className="relative">
        <div className="absolute top-0 bottom-0 flex flex-row items-center justify-between w-full px-3 lg:hidden">
          <button
            onClick={prevSlide}
            className="px-3 py-2 bg-white rounded-full"
          >
            <IconPrevious />
          </button>
          <button
            onClick={nextSlide}
            className="px-3 py-2 bg-white rounded-full"
          >
            <IconNext />
          </button>
        </div>
        <div>
          <Image
            onClick={handleLightBox}
            className="w-full max-w-md mx-auto min-[448px]:rounded-2xl hover:cursor-pointer"
            width={448}
            height={448}
            alt="product image"
            src={product.images[current]}
            priority={true}
          />
        </div>
      </div>
      <div className="items-center justify-between hidden max-w-md lg:flex">
        {product.thumbnails.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-lg hover:outline hover:outline-2 hover:outline-[#ff7d1a] transition-colors ease-in"
          >
            <Image
              onClick={() => handleImage(index)}
              className="w-[86px] h-full rounded-lg  hover:opacity-50 transition-opacity ease-in hover:cursor-pointer"
              width={86}
              height={86}
              alt="product image"
              src={img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
