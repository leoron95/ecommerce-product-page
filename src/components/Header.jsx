import { useState } from "react";
import { Cart } from "./Cart";
import { MobileMenu } from "./MobileMenu";
import { NavBar } from "./NavBar";

const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

export const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="relative max-w-[1440px] mx-auto">
      {toggleMenu && (
        <MobileMenu
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          navLinks={navLinks}
        />
      )}

      <NavBar
        setShowCart={setShowCart}
        showCart={showCart}
        navLinks={navLinks}
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />

      {showCart && <Cart />}
    </header>
  );
};
