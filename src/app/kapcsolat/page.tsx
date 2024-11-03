import React from "react";
import Image from "next/image";

const page = () => {

  
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5 text-white w-full">
        <h1 className="text-2xl my-5 md:text-4xl md:mt-10">Kapcsolat a családdal</h1>
        <p className="text-base text-center md:text-2xl">Kovács Beáta, Nagy Dávid és Nagy Zsombor</p>
        <div className="flex items-center flex-col lg:flex-row lg:justify-center lg:w-8/12 my-10 ">
          <Image className="md:mr-10"
            src="/csalad.jpg"
            width={600}
            height={600}
            alt="Család"
          ></Image>
          <div className="flex flex-col items-center mt-10 md:mt-3 md:text-xl">
            <Image
              className="rounded"
              src="/telefon.webp"
              width={20}
              height={20}
              alt="telefon"
            ></Image>
            <p className="mt-3">+36 30 212 2224</p>
            <p>+36 30 847 5592</p>
            <p>+36 30 374 6341</p>

            <Image
              className="rounded mt-10"
              src="/email.webp"
              width={20}
              height={20}
              alt="email"
            ></Image>
            <p className="mt-3">kovacsbea68@gmail.com</p>
            <p>gyu@gyu.hu</p>
            <p>zsombinagy.14@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
