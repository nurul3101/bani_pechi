"use client";

import Image from "next/image";
import IconClock from "../icons/IconClock";
import IconProcents from "../icons/IconProsents";

const Kredit = () => {
  return (
    <>
      <div className="flex flex-col mb-4">
        <Image
          alt="оформление товара в кредит"
          className=""
          height={471}
          width={387}
          src="/leftbar/kredit.jpg"
        />
        <div className="flex flex-col p-4 bg-orange">
          <h4 className="flex text-beige text-center mb-4 text-2xl font-semibold">
            Удобный кредит или рассрочка до 36 месяцев
          </h4>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <IconClock />
              <span className="flex text-beige text-center mt-3">
                Рассмотрение заявки в течение 1 часа
              </span>
            </div>
            <div className="flex flex-col">
              <IconProcents />
              <span className="flex text-beige text-center mt-3">
                Условия предоставления кредита - от 6%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kredit;
