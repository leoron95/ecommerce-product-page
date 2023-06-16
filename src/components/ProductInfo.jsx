import React from "react";
import { IconCart } from "./Icons";
import Image from "next/image";
import shoes from "@/images/image-product-1.jpg";

export const ProductInfo = () => {
  return (
    <div className="grid w-full grid-cols-1 lg:gap-32 lg:pt-16 lg:grid-cols-2 lg:px-52">
      <div className="w-fit">
        <Image className="rounded-2xl" src={shoes} width={450} height={450} />
      </div>

      <div className="flex flex-col w-full pt-[60px]">
        <p className="text-sm font-bold uppercase text-[#ff7d1a] tracking-wider">
          sneaker company
        </p>
        <h1 className="text-5xl font-bold">Fall Limited Edition Sneakers</h1>

        <p className="text-base leading-7">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="font-bold">
          <span className="text-3xl">$125.00</span> <span>50%</span>
          <p>$250.00</p>
        </div>

        <div className="flex flex-row w-full">
          <div>
            <button>-</button> 0 <button>+</button>
          </div>

          <button className="flex bg-[#ff7d1a] py-5 px-28  items-center rounded-lg">
            <IconCart />
            <span className="font-bold text-white">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
