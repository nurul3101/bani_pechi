"use client";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { AiOutlineDown } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className="flex bg-main-color h-14">
      <div className="flex w-[2%]"></div>
      <div className="flex w-[18%] bg-orange py-3 px-8 gap-6 justify-center items-center">
        <div className="self-center">
          <SlMenu className="text-main-color " size={30} />
        </div>
        <div className="text-main-color ">Выбрать категории</div>
      </div>
      <div className="flex w-[80%]">
        <nav className="flex flex-row gap-10 items-center px-10">
          <Link href="/" className="text-beige uppercase cursor-pointer">Главная</Link>
          <Link href="/aksii" className="text-beige uppercase cursor-pointer">Акции</Link>
          <div className="flex flex-row gap-3">
            <div className="text-beige uppercase cursor-pointer">Магазин</div>
            <AiOutlineDown className="text-beige self-center" size={15} />
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/howbuy" className="text-beige uppercase cursor-pointer">
              Как купить
            </Link>
            <AiOutlineDown className="text-beige self-center" size={15} />
          </div>
          <Link href="/about" className="text-beige uppercase cursor-pointer">О компании</Link>
          <Link href="/contacts" className="text-beige uppercase cursor-pointer">Контакты</Link>
        </nav>
        <div className="w-[2px] h-6 bg-grey self-center m-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
