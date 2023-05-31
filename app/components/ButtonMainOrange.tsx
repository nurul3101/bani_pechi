"use client";

import { BsArrowRightShort } from "react-icons/bs";

const ButtonMainOrange = () => {
  return (
    <>
      <button className="flex w-[40%] flex-row justify-between bg-orange px-4 py-2 h-10 rounded">
        <span className="text-beige uppercase">Смотреть</span>
        <BsArrowRightShort className="text-beige self-center" size={25} />
      </button>
    </>
  );
};

export default ButtonMainOrange;
