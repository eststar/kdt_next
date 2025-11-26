import RInfo from "@/data/부산맛집.json"
import Image from "next/image";
import { RestaurantType } from "@/types/restaurant";
import { notFound } from "next/navigation";
import Link from "next/link";

interface RestaurantDetailPage {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    const restaurants: RestaurantType[] = RInfo;
    return restaurants.map((restaurant) => ({
        id: String(restaurant.UC_SEQ),
    }));
}

export default async function RestaurantDetailPage({ params }: RestaurantDetailPage) {
    const { id } = await params;

    const info = RInfo.find(item => item.UC_SEQ == Number(id));
    if (!info)
        notFound();

    const kakaoMapUrl = `https://map.kakao.com/link/map/` +
        `${info.MAIN_TITLE.replace(',', '').replace(' ', '')},${info.LAT},${info.LNG}`;

    const detailInfo = info.ITEMCNTNTS.replace(/\\n/g, '\n') || "상세 설명이 없습니다.";
    return (
        <div className="w-full h-full p-10 flex flex-col justify-start items-start gap-1">
            <h1 className="text-2xl font-bold">{info.MAIN_TITLE}</h1>
            <p className="text-gray-400">{info.GUGUN_NM}</p>    
            <div className="w-full md:w-2/3 lg:w-1/2 my-4">
                {
                    info.MAIN_IMG_NORMAL &&
                    <Image
                        src={info.MAIN_IMG_NORMAL}
                        alt={info.TITLE}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-lg"
                        priority
                    />
                }
            </div>
            <div className="grid grid-cols-2 gap-2 border-b-2 border-gray-400">
                <div className="flex flex-col justify-center items-start">
                    <h3>주소</h3>
                    <p>{info.ADDR1 + info.ADDR2}</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h3>연락처</h3>
                    <p>{info.CNTCT_TEL}</p></div>
                <div className="flex flex-col justify-center items-start">
                    <h3>대표 메뉴</h3>
                    <p>{info.RPRSNTV_MENU}</p></div>
                <div className="flex flex-col justify-center items-start">
                    <h3>운영시간</h3>
                    <p>{info.USAGE_DAY_WEEK_AND_TIME.replace(/\\n/g, '\n') || "운영 시간 정보가 없습니다."}</p></div>
            </div>
            <div className="border-b-2 border-gray-400">
                <h3>관련링크</h3>
                <div className="flex flex-row items-center border-b-2 border-gray-400">
                    <div className="px-2 py-1">
                        <a href={info.HOMEPAGE_URL} target="_blank"
                            rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center items-center rounded-full bg-gray-400 hover:bg-gray-500 transition duration-150 text-white font-bold py-3 px-6 shadow-md">
                            홈페이지</a></div>
                    <div className="">
                        <a href={kakaoMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex justify-center items-center rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration-150 text-gray-900 font-bold py-3 px-6 shadow-md"
                        >
                            카카오 지도로 보기
                        </a>
                    </div>
                </div>
                <h3>상세설명</h3>
                <p>{detailInfo}</p>
            </div>
            <div className="w-full h-full">
                <Link href={"/restaurant"} className="text-white px-2 py-1 bg-blue-500 rounded hover:bg-blue-600">
            맛집 목록으로 돌아가기</Link></div>
        </div>
    );
}