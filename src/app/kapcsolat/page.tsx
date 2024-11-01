import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const page = () => {

  
  return (
    <>
      <div className="flex flex-col items-center justify-around mt-5 text-white w-full">
        <h1 className="text-2xl my-5">Kapcsolat a családdal</h1>
        <p className="text-base text-center">Kovács Beáta, Nagy Dávid és Nagy Zsombor</p>
        <div className="flex items-center flex-col md:flex-row md:justify-around w-full my-10">
          <Image
            src="/csalad.jpg"
            width={450}
            height={450}
            alt="Család"
          ></Image>{" "}
          <div className="flex flex-col items-center mt-10 md:mt-3">
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
