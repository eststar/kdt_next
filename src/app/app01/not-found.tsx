import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">파일 오류</h2>
            <p>해당하는 파일이 존재하지 않습니다.</p>
            <Link href={"/app01"} className="text-white mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
            맛집 목록으로 돌아가기</Link>
        </div>
    );
}