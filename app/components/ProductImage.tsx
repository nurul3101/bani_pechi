import Image from "next/image";



export async function ProductImage ({ promise }: { promise: Promise<Pech[]> }) {
    const data = await promise;
  return (
    <>
      {data.map((pechgaz) => (
        <Image
          key={pechgaz.title}
          alt={pechgaz.title}
          width={300}
          height={300}
          src={pechgaz.img1}
        />
      ))}
    </>
  );
};

export default ProductImage;
