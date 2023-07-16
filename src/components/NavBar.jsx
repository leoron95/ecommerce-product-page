import { useStateContext } from "@/context/StateContext";
import { IconCart, IconMenu } from "./Icons";
import { Logo } from "./Logo";
import Image from "next/image";

export const NavBar = ({
  setShowCart,
  showCart,
  navLinks,
  setToggleMenu,
  toggleMenu,
}) => {
  const { totalQuantities } = useStateContext();
  return (
    <nav className="px-6 py-5 xl:px-28 min-[1440px]:px-[165px] lg:py-7 relative">
      <div className="flex items-center justify-between ">
        {/* Mobile nav */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <IconMenu />
          </button>
          <Logo />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center lg:gap-[53px] ">
          <Logo />
          <ul className="flex lg:gap-[30px] items-center ">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  className=" relative hover:before:content-[''] hover:before:h-[5px] hover:before:w-full  hover:before:bg-[#ff7d1a] hover:before:mt-[64px] hover:before:absolute "
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-5 lg:gap-[46px] relative">
          <button className="relative" onClick={() => setShowCart(!showCart)}>
            {totalQuantities !== 0 && (
              <p className="absolute bg-[#ff7d1a] px-2 rounded-full text-xs text-white font-bold -right-2 bottom-4">
                {totalQuantities}
              </p>
            )}
            <div className="text-[#69707D]">
              <IconCart />
            </div>
          </button>
          <div className="relative w-6 h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
            <Image
              className="hover:cursor-pointer  rounded-full  hover:outline hover:outline-[#ff7d1a]"
              src="/images/image-avatar.png"
              alt="User avatar"
              fill
            />
          </div>
        </div>
      </div>

      <div className="hidden w-full mt-8 bg-[#b6bcc8] h-[1px] lg:block"></div>
    </nav>
  );
};
