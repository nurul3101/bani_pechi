"use client";

import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft, AiFillStar } from "react-icons/ai";

const BestSellers = () => {
  return (
    <>
      <div className="flex bg-grey-light flex-col">
        <div className="flex flex-row justify-between p-4">
          <h4 className="flex text-main-color text-2xl font-semibold">
            Лучшие предложения
          </h4>
          <div className="flex gap-6">
            <div className="flex text-main-color">Все</div>
            <div className="flex text-main-color">Печи на дровах</div>
            <div className="flex text-main-color">Электропечи</div>
            <div className="flex text-main-color">Аксессуары</div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex">
            <AiOutlineRight
              className="text-main-color absolute top-[50%] right-4"
              size={50}
            />
            <AiOutlineLeft
              className="text-main-color absolute top-[50%] left-4"
              size={50}
            />
          </div>
          {/* {cart product} */}
          <div className="flex flex-row w-1/4 gap-2 p-6">
            <div className="flex bg-white-1 p-4 flex-col">
              <Image
                alt="Печь банная Kennet Оптима 14 сетка"
                width={320}
                height={350}
                src="/catalog/pechi/kennet/GP5_012152.jpg"
              />
              <h5 className="text-main-color text-xl font-semibold p-4 text-center">
                Печь банная Kennet Оптима 14 сетка
              </h5>
              <span className="text-orange font-semibold text-center mb-4 text-xl">
                12 590 руб./шт
              </span>
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex self-center gap-1">
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-grey" size={15} />
                </div>
                <span className="text-main-color">(2 оценки)</span>
              </div>
            </div>
          </div>
          {/* {cart product} */}
          {/* {cart product} */}
          <div className="flex flex-row w-1/4 gap-2 p-6">
            <div className="flex bg-white-1 p-4 flex-col">
              <Image
                alt="Печь банная Теплодар Русь 18 Л"
                width={320}
                height={350}
                src="/catalog/pechi/teplodar/teplodar_8_11.jpg"
              />
              <h5 className="text-main-color text-xl font-semibold p-4 text-center">
                Печь банная Теплодар Русь 18 Л
              </h5>
              <span className="text-orange font-semibold text-center mb-4 text-xl">
                20 970 руб./шт
              </span>
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex self-center gap-1">
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-grey" size={15} />
                </div>
                <span className="text-main-color">(2 оценки)</span>
              </div>
            </div>
          </div>
          {/* {cart product} */}
          {/* {cart product} */}
          <div className="flex flex-row w-1/4 gap-2 p-6">
            <div className="flex bg-white-1 p-4 flex-col">
              <Image
                alt="Печь банная Теплодар Былина 24 чугунная панорама (1.1) (С/П)"
                width={320}
                height={350}
                src="/catalog/pechi/teplodar/teplodar_155_11.jpg"
              />
              <h5 className="text-main-color text-xl font-semibold p-4 text-center">
                Печь банная Теплодар Былина 24
              </h5>
              <span className="text-orange font-semibold text-center mb-4 text-xl">
                40 470 руб./шт
              </span>
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex self-center gap-1">
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-grey" size={15} />
                </div>
                <span className="text-main-color">(2 оценки)</span>
              </div>
            </div>
          </div>
          {/* {cart product} */}
          {/* {cart product} */}
          <div className="flex flex-row w-1/4 gap-2 p-6">
            <div className="flex bg-white-1 p-4 flex-col">
              <Image
                alt="Печь банная Берёзка Воевода - 20 сетка"
                width={320}
                height={350}
                src="/catalog/pechi/berezka/berezka_623_11.jpg"
              />
              <h5 className="text-main-color text-xl font-semibold p-4 text-center">
                Печь банная Берёзка Воевода - 20 сетка
              </h5>
              <span className="text-orange font-semibold text-center mb-4 text-xl">
                40 010 руб./шт
              </span>
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex self-center gap-1">
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-grey" size={15} />
                </div>
                <span className="text-main-color">(2 оценки)</span>
              </div>
            </div>
          </div>
          {/* {cart product} */}
        </div>
      </div>
    </>
  );
};

export default BestSellers;
