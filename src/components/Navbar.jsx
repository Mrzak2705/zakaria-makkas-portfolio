import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const middleLinks = navLinks.filter((nav) => nav.id !== "contact");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-4">
        <Link
          to="/"
          className="flex items-center shrink-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>

        <ul className="list-none hidden xl:flex flex-row items-center gap-6 flex-1 justify-center">
          {middleLinks.map((nav) => (
            <li
              key={nav.id}
              className={`whitespace-nowrap ${
                active === nav.title ? "text-copper" : "text-secondary"
              } hover:text-copper text-[14px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => setActive("Contact")}
          className="hidden xl:flex items-center gap-2 text-xs whitespace-nowrap border border-teal/40 text-white px-4 py-2 rounded-full hover:bg-teal/10 transition-colors shrink-0"
        >
          <Mail size={13} className="text-copper" />
          Contact
        </a>

        <div className="xl:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[26px] h-[26px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-tertiary absolute top-16 right-4 min-w-[200px] z-10 rounded-xl border border-white/5`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[15px] ${
                    active === nav.title ? "text-copper" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
