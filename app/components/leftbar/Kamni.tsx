"use client";

import Link from "next/link";
import Image from "next/image";
import ButtonMainGreen from "../ButtonMainGreen";

const Kamni = () => {
  return (
    <>
      <div className="flex relative mb-4">
        <Image
          alt="камни для печей"
          className=""
          height={437}
          width={387}
          src="/leftbar/kamni.jpg"
        />
        <div className="flex absolute flex-col">
          <div className="flex p-4 flex-col">
            <h4 className="flex text-beige text-center mb-4 text-2xl font-semibold">
              Камни для печей
            </h4>
            <span className="flex text-beige">Испарители, микс, кварцит</span>
            <span className="flex text-beige">
              Скидки до <span className="text-xl px-1">30</span>%
            </span>
          </div>
        </div>
        <Link href="catalog" className="flex absolute left-4 bottom-16">
          <ButtonMainGreen />
        </Link>
      </div>
    </>
  );
};

export default Kamni;
