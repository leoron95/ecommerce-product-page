import { IconClose } from "./Icons";

export const MobileMenu = ({ setToggleMenu, toggleMenu, navLinks }) => {
  return (
    <div className="absolute z-10 w-full">
      <div className="backdrop-brightness-[20%]">
        <div className="flex flex-col w-[65%] min-h-screen bg-white px-[25px] py-6 gap-[50px]">
          <button className="w-4" onClick={() => setToggleMenu(!toggleMenu)}>
            <IconClose />
          </button>
          <ul className="flex flex-col gap-[18px] text-lg font-bold">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
