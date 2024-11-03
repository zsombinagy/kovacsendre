import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type ColleaguesType = {
  name: string,
  link: string,
  first_image: string,
  first_image_description?: string 
  description?: string 
  second_image?: string 
  second_image_description?: string
  third_image?: string,
  third_image_description?: string
  fourth_image?: string,
  fourth_image_description?: string,
  side_by_side_pictures?: {
    first: string,
    second: string,
    third?: string
    description?:string
  }
}



const Colleagues: ColleaguesType[] = [
  {
    name: "Gregor József",
    link: "https://hu.wikipedia.org/wiki/Gregor_J%C3%B3zsef_(opera%C3%A9nekes)",
    first_image: "/gregor_jozsef_first.jpg",
    description: "Gregor József operaénekessel fiatal művészként kezdték a közös fellépéseket és pályafutásuk során nagysikerű koncerteket adtak szerte az országban. Gregor József haláláig jó barátságban maradtak, humorukban egymásra találtak. Minden találkozáskor Hubaykámként köszöntötték egymást egy fiatalkorukban hallott zeneszerzőkről szóló anekdóta közös emlékeként.",
    second_image: "/gregor_jozsef_second.jpg",
    second_image_description: "Egy fiatalkori közös koncert szórólapja",
    third_image: "/gregor_jozsef_third.webp",
    third_image_description: "Szegedi dóm – közös koncert plakátja",
    fourth_image: "/gregor_jozsef_fourth.jpg",
    fourth_image_description: "Balatonszárszó 2002",
    side_by_side_pictures: {
      first: "/gregor_jozsef_fifth.jpg",
      second: "/gregor_jozsef_sixth.jpg"
    }

  },
  {
    name: "Simándy József",
    link: "https://hu.wikipedia.org/wiki/Sim%C3%A1ndy_J%C3%B3zsef",
    first_image: "/simandy_jozsef_first.jpg",
    first_image_description: "Simándy József operaénekest sok alkalommal kísérte koncerteken. Nagy megtiszteltetés volt számára a kitűnő operaénekes barátsága és a közös fellépések.",
    second_image: "/simandy_jozsef_second.jpg",
    second_image_description: "1983. Kálvin téri református templom",
    third_image: "/simandy_jozsef_third.jpg",
    side_by_side_pictures: {
      first: "/simandy_jozsef_fifth.jpg",
      second: "/simandy_jozsef_fourth.jpg",
    }
  
  },
  {
    name: "Moldován Sefánia",
    link: "https://hu.wikipedia.org/wiki/Moldov%C3%A1n_Stef%C3%A1nia",
    first_image: "/moldovan_stefania_first.jpg",
    second_image: "/moldovan_stefania_second.jpg",
    second_image_description: "1983. Kálvin téri református templom",
    third_image: "/moldovan_stefania_third.jpg",
    third_image_description: "1983. Kálvin téri református templom",
    fourth_image: "/moldovan_stefania_fourth.jpg",
    fourth_image_description: "1980. Pécs Székesegyház",
    side_by_side_pictures: {
      first: "/moldovan_stefania_fifth.jpg",
      second: "/moldovan_stefania_sixth.jpg"
    }    
  }, 
  {
    name: "Ardó Mária",
    link: "https://hu.wikipedia.org/wiki/Ard%C3%B3_M%C3%A1ria",
    first_image: "/ardo_maria_first.webp",
    second_image: "/ardo_maria_second.jpg",
    side_by_side_pictures: {
      first: "/ardo_maria_third.webp",
      second: "/ardo_maria_fourth.jpg",
      third: "/ardo_maria_fifth.jpg",
      description: "Balatonfüred Fehér – templom"
    }

  }, {
    name: "Béres Ferenc",
    link: "https://hu.wikipedia.org/wiki/B%C3%A9res_Ferenc",
    first_image: "/beres_ferenc_first.jpg",
    first_image_description: "1980. Zeneakadémia",
    second_image: "/beres_ferenc_second.jpg",
    second_image_description: "Bécs",
    third_image: "/beres_ferenc_third.jpg",
    third_image_description: "1996. utolsó közös fellépés az Őrségben, Béres Ferenc énekművész halála előtt néhány héttel az 1996. Magyarország rendezvénysorozat keretében",

  },
  {
    name: "Csavlek Etelka",
    link: "https://hu.wikipedia.org/wiki/Csavlek_Etelka",
    first_image: "/csavlek_etelka_first.jpg",
    second_image: "/csavlek_etelka_second.jpg"
  },
  {
    name: "Pege Aladár",
    link: "https://hu.wikipedia.org/wiki/Pege_Alad%C3%A1r",
    first_image: "/pege_aladar_first.jpg",
    first_image_description: "Vígadó"
  }

]

