import { Header } from "@/components/Header";
import { ProductInfo } from "@/components/ProductInfo";
import { Kumbh_Sans } from "next/font/google";

const KumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function Home() {
  return (
    <main
      className={`${KumbhSans.className} text-base font-normal w-full lg:max-w-[1440px] mx-auto min-h-screen`}
    >
      <Header />

      <ProductInfo />
    </main>
  );
}
