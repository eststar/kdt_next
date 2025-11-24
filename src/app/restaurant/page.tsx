import { Suspense } from "react";
import Restaurant from "./Restaurants";

export default function RestaurantPage() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Restaurant />
    </Suspense>
  );
}