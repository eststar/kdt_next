import RInfo from "@/data/부산맛집.json"
import Image from "next/image";
import { RestaurantType } from "@/types/restaurant";
import { notFound } from "next/navigation";

interface RestaurantDetailPage {
    params: Promise<{ id: string }>
}

export default async function RestaurantDetailPage({ params }: RestaurantDetailPage) {
    const { id } = await params;
        
    const Info = RInfo.find(item => item.UC_SEQ == Number(id));
    if(!Info)
        notFound();
    
    return (
        <div className="w-full h-full p-10 flex flex-col justify-start items-start">
            <h1 className="text-2xl font-bold">{Info.MAIN_TITLE}</h1>
            <p className="text-gray-400">{Info.GUGUN_NM}</p>
            <div className="relative w-1/2 h-1/2">
            {
                Info.MAIN_IMG_NORMAL && 
                <Image src={Info.MAIN_IMG_NORMAL} alt={Info.TITLE} style={{objectFit : "cover"}} fill priority />
            }
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                    <h3>주소</h3>
                    <p>{Info.ADDR1 + Info.ADDR2}</p>
                    </div>
                <div className="flex flex-col justify-center items-start">
                    <h3>연락처</h3>
                    <p>{Info.CNTCT_TEL}</p></div>
                <div className="flex flex-col justify-center items-start">
                    <h3>대표 메뉴</h3>
                    <p>{Info.RPRSNTV_MENU}</p></div>
                <div className="flex flex-col justify-center items-start">
                    <h3>운영시간</h3>
                    <p>{Info.USAGE_DAY_WEEK_AND_TIME}</p></div>
            </div>
            <div>
                <h3>관련링크</h3>
                <div>
                    <div className="bg-gray-700 px-2 py-1 rounded text-white">홈페이지</div>
                    <div className="bg-yellow-400 px-2 py-1 rounded">카카오맵으로 보기</div>
                </div>
                <h3>상세설명</h3>
                <p></p>
            </div>
        </div>
    );
}