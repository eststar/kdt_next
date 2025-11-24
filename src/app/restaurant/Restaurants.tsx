import RestaurantCard from "@/components/RestaurantCard";
import { RestaurantType } from "@/types/restaurant";
import RInfo from "@/data/부산맛집.json"

export default function Restaurants() {

  const cards = RInfo.map((item) =>
    <RestaurantCard key={item.UC_SEQ} data={item} />
  );
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start p-5">
      <h1 className="text-2xl font-bold mb-5">맛집 목록</h1>
      <div className="w-full h-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards}
      </div>

    </div>
  );
}