"use client";

import Link from "next/link";

const HowBuy = () => {
  return (
    <>
      <div className="flex text-main-color flex-col text-2xl gap-6 p-6">
        <div className="flex font-semibold">Как купить?</div>
        <Link href="/usloviaoplati" className="flex underline">
          Условия оплаты
        </Link>
        <Link href="/usloviadostavki" className="flex underline">
          Условия доставки
        </Link>
        <Link href="/garantia" className="flex underline">
          Гарантия на товар
        </Link>
      </div>
    </>
  );
};

export default HowBuy;
