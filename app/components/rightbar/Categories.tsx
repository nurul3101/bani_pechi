"use client";

import CategoryBox from "../CategoryBox";

export const categogyList = [
  {
    id: 1,
    title: "Печи для бани на дровах",
    label: "pechi_dla_bani_na_drovah",
    alt: "Печи для бани на дровах",
    width: 243,
    height: 242,
    src: "/categories/1.png",
  },
  {
    id: 2,
    title: "Электропечи для бани",
    label: "electropechi_dla_bani",
    alt: "Электропечи для бани",
    width: 243,
    height: 242,
    src: "/categories/2.png",
  },
  {
    id: 3,
    title: "Печи для русской бани",
    label: "pechi_dla_rus_bani",
    alt: "Печи для русской бани",
    width: 243,
    height: 242,
    src: "/categories/3.png",
  },
  {
    id: 4,
    title: "Баки для печей (навесные и др)",
    label: "baki",
    alt: "Баки для печей",
    width: 243,
    height: 242,
    src: "/categories/4.png",
  },
  {
    id: 5,
    title: "Дымоходы для бани",
    label: "dimohodi",
    alt: "Дымоходы для бани",
    width: 243,
    height: 242,
    src: "/categories/5.png",
  },
  {
    id: 6,
    title: "Трубы для дымоходов",
    label: "trubi",
    alt: "Трубы для дымоходов",
    width: 243,
    height: 242,
    src: "/categories/6.png",
  },
  {
    id: 7,
    title: "Элементы дымохода",
    label: "elementi_dimohoda",
    alt: "Элементы дымохода",
    width: 243,
    height: 242,
    src: "/categories/7.png",
  },
  {
    id: 8,
    title: "Аксессуары для печей",
    label: "acsessuary",
    alt: "Аксессуары для печей",
    width: 243,
    height: 242,
    src: "/categories/8.png",
  },
];


const Categories = () => {
  return (
    <>
      <h2 className="flex text-main-color font-semibold text-3xl justify-center uppercase mb-6">
        основные категории товаров
      </h2>
      <div className="flex w-full flex-wrap">
        {categogyList.map((item) => (
          <CategoryBox
            key={item.id}
            title={item.title}
            label={item.label}
            alt={item.alt}
            width={item.width}
            height={item.height}
            src={item.src}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
