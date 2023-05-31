"use client";

import Image from "next/image";

const Brands = () => {
  return (
    <>
      <div className="flex w-3/4 flex-row gap-6 p-6 justify-between align-middle self-center">
        <div className="block">
          <Image
            alt="лого kennet"
            className="grayscale hover:grayscale-0"
            width={182}
            height={33}
            src="/logo_kennet.png"
          />
        </div>
        <div className="block">
          <Image
            alt="лого теплодар"
            className="grayscale hover:grayscale-0"
            width={129}
            height={42}
            src="/logo_teplodar.png"
          />
        </div>
        <div className="block">
          <Image
            alt="лого березка"
            className="grayscale hover:grayscale-0"
            width={69}
            height={42}
            src="/beryozka.png"
          />
        </div>
        <div className="block">
          <Image
            alt="лого nmk"
            className="grayscale hover:grayscale-0"
            width={53}
            height={42}
            src="/logo_nmk.png"
          />
        </div>
        <div className="block">
          <Image
            alt="лого tmf"
            className="grayscale hover:grayscale-0"
            width={82}
            height={42}
            src="/logo_tmf.png"
          />
        </div>
        <div className="block">
          <Image
            alt="лого grill"
            className="grayscale hover:grayscale-0"
            width={96}
            height={42}
            src="/logo_grill.png"
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
