"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import { PT_Sans } from "next/font/google";
import { FaOdnoklassniki } from "react-icons/fa";


const oswald = Oswald({ subsets: ["latin"] });
const pt_Sans = PT_Sans({ weight: ["400", "700"], subsets: ["cyrillic"] });

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <>
      <div className={` "flex flex-col " ${pt_Sans.className}`}>
        <div className="flex bg-grey w-full h-[2px]"></div>
        <div className="flex p-6 gap-10">
          <div className="flex flex-col w-1/4">
            <div className="flex gap-4 mb-4">
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
            <h5 className="text-main-color">
              Печи для бани и сауны. Все для устройства бани: трубы, дымоходы,
              аксессуары для бани.
            </h5>
          </div>
          <div className="flex flex-col w-1/6">
            <h6 className="flex text-main-color text-xl font-semibold mb-4">
              Как купить?
            </h6>
            <nav className="flex flex-col gap-3">
              <div className="text-main-color text-base">Условия оплаты</div>
              <div className="text-main-color text-base">Условия доставки</div>
              <div className="text-main-color text-base">Гарантия на товар</div>
            </nav>
          </div>
          <div className="flex flex-col w-1/4">
            <h6 className="flex text-main-color text-xl font-semibold mb-4">
              Разделы каталога
            </h6>
            <nav className="flex flex-row flex-wrap gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-main-color text-base">Печи для бани</span>
                <span className="text-main-color text-base">Печи-камины</span>
                <span className="text-main-color text-base">
                  Баки для печей
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-main-color text-base">
                  Трубы для дымоходов
                </span>
                <span className="text-main-color text-base">
                  Дымоходы для бани
                </span>
                <span className="text-main-color text-base">
                  Аксессуары для печей
                </span>
              </div>
            </nav>
          </div>
          <div className="flex flex-col w-1/4 gap-3">
            <div className="flex gap-4">
              <span className="text-main-color">Наш телефон:</span>
              <span className="text-main-color font-semibold">
                +7 (999) 999-99-99
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-main-color">E-mail:</span>
              <span className="text-main-color">banipechi@gmail.com</span>
            </div>
            <div className="flex gap-4">
              <span className="text-main-color">Мы в социальных сетях:</span>
              <FaOdnoklassniki
                className="text-orange cursor-pointer"
                size={25}
              />
            </div>
          </div>
        </div>
        <div className="flex bg-light-green justify-between p-4">
          <div className="flex gap-6">
            <span className="text-main-color uppercase">
              БАНИ И ПЕЧИ &copy;2018 - {year}
            </span>
            <span className="bg-grey w-[2px] h-6"></span>
            <span className="text-main-color underline">
              Политика конфиденциальности
            </span>
          </div>
          <div className="flex flex-row gap-4">
            <span className="text-main-color">Сайт создан:</span>
            <span className="text-main-color underline">Luckylo.pw</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
