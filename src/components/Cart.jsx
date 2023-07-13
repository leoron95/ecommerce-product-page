import React from "react";
import { IconDelete } from "./Icons";
import { useStateContext } from "@/context/StateContext";

export const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, onRemove } =
    useStateContext();

  return (
    <div className="absolute w-full z-10 px-2 mt-3 lg:w-auto lg:-mt-12 lg:right-[40px] xl:right-[85px]">
      <div className="bg-white rounded-lg shadow-2xl ">
        <div className="flex flex-col py-7 ">
          <h2 className="px-5 mb-5 font-bold">Cart</h2>
          <div className="w-full h-[1px] bg-[#b6bcc8] " />

          {cartItems.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full py-16 lg:px-28">
              <p className="font-bold text-[#b6bcc8]">Your cart is empty.</p>
            </div>
          )}

          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              const { name, price, images, id, discount = 0 } = item;
              const priceWithDiscount =
                discount !== 0 ? (price * discount) / 100 : price;
              return (
                <div
                  key={id}
                  className="flex flex-row items-center justify-between gap-3 px-5 mt-5"
                >
                  <div className="flex flex-row gap-3">
                    <img className="rounded-md w-14" src={images[0]} alt="" />
                    <div className="text-[#68707d]">
                      <p>{name}</p>
                      <div className="flex gap-2">
                        <p>
                          ${priceWithDiscount} x {totalQuantities}
                        </p>
                        <p className="font-bold text-black">${totalPrice}</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item)}>
                    <IconDelete />
                  </button>
                </div>
              );
            })}

          {cartItems.length >= 1 && (
            <div className="w-full px-5">
              <button className="mt-6 bg-[#ff7d1a] text-white font-bold rounded-md w-full py-4 ">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
