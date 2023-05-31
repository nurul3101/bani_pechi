"use client";

import Link from "next/link";
import { AiOutlineFire } from "react-icons/ai";
import { TfiArchive } from "react-icons/tfi";
import { GoArchive } from "react-icons/go";
import { GiPipes } from "react-icons/gi";
import { AiFillGold } from "react-icons/ai";
import { VscNotebookTemplate } from "react-icons/vsc";
import { TfiFilter } from "react-icons/tfi";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import { GiFireZone } from "react-icons/gi";
import Iconacssessuary from "./icons/Iconacssessuary";

const CategoryLeftBar = () => {
  return (
    <>
      <div className="bg-light-green p-4 w-[20%]">
        <div className="flex gap-4 mb-2">
          <VscNotebookTemplate
            className="text-main-color self-center"
            size={25}
          />
          <Link
            href="pechibanadrova"
            rel="preload"
            as="pechibanadrova"
            className="text-main-color text-lg"
          >
            Печи для бани на дровах
          </Link>
        </div>
        <div className="flex gap-4 mb-2">
          <GiFireZone className="text-main-color self-center" size={25} />
          <Link
            href="pechibanagaz"
            rel="preload"
            as="pechibanagaz"
            className="text-main-color text-lg"
          >
            Печи для бани на газу
          </Link>
        </div>
        <div className="flex gap-4 mb-2">
          <AiOutlineFire className="text-main-color self-center" size={25} />
          <Link
            href="pechibanarus"
            rel="preload"
            as="pechibanarus"
            className="text-main-color text-lg"
          >
            Печи для русской бани
          </Link>
        </div>
        <div className="flex gap-4 mb-2">
          <TfiArchive className="text-main-color self-center" size={25} />
          <div className="text-main-color text-lg">Электропечи для бани</div>
        </div>
        <div className="flex gap-4 mb-2">
          <GoArchive className="text-main-color self-center" size={25} />
          <div className="text-main-color text-lg">Баки для печей</div>
        </div>
        <div className="flex gap-4 mb-2">
          <TfiLayoutColumn4 className="text-main-color self-center" size={25} />
          <div className="text-main-color text-lg">Трубы для дымоходов</div>
        </div>
        <div className="flex gap-4 mb-2">
          <GiPipes className="text-main-color self-center" size={25} />
          <div className="text-main-color text-lg">Дымоходы для бани</div>
        </div>
        <div className="flex gap-4 mb-2">
          <TfiFilter className="text-main-color self-center" size={25} />
          <div className="text-main-color text-lg">Элементы дымохода</div>
        </div>
        <div className="flex gap-4 mb-2">
          <Iconacssessuary />
          <div className="text-main-color text-lg">Аксессуары для печей</div>
        </div>
        <div className="flex gap-4 mb-2">
          <AiFillGold className="text-main-color self-center" size={25} />
          <div className="text-main-color text-lg">Камни</div>
        </div>
      </div>
    </>
  );
};

export default CategoryLeftBar;
