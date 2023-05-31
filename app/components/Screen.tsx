"use client";

import Link from "next/link";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { PT_Sans } from "next/font/google";
import { BsCircle } from "react-icons/bs";
import ButtonMainOrange from "./ButtonMainOrange";
import CategoryLeftBar from "./CategoryLeftBar";

const oswald = Oswald({ subsets: ["latin"] });
const pt_Sans = PT_Sans({ weight: ["400", "700"], subsets: ["cyrillic"] });

const Screen = () => {
  return (
    <div className={` " flex w-full flex-row pt-4 pr-4 " ${pt_Sans.className}`}>
      <CategoryLeftBar />
      <div className="bg-main-color p-8 w-[30%]">
        <h3 className="flex text-grey mb-4">Лучшие решения для вашей бани</h3>
        <h2
          className={` " flex text-beige text-5xl mb-4 " ${oswald.className}`}
        >
          Новая коллекция печей от самых лучших производителей
        </h2>
        <div className="flex text-beige text-2xl mb-10">
          Современные модели 2024 года
        </div>
        <Link href="aksii/newcollection" className="flex w-full mb-10">
          <ButtonMainOrange />
        </Link>
        <div className="flex flex-row gap-3">
          <BsCircle className="text-beige" size={12} />
          <BsCircle className="text-beige" size={12} />
          <BsCircle className="text-beige" size={12} />
        </div>
      </div>
      <div className="w-[50%]">
        <Image
          alt="печь"
          className=""
          height={800}
          width={1200}
          src="/pechi_harvia.jpg"
        />
      </div>
    </div>
  );
};

export default Screen;
