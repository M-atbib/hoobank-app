import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-32 py-[40px]">
      <img src={logo} className="w-48" />
      <ul className="sm:flex hidden justify-evenly w-6/12">
        {navLinks.map(({ id, title }) => (
          <li>
            <a
              href={`#${id}`}
              className="font-poppins text-white cursor-pointer hover:text-cyan-700"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col justify-evenly w-6/12">
            {navLinks.map(({ id, title }) => (
              <li>
                <a
                  href={`#${id}`}
                  className="font-poppins text-white cursor-pointer hover:text-cyan-700"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
