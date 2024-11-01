import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type TeachersType = {
    name: string,
    link: string,
    first_image: string,
    first_image_description?: string 
    description?: string 
    second_image?: string 
    second_image_description?: string
    third_image?: string,
    third_image_description?: string
}

const TeachersAndModels: TeachersType[] = [
    {
    name: "Zalánfy Aladár",
    link: "https://hu.wikipedia.org/wiki/Zal%C3%A1nfy_Alad%C3%A1r",
    first_image: "/zalanfy_aladar_first.jpg",
    first_image_description: "Zalánfy Aladár 1887 – 1959",
    description: `“Zalánfy Aladár, a Liszt Ferenc Zeneművészeti Főiskola tanára, a Szent István Bazilika orgonistája Antalffy-Zsíros Dezső mellett, majd a Deák-téri evangélikus templom ‘főorgonása’. Amikor először hallottam orgonálni, akkor döntöttem el, hogy az orgonát választom életem hangszerének. Akkor éreztem először az orgonajátékában, hogy mennyi lehetőség adódik az orgonán is a muzikális előadásra. Alapelve volt: az orgona kronometrikus hangszer, nem mindegy, hogy meddig nyomjuk le a billentyűt és meddig tartjuk.
    Művészi és pedagógiai hitvallásának alapja, a jelszava az AGOGIKA volt. Az AGOGIKA az egyes hangok értékváltozásainak ‘tana’, olyan apró ritmikai értékváltozásokat jelent, amelyeket a zenemű leírásánál már nem lehet jelezni. Teljes mértékben az előadó egyéni képességétől, tehetségétől, muzikalitásától függ.
    Tanulmányaim során néhány év elteltével egyszer dícsért meg, vállamra téve a kezét, ‘Bandi, ez nagyon jó volt’ /Bach: Trio szonáta/, de kollégáinak többször elmondta, ‘van egy tanítványom, akinek orgonajátékában csodálkozva gyönyörködöm, még sokat fogtok hallani róla’. Ezt a dícséretet Gergely Ferenc tanáromnak is elmondta.” Kovács Endre, 2013.`,
    second_image: "/zalanfy_aladar_second.webp",
    },
    {
        name: "Gergely Ferenc",
        link: "https://hu.wikipedia.org/wiki/Gergely_Ferenc",
        first_image: "/gergely_ferenc_first.jpg",
        first_image_description: "Gergely Ferenc 1914 – 1998",
        description: `“A Liszt Ferenc Zeneművészeti Főiskola tanára, szintén Zalánfy – tanítvány. Templomi szolgálatait a pesti Ferences és az Egyetemi templomban végezte. Az improvizálás nagy művésze, alázatos és segítőkész, nagyszerű pedagógus.A romantikus és a modern orgonazene világában ő segített otthonosan tájékozódnom. ” Kovács Endre, 2013.`,
        second_image: "/gergely_ferenc_second.jpg",
        third_image: "/gergely_ferenc_third.webp"

    },
    {
        name: "Anton Heiller",
        link: "https://hu.wikipedia.org/wiki/Anton_Heiller",
        first_image: "/anton_heiller_first.jpg",
        first_image_description: "Anton Heiller 1923 – 1979",
        description: `” Bécsben és Harlemben tanulhattam nála. Temperamentumos egyéniség, bécsi könnyedséggel és eleganciával. Bach orgonaműveinek korszerű tolmácsolója. Közvetlen, nagyvonalú, a tehetséget kedvelő atyai barát. Rögtönzései is káprázatosak voltak, számomra felejthetetlenek.
        Orgona előadásmódom felnőttéválásához A. Heiller adta meg a markáns irányvonalat, mintegy szintézise volt Zalánfy és Gergely hatásának.” – Kovács Endre, 2013`,
        second_image: "/anton_heiller_second.jpg"
    },
    {
        name: "Marie - Claire Alain",
        link: "https://hu.wikipedia.org/wiki/Marie-Claire_Alain",
        first_image: "/claire_alain_first.jpg",
        first_image_description: "Marie-Claire Alain 1926 – 2013",
        description: "Francia orgonaművész, zenepedagógus. Hollandiában a Nyári Orgonista Akadémián tanított 1956-tól 1972-ig. Kovács Endre is tanítványai között volt.",
        second_image: "/claire_alain_second.jpg",
        second_image_description: "1965.",
        third_image: "/claire_alain_third.jpg",
        third_image_description: "Harlem 1965"

    },
    {
        name: "Cor Kee",
        link: "https://www.hetorgel.nl/en/2011/01/e2007-03b/",
        first_image: "/cor_kee_first.jpeg",
        first_image_description: "Cor Kee 1900 – 1997"
    },
    {
        name: "Albert Schweitzer",
        link: "https://hu.wikipedia.org/wiki/Albert_Schweitzer",
        first_image: "/albert_schweitzer_first.jpg",
        first_image_description: "Albert Schweitzer 1875 - 1965"
    }
]


const page = () => {
  return (
    <div className='flex justify-center flex-col items-center mt-7'>
        <h1 className='text-3xl text-white font-bold'>Tanárok és példaképek</h1>
        {TeachersAndModels.map((item, index) => (
            <>
                <div key={index} className='flex flex-col items-center justify-center mt-10 md:w-9/12'>
                    <h1 className='text-2xl  text-navbarBackground hover:underline hover:cursor-pointer hover:text-[1.7rem] duration-500'><Link href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</Link></h1>
                    <Image className='mt-3' src={item.first_image} width={300} height={300} alt={item.name}></Image>
                    {item.first_image_description && <p className='text-navbarBackground text-[0.8rem] mt-2'>{item.first_image_description}</p>}
                    {item.description && <p className='text-center text-base text-navbarBackground mt-5 px-5'>{item.description}</p>}
                    { item.second_image && 
                        <div className={`flex flex-col md:flex-row ${item.third_image ? "md:justify-around md:w-full" : "justify-center"} mt-10`}>
                            <div className='flex justify-center flex-col items-center'>
                            <Image className=' justify-center' src={item.second_image} width={250} height={250} alt={item.name}></Image>
                            {item.second_image_description && <p className='text-navbarBackground text-[0.8rem] mt-2'>{item.second_image_description}</p>}
                            </div>

                            { item.third_image && 
                                <div className='mt-5 md:mt-0 flex justify-center flex-col items-center'>
                                    <Image className='' src={item.third_image} width={250} height={250} alt={item.name}></Image>
                                    {item.second_image_description && <p className='text-navbarBackground text-[0.8rem] mt-2'>{item.third_image_description}</p>}
                                </div>
                            }
                            
                        </div>
                    }
                    <span className="bg-navbarBackground w-12 h-[0.05rem] mt-8"></span>
                </div>
            </>


        ))}
    </div>
  )
}

export default page
