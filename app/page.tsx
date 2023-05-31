
import Brands from "./components/Brands";
import Screen from "./components/Screen";
import Kamni from "./components/leftbar/Kamni";
import Kredit from "./components/leftbar/Kredit";
import PechShaman from "./components/leftbar/PechShaman";
import BestSellers from "./components/rightbar/BestSellers";
import CatalogOnMain from "./components/rightbar/Categories";


export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Screen />
      <div className="flex w-full flex-row">
        <div className="flex w-[20%] pt-4 pr-4 flex-col">
          <PechShaman />
          <Kredit />
          <Kamni />
        </div>
        <div className="flex w-[80%] pt-4 pr-4 flex-col">
          <Brands />
          <CatalogOnMain />
          <BestSellers />
        </div>
      </div>
      <div>home page</div>
    </main>
  );
}
