import Link from "next/link";
import { notFound } from "next/navigation";

export default async function AppCatchPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">파일 오류</h2>
            <p>해당하는 파일이 존재하지 않습니다.</p>
            <Link href={""}></Link>
        </div>
    );
}