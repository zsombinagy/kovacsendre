import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
        <h1 className='text-white text-2xl mt-5'>Újságcikkek és kritikák</h1>
        <Image className='my-5' src="/reformatus_ujsagcikk.jpg" width={400} height={400} alt='Órangyalom: César Franck'></Image>
        <Image className='my-5' src="/orgonan_is_lehet_zenelni.jpg" width={400} height={400} alt='Orgonán is lehet zenélni'></Image>
        <Image className='my-5' src="/hogyan_lettem_orgonamuvesz.webp" width={400} height={400} alt='Hogyan lettem orgonaművész'></Image>
        
    </div>
  )
}

export default page
