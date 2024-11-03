import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5 md:mt-10'>
        <h1 className='text-white text-2xl mt-5 md:text-4xl'>Újságcikkek és kritikák</h1>
        <Image className='my-5' src="/reformatus_ujsagcikk.jpg" width={500} height={500} alt='Órangyalom: César Franck'></Image>
        <Image className='my-5' src="/orgonan_is_lehet_zenelni.jpg" width={500} height={500} alt='Orgonán is lehet zenélni'></Image>
        <Image className='my-5' src="/hogyan_lettem_orgonamuvesz.webp" width={500} height={500} alt='Hogyan lettem orgonaművész'></Image>
        
    </div>
  )
}

export default page
