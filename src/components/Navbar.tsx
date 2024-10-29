import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div>

        <Image
          src="/orgona1.png"
          width={50}
          height={50}
          alt="Picture of the author"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
