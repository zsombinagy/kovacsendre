"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const pathName = usePathname()

  return (
    <>
      <div className="w-full">
        <div className="bg-navbarBackground text-basicBackground md:justify-around flex mt-12 justify-center items-center py-3 w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="absolute top-[1.7rem] w-28 h-20 bg-navbarBackground rounded-t-full"></div>
            <div></div>
            <Image
              src="/orgona.png"
              width={80}
              height={80}
              alt="Picture of the author"
              className="z-10"
            ></Image>
            <h1 className="text-xl font-semibold md:text-2xl md:mt-1 hover:text-white duration-300 z-10 md:text-2xl">
              <button>
                <Link href="/">Kovács Endre</Link>
              </button>
            </h1>
            <h2 className="text-[0.6rem] font-thin mb-3 md:text-base z-10">
              orgonaművész emlékoldala
            </h2>
            <button
              onClick={handleToggle}
              className="focus:outline-none bg-basicBackground px-2 py-1 text-navbarBackground text-base rounded-md hover:bg-navbarBackground hover:text-basicBackground duration-500 border-2 border-basicBackground z-10"
            >
              Menu
            </button>
            <div
              className={`absolute ${
                isToggled ? "hidden" : "top-[13rem]"
              } duration-500 w-28 h-20 bg-navbarBackground rounded-b-full -z-10 `}
            ></div>
          </div>
        </div>

        <div
          className={`flex flex-col justify-center bg-navbarBackground items-center transition-all duration-500 ease-in-out transform${
            isToggled
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          } z-10 text-basicBackground`}
        >
          <div className={`w-full border-basicBackground border-t-2 justify-center flex hover:bg-basicBackground hover:text-navbarBackground duration-500 ${pathName === "/tanarokespeldakepek" && "bg-basicBackground text-navbarBackground"}`}>
            <h1>
              <Link href="/tanarokespeldakepek">Tanárok és Példaképek</Link>
            </h1>
          </div>
          <div className={`w-full border-basicBackground border-t-2 justify-center flex hover:bg-basicBackground hover:text-navbarBackground duration-500 ${pathName === "/muveszkollegak" && "bg-basicBackground text-navbarBackground"}`}>
            <Link href="/muveszkollegak">Művészkollégák</Link>
          </div>
          <div className={`w-full border-basicBackground border-t-2 justify-center flex hover:bg-basicBackground hover:text-navbarBackground duration-500 ${pathName === "/ujsagcikkek" && "bg-basicBackground text-navbarBackground"}`}>
            <Link href="/ujsagcikkek">Újságcikkek, kritikák, elismerések</Link>
          </div>
          <div className={`w-full border-t-basicBackground border-b-navbarBackground border-y-2 justify-center flex hover:bg-basicBackground hover:text-navbarBackground duration-500 ${pathName === "/kapcsolat" && "bg-basicBackground text-navbarBackground"}`}>
            <Link href="/kapcsolat">Kapcsolat</Link>
          </div>
          <div
            className={`absolute top-[18rem] md:top-[19rem] w-28 h-20 bg-navbarBackground rounded-b-full -z-10`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