const page = () => {




  return (
    <div className='flex justify-center flex-col items-center mt-7 px-3 md:px-0'>
      <h1 className='text-3xl text-white font-bold px-5 text-center md:text-5xl'>Pályatársak, művészkollégák</h1>
      {Colleagues.map((item, index) => (
            <>
                <div key={index} className='flex flex-col items-center justify-center mt-10 md:w-9/12 lg:w-6/12'>
                    <h1 className='text-2xl md:text-4xl  text-navbarBackground hover:underline hover:cursor-pointer hover:text-[2.8rem] duration-500'><Link href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</Link></h1>
                    <Image className='mt-3' src={item.first_image} width={500} height={500} alt={item.name}></Image>
                    {item.first_image_description && <p className='text-navbarBackground text-[0.8rem] mt-5 text-center md:text-xl'>{item.first_image_description}</p>}
                    {item.description && <p className='text-center text-base text-navbarBackground mt-5 px-5 md:text-xl'>{item.description}</p>}
                    {item.second_image && <Image className='mt-5' src={item.second_image} width={500} height={500} alt={item.name}></Image>}
                    {item.second_image_description && <p className='text-navbarBackground text-[0.8rem] mt-2 text-center md:text-xl'>{item.second_image_description}</p>}
                    {item.third_image && <Image className='mt-5' src={item.third_image} width={500} height={500} alt={item.name}></Image>}
                    {item.third_image_description && <p className='text-navbarBackground text-[0.8rem] mt-2 text-center md:text-xl'>{item.third_image_description}</p>}
                    {item.fourth_image && <Image className='mt-5' src={item.fourth_image} width={500} height={500} alt={item.name}></Image>}
                    {item.fourth_image_description && <p className='text-navbarBackground text-[0.8rem] mt-2 text-center md:text-xl'>{item.fourth_image_description}</p>}
                    {item.side_by_side_pictures && 
                        <div className={`flex flex-col mt-10 justify-center items-center md:w-full`}>
                          <div className='flex flex-col md:flex-row md:w-9/12 md:justify-center'>
                            <div className='mt-3 md:mt-0 flex justify-center items-center px-2 md:px-0'>
                              <Image src={item.side_by_side_pictures.first} width={350} height={350} alt={item.name}></Image>
                            </div>
                            <div className='mt-3 md:mt-0 flex justify-center items-center px-2 md:px-0'>
                              <Image src={item.side_by_side_pictures.second} width={350} height={350} alt={item.name}></Image>
                            </div >
                            <div className='mt-3 md:mt-0 flex justify-center items-center px-2 md:px-0'>
                              {item.side_by_side_pictures.third &&
                                <Image src={item.side_by_side_pictures.third} width={350} height={350} alt={item.name}></Image>
                              }
                            </div>
 
                          </div>
                           {
                            item.side_by_side_pictures.description &&
                            <p className='text-white text-[0.8rem] text-center mt-2 md:text-xl
                            '>
                              {item.side_by_side_pictures.description}
                            </p>
                           }
                        </div>
                    
                    
                    }
                    <span className="bg-navbarBackground w-24 h-[0.05rem] mt-8"></span>
                </div>
            </>


        ))}
    </div>
  )
}

export default page
