'use client';

import { useState } from "react";

export default function ErrorButton() {
    const [isError, setIsError] = useState(false);
    if(isError){
        throw new Error("강제로 발생 시킨 에러입니다.");
    }
    return (
        <button className="bg-red-500 hover:bg-yellow-500 text-white rounded p-2" onClick={() => setIsError(!isError)}>에러발생</button>
    );
}