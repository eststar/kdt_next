import Link from "next/link";

export default function App02Layout({
    children, }:
    { children: React.ReactNode; }) {
    return (
        <div className="w-full flex flex-col gap-5">
            <aside className="shadow-[10px_0px_15px_-3px_rgba(0,0,0,0.1)] h-25 w-3xl flex flex-row gap-5 items-center bg-gray-100 p-5 border-2 border-solid border-rose-500">
                <h1 className="font-bold text-2xl"><Link href={"/app02"}>맛집 카테고리</Link></h1>
                <nav>
                    <ul className="flex flex-row gap-5 font-bold">
                        <li><Link href={"/app02/junggu"}>중구</Link></li>
                        <li>동래</li>
                        <li>부산진구</li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}