"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="w-full">
        <div className="bg-navbarBackground mt-7 flex flex-col justify-center items-center py-3 w-full">
          <Image
            src="/orgona1.png"
            width={50}
            height={50}
            alt="Picture of the author"
          ></Image>
          <h1 className="text-xl font-semibold">Kovács Endre</h1>
          <h2 className="text-[0.6rem] font-thin mb-3">
            orgonaművész emlékoldala
          </h2>
          <button onClick={handleToggle} className="focus:outline-none md:hidden bg-basicBackground px-2 py-1 text-navbarBackground text-base rounded-md"> Menu</button>
          <div className={`flex flex-col justify-center items-center md:hidden mt-5 transition-all duration-500 ease-in-out transform${
              isToggled ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0" }`}          >
            <div className="w-full border-basicBackground border-t-2 justify-center flex">
              <h1>Tanárok és példaképek</h1>
            </div>
            <div className="w-full border-basicBackground border-t-2 justify-center flex">
              <h1>Pályatársak és művészkollégák</h1>
            </div>
            <div className="w-full border-basicBackground border-t-2 justify-center flex">
              <h1>Újságcikkek, kritikák, elismerések</h1>
            </div>
            <div className="w-full border-basicBackground border-y-2 justify-center flex">
              <h1>Kapcsolat</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
