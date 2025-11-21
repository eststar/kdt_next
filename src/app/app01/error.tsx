'use client';

export default function Error({ error, reset }: {error: Error, reset: () => void}) {
    return (
        <div className="m-5">
            <h2 className="text-2xl text-red-600 font-bold">에러 발생</h2>
            <p className="text-red-950 m-5">{error.message}</p>
            <button className="bg-red-500 hover:bg-yellow-500 text-white rounded p-2" 
                    onClick={() => reset()}>다시시도</button>
        </div>
    );
}