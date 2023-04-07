import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { text: "Collaborate", href: "/collab" },
  { text: "For Fans", href: "/fans" },
  { text: "For artists", href: "/artists" },
  { text: "FAQs", href: "/faqs" },
];

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <nav className="w-[100vw] bg-white p-6">
      <div className="w-full  max-w-[1140px] mx-auto  flex items-center flex-row justify-between gap-[1rem]">
        {/* navbar brand */}
        <div className="w-[120px]">
          <img
            alt="logo"
            src="/images/logo.png"
            width="150"
            height="60"
            loading="lazy"
          />
        </div>
        <div className="flex-1 ml-auto hidden md:block">
          <ul className="w-full flex items-center justify-end gap-x-6 text-mainColor font-[500]">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile nav */}
        <div
          className="fixed top-0 left-0 w-screen min-h-screen bg-[rgba(0,0,0,0.5)] transition duration-500"
          style={{
            transform: isOpened ? "translateX(0%)" : "translateX(-100%)",
          }}
        >
          <ul
            className="w-[50%] max-w-[100vw] h-screen bg-white pt-[4rem] flex flex-col relative transition delay-400 duration-500"
            style={{
              transform: isOpened ? "translateX(0%)" : "translateX(-100%)",
            }}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="font-light hover:text-white hover:bg-mainColor p-4"
              >
                <Link to={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${isOpened ? "z-[5] bg-white" : ""} block md:hidden`}>
          <Hamburger size="25" toggled={isOpened} toggle={setIsOpened} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
