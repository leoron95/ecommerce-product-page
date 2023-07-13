import { Header } from "@/components/Header";
import { ProductInfo } from "@/components/ProductInfo";
import { LightBox } from "@/components/LightBox";

import { Kumbh_Sans } from "next/font/google";
import { product } from "@/data";
import { useStateContext } from "@/context/StateContext";

const KumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function Home() {
  const { showLightBox } = useStateContext();
  return (
    <main
      className={`${KumbhSans.className} text-base font-normal w-full  min-h-screen relative`}
    >
      {showLightBox && <LightBox product={product} />}
      <Header />
      <ProductInfo product={product} />
    </main>
  );
}
