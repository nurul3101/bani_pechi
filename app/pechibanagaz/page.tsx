
import axios from 'axios';
import { Suspense } from 'react';
import BreadCrumbs from "../components/BreadCrumbs";
import CategoryLeftBar from "../components/CategoryLeftBar";
import Loading from "../components/Loading"
import {ListPechiBanaGaz} from "../components/ListPechiBanaGaz";

// export async function getPechesGaz() {
//   const datapechigas = await fetch(`${process.env.BASE_URL}/api/pechibanagaz`, {
//     next: { revalidate: 10 },
//   }).then((res) => res.json());
//   return datapechigas;
// }
async function getPechesGaz() {
  "use server";
  const data = await fetch(`${process.env.BASE_URL}/api/pechibanagaz`).then((res) => res.json());
  return data;
}

export default function PechiBanaGaz () {
  const pechigaz = getPechesGaz();
  return (
    <>
      <div className="flex flex-col">
        <BreadCrumbs />
        <div className="flex w-full">
          <CategoryLeftBar />
          <div className="flex w-[80%] flex-col">
            <Suspense fallback={<Loading />}>
              {/* @ts-expect-error Async Server Component */}
              <ListPechiBanaGaz promise={pechigaz} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function PechiBanaGaz() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`${process.env.BASE_URL}/api/pechibanagaz`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (!data) return <p>No profile data</p>;

//   return (
//     <>
//       <div className="flex flex-col">
//         <BreadCrumbs />
//         <div className="flex w-full">
//           <CategoryLeftBar />
//           <div className="flex w-[80%] flex-col">
//             {data.map((item: any) => (
//               <div className="flex p-6 flex-col" key={item.id}>
//                 <div className="flex gap-4 mb-4">
//                   <div className="block w-1/4">
//                     <Image
//                       alt={item.title}
//                       width={300}
//                       height={300}
//                       src={item.img1}
//                     />
//                   </div>
//                   <div className="flex w-2/4 flex-col gap-2">
//                     <div className="flex gap-3 font-light">
//                       <span className="text-grey">Категория:</span>
//                       <span className="text-main-color">
//                         {item.categorySecond1}
//                       </span>
//                     </div>
//                     <div className="flex gap-3">
//                       <span className="text-grey">Артикул:</span>
//                       <span className="text-main-color font-extralight">
//                         {item.sku}
//                       </span>
//                     </div>
//                     <h3 className="flex text-main-color font-semibold text-2xl cursor-pointer hover:text-green-middle">
//                       {item.title}
//                     </h3>
//                     <p className="flex text-main-color">{item.description}</p>
//                   </div>
//                   <div className="flex w-1/4 flex-col gap-4 text-center items-center">
//                     <div className="flex gap-2">
//                       <span className="text-orange text-3xl">{item.price}</span>
//                       <BiRuble className="text-orange self-center" size={25} />
//                     </div>
//                     <div className="flex flex-row gap-6">
//                       <div className="flex self-center gap-1">
//                         <AiFillStar className="text-orange" size={15} />
//                         <AiFillStar className="text-orange" size={15} />
//                         <AiFillStar className="text-orange" size={15} />
//                         <AiFillStar className="text-orange" size={15} />
//                         <AiFillStar className="text-grey" size={15} />
//                       </div>
//                       <span className="text-main-color">(2 оценки)</span>
//                     </div>
//                     <div className="flex flex-col">
//                       <div className="flex gap-4">
//                         <span className="text-grey font-extralight">
//                           Ширина, мм:
//                         </span>
//                         <span className="text-main-color">{item.width}</span>
//                       </div>
//                       <div className="flex gap-4">
//                         <span className="text-grey font-extralight">
//                           Высота, мм:
//                         </span>
//                         <span className="text-main-color">{item.height}</span>
//                       </div>
//                       <div className="flex gap-4">
//                         <span className="text-grey font-extralight">
//                           Глубина, мм:
//                         </span>
//                         <span className="text-main-color">{item.depth}</span>
//                       </div>
//                       <div className="flex gap-4">
//                         <span className="text-grey font-extralight">
//                           Диаметр дымохода, мм:
//                         </span>
//                         <span className="text-main-color">
//                           {item.chimneyDiameter}
//                         </span>
//                       </div>
//                     </div>
//                     <button className="flex gap-4 w-[60%] py-2 px-4 rounded-md bg-light-green hover:bg-green-middle  cursor-pointer justify-center items-center">
//                       <HiViewfinderCircle
//                         className="text-grey self-center"
//                         size={20}
//                       />
//                       <span className="flex text-main-color hover:text-beige uppercase">
//                         подробнее
//                       </span>
//                     </button>
//                     <ButtonCart />
//                   </div>
//                 </div>
//                 <div className="flex h-[1.5px] bg-grey"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
