import { IconNext, IconPrevious } from "./Icons";
import { useLightBox } from "@/hooks/useLightBox";
import { useStateContext } from "@/context/StateContext";

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
        <img
          onClick={handleLightBox}
          className="w-full max-w-md mx-auto sm:rounded-2xl hover:cursor-pointer"
          src={product.images[current]}
        />
      </div>
      <div className="items-center justify-between hidden max-w-md lg:flex">
        {product.thumbnails.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-lg hover:outline hover:outline-2 hover:outline-[#ff7d1a] transition-colors ease-in"
          >
            <img
              className="w-[86px] h-full rounded-lg  hover:opacity-50 transition-opacity ease-in hover:cursor-pointer"
              onClick={() => handleImage(index)}
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
