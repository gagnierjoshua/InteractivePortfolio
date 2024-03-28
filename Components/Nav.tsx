import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [isDropdownVisible, setDropDownVisible] = React.useState(false); // [false, function to change it to true or false

  /* can change sticky to fixed if I don't want rows expanding*/
  return (
    <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25ptx] text-white font-bold">
          JOSH
          <span className="text-[#55e6a5]">GAGNIER</span>
        </h1>

        <div className="nav-link text-white">
          <Link href="/">HOME </Link>
        </div>
        <div className="nav-link text-white">
          <Link href="/#AboutMe">ABOUT</Link>
        </div>
        <div className="nav-link text-white">
          <Link href="/#Skills">SKILLS</Link>
        </div>

        {/* projects dropdown menu for options */}
        <div
          className="relative nav-link text-white"
          onMouseEnter={() => setDropDownVisible(true)}
          onMouseLeave={() => setDropDownVisible(false)}
        >
          <Link href="/#Projects">PROJECTS</Link>
          {isDropdownVisible && (
            <div className="absolute left-0 mt-0 w-22 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-green-100"
                  role="menuitem"
                >
                  <Link href="/#Projects">General</Link>
                </a>
                <a
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-green-100"
                  role="menuitem"
                >
                  {" "}
                  <Link href="/Web">Web </Link>
                </a>
                <a
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-green-100"
                  role="menuitem"
                >
                  <Link href="/Game">Game </Link>
                </a>
                <a
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-green-100"
                  role="menuitem"
                >
                  <Link href="/Embedded">Embedded </Link>
                </a>
                <a
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-green-100"
                  role="menuitem"
                >
                  <Link href="/Data">AI & Data </Link>
                </a>
              </div>
            </div>
          )}
        </div>
        {/* LinkedIn Icon */}
        <div className="nav-link">
          <a href="https://www.linkedin.com/in/gagnierjoshua/" target="_blank">
            <svg
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        {/* GH Icon */}
        <div className="nav-link">
          <a href="https://github.com/gagnierjoshua" target="_blank">
            <svg
              className="h-4 w-4 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
        </div>
        {/* X Icon */}
        <div className="nav-link">
          <a href="https://twitter.com/GagnierJoshua" target="_blank">
            <svg
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
        </div>

        <div className="nav-link text-white">CONTACT</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#55e6a5]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
