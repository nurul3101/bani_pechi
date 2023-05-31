import { Suspense } from "react";
import Loading from "../components/Loading";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoryLeftBar from "../components/CategoryLeftBar";
import { ListPechiBanaRus } from "../components/ListPechiBanaRus";

async function getPechesRus() {
  "use server";
  const data = await fetch(`${process.env.BASE_URL}/api/pechibanarus`).then((res) => res.json());
  return data;
}

export default function PechiBanaRus() {
  const pechirus = getPechesRus();
  return (
    <>
      <div className="flex flex-col">
        <BreadCrumbs />
        <div className="flex w-full">
          <CategoryLeftBar />
          <div className="flex w-[80%] flex-col">
            <Suspense fallback={<Loading />}>
              {/* @ts-expect-error Async Server Component */}
              <ListPechiBanaRus promise={pechirus} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
