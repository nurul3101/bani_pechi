import Image from "next/image";
import { BiRuble } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { HiViewfinderCircle } from "react-icons/hi2";
import ButtonCart from "./ButtonCart";

async function ListPechiBanaRus({ promise }: { promise: Promise<Pech[]> }) {
  const data = await promise;
  return (
    <>
      {data.map((pechrus) => (
        <div className="flex p-6 flex-col" key={pechrus.id}>
          <div className="flex gap-4 mb-4">
            <div className="block w-1/4">
              <Image
                alt={pechrus.title}
                width={300}
                height={300}
                src={pechrus.img1}
              />
            </div>
            <div className="flex w-2/4 flex-col gap-2">
              <div className="flex gap-3 font-light">
                <span className="text-grey">Категория:</span>
                <span className="text-main-color">
                  {pechrus.categorySecond2}
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-grey">Артикул:</span>
                <span className="text-main-color font-extralight">
                  {pechrus.sku}
                </span>
              </div>
              <h3 className="flex text-main-color font-semibold text-2xl cursor-pointer hover:text-green-middle">
                {pechrus.title}
              </h3>
              <p className="flex text-main-color">{pechrus.description}</p>
            </div>
            <div className="flex w-1/4 flex-col gap-4 text-center items-center">
              <div className="flex gap-2">
                <span className="text-orange text-3xl">{pechrus.price}</span>
                <BiRuble className="text-orange self-center" size={25} />
              </div>
              <div className="flex flex-row gap-6">
                <div className="flex self-center gap-1">
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-orange" size={15} />
                  <AiFillStar className="text-grey" size={15} />
                </div>
                <span className="text-main-color">(2 оценки)</span>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-4">
                  <span className="text-grey font-extralight">Ширина, мм:</span>
                  <span className="text-main-color">{pechrus.width}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-grey font-extralight">Высота, мм:</span>
                  <span className="text-main-color">{pechrus.height}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-grey font-extralight">
                    Глубина, мм:
                  </span>
                  <span className="text-main-color">{pechrus.depth}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-grey font-extralight">
                    Диаметр дымохода, мм:
                  </span>
                  <span className="text-main-color">
                    {pechrus.chimneyDiameter}
                  </span>
                </div>
              </div>
              <button className="flex gap-4 w-[60%] py-2 px-4 rounded-md bg-light-green hover:bg-green-middle  cursor-pointer justify-center items-center">
                <HiViewfinderCircle
                  className="text-grey self-center"
                  size={20}
                />
                <span className="flex text-main-color hover:text-beige uppercase">
                  подробнее
                </span>
              </button>
              <ButtonCart />
            </div>
          </div>
          <div className="flex h-[1.5px] bg-grey"></div>
        </div>
      ))}
    </>
  );
}
export { ListPechiBanaRus };
