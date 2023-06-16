import React from "react";
import { Logo } from "./Logo";
import avatar from "@/images/image-avatar.png";
import { IconCart } from "./Icons";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="lg:px-[165px] lg:py-7 ">
      <div className="flex items-center justify-between">
        <nav className="flex items-center lg:gap-[53px]">
          <Logo />
          <ul className="flex lg:gap-[30px] items-center">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center lg:gap-[46px]">
          <IconCart />
          <Image src={avatar} width={50} height={50} alt="" />
        </div>
      </div>

      <div className="w-full mt-8 border border-gray-400"></div>
    </header>
  );
};
