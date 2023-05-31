"use client";

import Image from "next/image";

const IconClock = () => {
  return (
    <>
      <Image
        className=" text-beige self-center "
        alt="iconclock"
        width={50}
        height={50}
        src="/icons/clock.svg"
      />
    </>
  );
};

export default IconClock;
