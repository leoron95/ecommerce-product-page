import { Header } from "@/components/Header";
import { ProductInfo } from "@/components/ProductInfo";
import { LightBox } from "@/components/LightBox";

import { Kumbh_Sans } from "next/font/google";
import { product } from "@/data";
import { useStateContext } from "@/context/StateContext";
import Head from "next/head";

const KumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function Home() {
  const { showLightBox } = useStateContext();
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/images/favicon-32x32.png" sizes="any" />
        <title>ecommerce product page</title>
      </Head>

      <main
        className={`${KumbhSans.className} text-base font-normal w-full  min-h-screen relative`}
      >
        {showLightBox && <LightBox product={product} />}
        <Header />
        <ProductInfo product={product} />

        <footer className="absolute bottom-0 w-full">
          <div className="flex justify-center">
            <p className="text-sm sm:text-lg">
              Challenge by{" "}
              <a
                className="font-bold text-[#ff7d1a]"
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a className="font-bold text-[#ff7d1a]" href="#">
                Leoron95
              </a>
              .
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
