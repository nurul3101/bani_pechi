"use client";

import { GiShoppingCart } from "react-icons/gi";

const ButtonCart = () => {
  return (
    <>
      <button className="flex bg-orange rounded-md py-2 w-[60%] px-4 gap-4 justify-center items-center hover:bg-orange-dark">
        <GiShoppingCart className="text-beige self-center" size={20} />
        <span className="text-beige uppercase">в корзину</span>
      </button>
    </>
  );
};

export default ButtonCart;
