import { useStateContext } from "@/context/StateContext";
import { IconCart, IconMinus, IconPlus } from "./Icons";

export const ProductDetails = ({ product }) => {
  const { company, name, description, price, discount } = product;
  const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <div className="flex flex-col mx-auto pt-5 px-6 lg:px-0 pb-20 lg:pt-[60px]">
      <p className=" text-sm font-bold uppercase text-[#ff7d1a] tracking-wide lg:tracking-wider">
        {company}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight lg:tracking-[-2px] lg:text-5xl lg:mt-5">
        {name}
      </h1>

      <p className="mt-3 text-base text-left xl:mt-9 text-[#68707d] tracking-tight xl:tracking-normal">
        {description}
      </p>

      <div className="flex flex-row justify-between space-y-2 font-bold xl:flex-col mt-7">
        <div className="flex items-center">
          <span className="text-3xl ">
            ${((price * discount) / 100).toFixed(2)}
          </span>
          <span className="ml-4 font-bold text-[#ff7d1a] bg-[#ffede0] px-2 py-0.5 rounded-md">
            {discount}%
          </span>
        </div>
        <p className="line-through text-[#b6bcc8]">${price.toFixed(2)}</p>
      </div>

      <div className="flex flex-col gap-4 mt-6 lg:flex-row xl:mt-8 lg:px-0">
        <div className="flex items-center justify-between bg-[#f7f8fd] rounded-xl">
          <button
            onClick={decQty}
            className="px-4 transition-opacity ease-in py-7 hover:opacity-60"
          >
            <IconMinus />
          </button>
          <span className="font-bold px-7 tabular-nums">{qty}</span>
          <button
            onClick={incQty}
            className="px-4 transition-opacity ease-in py-7 hover:opacity-60"
          >
            <IconPlus />
          </button>
        </div>

        <button
          onClick={() => onAdd(product, qty)}
          className="flex hover:opacity-60 bg-[#ff7d1a] transition-opacity ease-in w-full  py-4   gap-2  items-center rounded-xl justify-center "
        >
          <div className="text-white">
            <IconCart />
          </div>
          <span className="font-bold text-white">Add to cart</span>
        </button>
      </div>
    </div>
  );
};
