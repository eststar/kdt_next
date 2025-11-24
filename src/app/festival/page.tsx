import { Suspense } from "react";
import Festival from "./Festival";

export default function FestivalPage() {
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <Festival />
        </Suspense>
    );
}