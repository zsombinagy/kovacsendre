import Image from "next/image";

export default function Home() {
  type DescriptionType = {
    title: string;
    description: string;
  };

  type AwardsType = {
    title: string;
    year: string | number;
  };

  const descriptions: DescriptionType[] = [
    {
      title: "Fiatal évei",
      description:
        "Édesapja Kovács Zoltán református lelkész volt. Már 8 éves korától kísérte a gyülekezet énekét az istentiszteleteken eleinte Kistarcsán, majd a Salétrom utcai református templomban. Középiskolai tanulmányait a Lónyai Utcai Református Gimnáziumban, ennek államosítása után a Kölcsey Ferenc Gimnáziumban végezte. Minden vágya az volt, hogy orvos lehessen, mint családjában sok felmenője, de mivel édesapja lelkipásztor volt, „osztályidegennek” minősítették, és nem vették fel az orvosi egyetemre. Ezért választotta végül a zenei pályát, és így az egész életét végigkísérő példakép, Albert Schweitzer, az orvos-orgonaművész nyomdokaiba léphetett részben. A Bartók Béla Konzervatóriumban, a Liszt Ferenc Zeneművészeti Egyetemen, később Hollandiában tanult, zenei versenyt is nyert, majd Bécsben folytatta zenei tanulmányait. Legkedvesebb tanárai Zalánfy Aladár, Gergely Ferenc, Marie-Claire Alain francia orgonatanár és Anton Heiller bécsi professzor voltak. Zeneszerzés tanára Major Ervin volt.",
    },
    {
      title: "Filharmónia",
      description:
        "1962-től az Országos Filharmónia munkatársaként, 1976-tól főmunkatársként mint hangversenyrendező, műsorszerkesztő dolgozott. E munkásságának is köszönhető, hogy Magyarországon elindultak a templomi hangversenyek az 1960 – as években. 1992 – 1996 között a Nemzeti Filharmónia szakmai igazgatóhelyettese volt. Ezután még néhány évig a Dél-Dunántúli Filharmónia Kht. (Pécs) művészeti tanácsadójaként működött. Tervei alapján építették újjá a kőröshegyi Szent Kereszt templom orgonáját, és ennek köszönhetően kerültek megrendezésre a Musica Antiqua Hungarica és a Cantus Pannonicus koncertsorozatok.",
    },
    {
      title: "Díjak és elismerések",
      description:
        "Az 1960 – 1990 – es évek között nem számíthatott kitüntetésekre, nagy díjakra, mert nem hagyott fel a Református Egyházban végzett szolgálatával többszöri felszőlítás ellenére sem. Minden héren részt vett az istentiszteleteken a Salétrom utcai templom orgonistájaként és számos kapcsolattal rendelkezett a hazai és nyugat-európai egyházi életen belül. Lemezkiadását sem támogatták, így a hazai orgonamuzsikáért végzett munkássága szinte csak a hatalmas fénykép- és dokumentumanyag révén maradhat fent és néhány felvételen.",
    },
  ];

  const Awards: AwardsType[] = [
    {
      title: "I. díj Anton Heiller mesterkurzusán – Haarlem",
      year: 1964,
    },
    {
      title: "II. díj Anton Heiller mesterkurzusán – Haarlem",
      year: 1965,
    },
    {
      title:
        "A Szocialista Kultúráért” a népművelés terén kifejtett kiváló munkájáért",
      year: 1976,
    },
    {
      title:
        "„A Szocialista Kultúráért” a népművelés terén kifejtett kiváló munkájáért",
      year: "1970, 1981",
    },
  ];

  const Plates: AwardsType[] = [
    {
      title: "Hungarian Songs of Five Centuries – Öt Évszázad Magyar Dalai",
      year: 1969,
    },
    {
      title:
        "Liszt: Complete Organ Works 3/5. Sándor Margittay, Gábor Lehotka, Endre Kovács",
      year: 1973,
    },
    {
      title: "Liszt: Complete Organ Works 4/5. Endre Kovács",
      year: 1973,
    },
    {
      title:
        "Liszt Ferenc: Organ Works. Sándor Margittay, Endre Kovács, Gábor Lehotka",
      year: 1988,
    },
    {
      title:
        "Wedding Music / Esküvői zene / Musique de mariage / Hochzeitsmusik – Bach, Bizet, Gluck, Handel, Liszt, Mendelssohn, Mozart, Schuber",
      year: 1992,
    },
    {
      title:
        "Tebenned bíztunk eleitől fogva – Zsoltárok, dicséretek a magyar református énekeskönyvből",
      year: 1997,
    },
  ];

  return (
    <>
      <div className="mt-8 w-11/12 md:w-6/12">
        <div className="flex justify-center items-center flex-col text-white">
          <h1 className="text-white text-3xl text-center ">
            Kovács Endre <br /> orgonaművész emlékoldala
          </h1>
          <span className="bg-navbarBackground w-12 h-[0.05rem] mt-3"></span>
          <Image
            className="mt-5"
            src={"/kovacs_endre_jozsefváros_reformatus_templom.jpg"}
            width={400}
            height={400}
            alt="picture of Kovács Endre"
          ></Image>
          <p className=" mt-2 text-white text-[0.8rem]">
            1936. június 5 - 2015. április 3.
          </p>
          {descriptions.map((item, index) => (
            
            <div key={index} className="mt-5 flex flex-col items-center">
              <span className="bg-navbarBackground w-12 h-[0.05rem] mt-8"></span>
              <h1 className="mt-5 text-white text-2xl text-left">
                {item.title}
              </h1>
              <p className="mt-3 text-sm text-left">{item.description}</p>
              
            </div>
          ))}
          <div className="text-sm flex flex-col border-x-2 border-t-2 border-black w-11/12 mt-10">
            <div className="flex border-b-2 border-white">
              <div className="w-9/12 border-r-2 border-black px-2 py-1">Elismerés</div>
              <div className="w-3/12 px-2 py-1 text-center">Évszám</div>
            </div>

            {Awards.map((item, index) => (
              <>
                <div key={index} className="flex border-b-2 border-black items-center">
                  <div className="w-9/12 border-r-2 border-black px-2 py-1">{item.title}</div>
                  <div className="w-3/12 px-2 py-1 text-center">{item.year}</div>
                </div>
              </>
            ))}
          </div>
          <span className="bg-navbarBackground w-12 h-[0.05rem] mt-8"></span>
          <h1 className="text-2xl text-white mt-7 text-left">Lemezek</h1>
          <div className="text-sm flex flex-col border-x-2 border-t-2 border-black w-11/12 mt-5">
            <div className="flex border-b-2 border-white">
              <div className="w-9/12 border-r-2 border-black px-2 py-1">Lemezek</div>
              <div className="w-3/12 px-2 py-1 text-center">Évszám</div>
            </div>

            {Plates.map((item, index) => (
              <>
                <div key={index} className="flex border-b-2 border-black items-center">
                  <div className="w-9/12 border-r-2 border-black px-2 py-1">{item.title}</div>
                  <div className="w-3/12 px-2 py-1 text-center">{item.year}</div>
                </div>
              </>
            ))}
          </div>
          <span className="bg-navbarBackground w-full h-[0.05rem] mt-8"></span>
          <span className=" text-white text-2xl w-12 h-[0.05rem] mt-5">...</span>
        </div>
        
      </div>
    </>
  );
}
