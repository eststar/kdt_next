
import { RestaurantType } from "@/types/restaurant"
import Image from "next/image";
import Link from "next/link";

interface RestaurantCard{
  data : RestaurantType,
}

export default function RestaurantCard({data} : RestaurantCard) {
  if(!data)
    return;
  return (
    <Link href={`/restaurant/${data.UC_SEQ}`} className="w-full h-90 flex flex-col rounded-2xl border-2 border-gray-400 shadow-lg overflow-hidden">
      <div className="relative w-full h-full">
        { 
          <Image style={{objectFit : "cover"}} fill priority src={data.MAIN_IMG_THUMB || "/no_image.jpg"} alt={data.TITLE}
             className="w-full h-full" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        }        
      </div>      
      <div className="w-full h-full flex flex-col items-start p-2 gap-2">
        <h2 className="text-lg font-bold">{data.TITLE}</h2>
        <p className="font-bold text-gray-600">{data.GUGUN_NM}</p>
        <p className="bg-amber-200 rounded px-2">대표메뉴 : {data.RPRSNTV_MENU}</p>
      </div>
    </Link>
  )
}
