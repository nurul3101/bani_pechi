type Pech = {
    id: number;
    sku: string;
    published: boolean; 
    title: string;
    description: string;
    width: number;
    height: number;
    depth: number;
    constructionMaterial: string;
    enclosedSauna?: string | null;
    weightStonesEnclosedSauna?: number;
    fuelType?: string | null;
    chimneyDiameter: number;
    woodLength?: number | null
    weightOfStones?: number | null;
    dimensions?: string | null;
    guarantee?: number | null;
    gas?: string | null;
    fireboxMetalThickness?: number | null;
    steamRoomVolume?: number | null;
    price: number;
    stock?: number | null;
    brand: string;
    mark?: string | null;
    likeCount: number;
    img1: string;
    img2?: string | null;
    img3?: string | null;
    categoryMain?: string | null;
    categorySecond1?: string | null;
    categorySecond2?: string | null;
    categorySecond3?: string | null;
}
