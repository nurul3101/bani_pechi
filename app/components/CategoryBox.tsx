"use client";
import qs from "query-string";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface CategoryBoxProps {
  title: string;
  label: string;
  selected?: boolean;
  alt: string;
  width: number;
  height: number;
  src: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  title,
  label,
  selected,
  alt,
  width,
  height,
  src
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <>
      <div
        onClick={handleClick}
        className={` " flex w-1/4 flex-col pr-4 cursor-pointer  " 
      ${selected ? "border-b-neutral-800" : "border-b-main-color"}
      ${selected ? "text-orange" : "text-beige"}
      `}
      >
        <div className="bg-light-green place-content-center grid py-4 rounded-t-lg">
          <Image alt={alt} width={width} height={height} src={src} />
        </div>
        <div className="flex w-full bg-green-middle h-18 justify-center mb-4">
          <span className="text-main-color font-medium text-2xl text-center w-[65%] p-2 hover:text-beige">
            {title}
          </span>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
