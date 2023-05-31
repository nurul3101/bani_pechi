"use client";

import Image from "next/image";

const PechShaman = () => {
  return (
    <>
      <div className="flex relative mb-4">
        <div className="block">
          <Image
            alt="печь шаман"
            className=""
            height={387}
            width={387}
            src="/leftbar/pech_shaman.png"
          />
        </div>
        <div className="flex absolute items-end right-6 bottom-14 flex-col">
          <div className="flex text-beige w-[55%] mb-2 text-right">
            Дровяная банная печь Grill`D Shaman
          </div>
          <button className="flex w-30 bg-orange h-8 px-3 rounded">
            <span className="text-beige uppercase self-center">в магазин</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PechShaman;
