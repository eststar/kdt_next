"use client"
import { useState, useEffect, useReducer, useRef } from "react";
import BusanFoodCard from "./BusanFoodCard";
import { RestaurantType } from "@/types/restaurant";
import { fetchRestuarant } from "./actions";

export default function BusanFood() {
    const [tData, setTData] = useState<RestaurantType[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const isMounted = useRef(false); //strictmode 2번씩 호출 방지

    const loadData = async (pageNum: number) => {
        //로딩중에 더보기 또 누르면 return 
        if (loading)
            return;
        //로딩 다됬으면 true
        setLoading(true);
        const perPageNum = 100;
        const { data, currentPage, perPage, totalPage, error } = await fetchRestuarant(pageNum, perPageNum);
        if(error){
            console.log("failed to load restuarants: " ,error);
            setLoading(true);
            return;
        }

        if(data.length > 0)
            setTData(prev => [...prev, ...data]);

        if (currentPage >= totalPage)
                setHasMore(false);

        setLoading(false);
    };

    //더보기 누를때마다 다음 페이지에 대한 데이터 fetch해서 받아옴. client에서 상호작용 하는거기 때문에 CSR
    useEffect(() => {
        if(isMounted.current || page === 1)
            loadData(page);
        if(!isMounted.current)
            isMounted.current = true;
    }, [page]);

    //더보기 구현
    const handleLoadMore = () => {
        //로딩중이 아니고 더 불러올 데이터가 있을때만 페이지 번호 증가
        if (!loading && hasMore)
            setPage(prevPage => prevPage + 1);
    };

    const cards = tData.map((item, idx) =>
        <BusanFoodCard key={`${item.UC_SEQ}+${idx}`} data={item} />
    );

    return (
        <div className="w-full h-screen flex flex-col items-center justify-start p-5">
            <h1 className="text-2xl font-bold mb-5">맛집 목록</h1>
            <div className="w-full h-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {cards}
                {/* 로딩중일때  */}
                {
                    loading && (<div className="text-center my-4"><p>불러오는중...</p></div>)
                }
                {/* 페이지가 남았고, 로딩 끝났을때 */}
                {
                    hasMore && !loading && (
                        <div className="text-center my-8">
                            <button onClick={handleLoadMore} 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">더보기</button>
                        </div>
                    )
                }
                {/* 페이지가 더 없을때 */}
                {
                    !hasMore && (
                    <div className="text-center my-8">
                        <p>더이상 맛집이 없습니다.</p>
                    </div>)
                }                
            </div>
        </div>
    );
}