
import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb";

// export async function getServerSideProps() {
//   // const { data, error } = useSWR("/api/pechibanadrova", fetcher);
//   // if (error) return <div>An error occured.</div>;
//   // if (!data) return <div>Loading ...</div>;
//   const peches = await prisma.pech.findMany({
//     where: { 
//       published: true,
//       categories: {
//         title: "Печи для бани на дровах",
//       },
//     },
//   });
//   return {
//     props: { peches },
//     revalidate: 10,
//   };
// }
// export async function Peches (peches) {
//   const data = fetch("http://localhost:3000/api/pechibanadrova", {
//     method: "GET",
//     body: JSON.stringify(peches),
//   }).then((res) => res.json());
//   console.log(peches);
//   return await data.json()
// }
//const data = fetch("http://localhost:3000/api/pechibanadrova").then((res) => res.json());
export async function GET(request: Request) {
  const pechdrova = await prisma.pech.findMany({
    where: {
      published: true,
      categorySecond1: "Печи для бани на дровах",
    },
  });
  return NextResponse.json(pechdrova);
}
