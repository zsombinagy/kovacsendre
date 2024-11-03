"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const Page = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-5 md:mt-10'>
      <h1 className='text-white text-2xl mt-5 md:text-4xl md:mb-10'>Újságcikkek és kritikák</h1>
      
      <div className="my-5 cursor-pointer" onClick={() => openLightbox("/Nok_lapja_cikk.jpg")}>
        <Image className='zoom-image' src="/Nok_lapja_cikk.jpg" width={500} height={500} alt='A hangszerek királynője' />
      </div>
      <div className="my-5 cursor-pointer" onClick={() => openLightbox("/reformatus_ujsagcikk.jpg")}>
        <Image className='zoom-image' src="/reformatus_ujsagcikk.jpg" width={500} height={500} alt='Órangyalom: César Franck' />
      </div>
      <div className="my-5 cursor-pointer" onClick={() => openLightbox("/orgonan_is_lehet_zenelni.jpg")}>
        <Image className='zoom-image' src="/orgonan_is_lehet_zenelni.jpg" width={500} height={500} alt='Orgonán is lehet zenélni' />
      </div>
      <div className="my-5 cursor-pointer" onClick={() => openLightbox("/hogyan_lettem_orgonamuvesz.webp")}>
        <Image className='zoom-image' src="/hogyan_lettem_orgonamuvesz.webp" width={500} height={500} alt='Hogyan lettem orgonaművész' />
      </div>
      
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeLightbox}>
          <Image src={lightboxImage} width={800} height={800} alt="Enlarged" className="cursor-pointer" />
        </div>
      )}
    </div>
  )
}

export default Page