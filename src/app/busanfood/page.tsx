import { Suspense } from "react";
import BusanFood from "./BusanFood";

export default function BusanFoodPage() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <BusanFood />
    </Suspense>
  );
}