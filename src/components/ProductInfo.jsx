import { ProductDetails } from "./ProductDetails";
import { ProductImage } from "./ProductImage";

export const ProductInfo = ({ product }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-20 pt-1 lg:px-10 lg:pt-16  xl:px-36  min-[1440px]:px-52 min-[1440px]:gap-32 ">
        <ProductImage product={product} />

        <ProductDetails product={product} />
      </div>
    </div>
  );
};
