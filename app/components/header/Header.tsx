"use client";

//import Select from 'react-select/dist/declarations/src/Select';
import Image from "next/image";
import { Oswald } from "next/font/google";
import { PT_Sans } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { AiOutlineDown } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import UserMenu from "./Usermenu";
import { User } from "@prisma/client";

const oswald = Oswald({ subsets: ["latin"] });
const pt_Sans = PT_Sans({ weight: ["400", "700"], subsets: ["cyrillic"] });

interface HeaderProps {
  currentUser?: User | null;
}
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <div className={` "flex p-5 " ${pt_Sans.className}`}>
      <div className="flex justify-between gap-4">
        <div className="flex w-2/6 gap-4">
          <Image
            alt="logo"
            className="hidden md:block cursor-pointer"
            height={50}
            width={50}
            src="/icons/logo_home.svg"
          />
          <h2
            className={` " text-main-color text-2xl self-center " ${oswald.className}`}
          >
            БАНИ И ПЕЧИ
          </h2>
        </div>
        <div className="flex w-3/6 rounded-md border-orange border-[1.5px] h-10 self-center">
          {/* <Select /> */}
          <input
            className="h-8 pl-3 border-none self-center"
            type="text"
            placeholder="Все категории"
          />
          <AiOutlineDown className="text-grey self-center mr-3" size={20} />
          <div className="w-[2px] h-6 bg-grey self-center m-4"></div>
          <input
            className="h-8 border-none w-[30rem] self-center"
            type="text"
            placeholder="Найти продукт..."
          />
          <div className="bg-orange pt-1 pb-1 pl-6 pr-6 rounded-r-md">
            <CiSearch size={30} className="text-beige" />
          </div>
        </div>
        <div className="flex w-1/6 items-center">
          <UserMenu currentUser={currentUser} />
        </div>
        <div className="flex w-2/6 items-center gap-4">
          <BsTelephone className="text-main-color" size={25} />
          <span className="text-main-color text-xl ">+7 (999) 999-99-99</span>
        </div>
        <div className="flex w-1/6 items-center relative">
          <GiShoppingCart className="text-orange" size={40} />
          <div className="absolute w-5 h-5 rounded-full bg-main-color p-[3px] text-beige font-light text-xs text-center left-0 top-1">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
