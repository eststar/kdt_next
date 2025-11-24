"use client"
import { useSearchParams, useRouter } from "next/navigation";
import TailButton from "@/components/TailButton";
import { useEffect } from "react";
import { FestivalDataType, FestivalType } from "../FestivalType";

export default function FestivalContents() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const itemString = searchParams.get("item")
    const contents: FestivalType | undefined = itemString ? JSON.parse(itemString) : undefined;

    useEffect(() => {
        if (!contents)
            router.push("/FestivalGallery");
    }, [contents, router]);


    const handleClick = () => {
        router.push("/FestivalGallery");
    };
    if (!contents)
        return null;


    const kakaoMapUrl = `https://map.kakao.com/link/map/` +
        `${contents.MAIN_PLACE.replace(',', '').replace(' ', '')},${contents.LAT},${contents.LNG}`;

    return (
        <div className="w-9/10 flex flex-col mx-auto gap-2">
            <h1 className="font-bold text-4xl mb-5 mt-5">{contents.TITLE}</h1>
            <div className="flex flex-row gap-5">
                <img src={contents.MAIN_IMG_THUMB} className="w-1/3 rounded-2xl" />
                <div className="w-2/3 h-full rounded-2xl shadow-md p-5">
                    <table className="border-separate border-spacing-5">
                        <tbody>
                            <tr>
                                <td className="text-end w-1/8">축제지역</td>
                                <td className="w-7/8 font-bold">{contents.GUGUN_NM}</td>
                            </tr>
                            <tr>
                                <td className="text-end w-1/8">주소</td>
                                <td className="w-5/8 font-bold">
                                    {contents.ADDR1 + contents.ADDR2} <a href={kakaoMapUrl} target="_blank" className="rounded-2xl bg-yellow-400 h-full p-2 hover:cursor-pointer">카카오 지도 보기</a> </td>
                            </tr>
                            <tr>
                                <td className="text-end w-1/8">연락처</td>
                                <td className="w-7/8 font-bold">{contents.CNTCT_TEL}</td>
                            </tr>
                            <tr>
                                <td className="text-end w-1/8">홈페이지</td>
                                <td className="w-7/8 font-bold"><a target="_blank" href={contents.HOMEPAGE_URL}>{contents.HOMEPAGE_URL}</a></td>
                            </tr>
                            <tr>
                                <td className="text-end w-1/8">상세내용</td>
                                <td className="w-7/8 font-bold">{contents.ITEMCNTNTS}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <TailButton bColor="blue" caption="목록으로" onHandle={handleClick} />
            </div>
        </div>
    )
}
