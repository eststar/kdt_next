"use server"
import { supabase } from "@/supabase/client";
import { RestaurantType } from "@/types/restaurant";

export async function fetchRestuarant(page : number, perPage : number) {
    
    const offset = (page -1) * perPage;

    const { data, error, count } = await supabase.from("restaurants")
                                                .select("*", {count : "exact"})
                                                .order('UC_SEQ', {ascending : true})
                                                .range(offset, offset + perPage -1);
    if(error){
        console.error("Fetching 에러: ", error);
        return ({data : [], currentPage : page, perPage : perPage, totalPage : 0, error : error.message});
    }

    const totalPage = Math.ceil(count! / perPage);
    return ({
        data : data as RestaurantType[],
        perPage,
        currentPage : page,
        totalPage,
        error : null,
    });
}
