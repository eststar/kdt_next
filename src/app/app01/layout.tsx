import Link from "next/link";

export default function App01Layout({
    children, }:
    { children: React.ReactNode; }) {
    return (
        <div className="w-full flex gap-5">
            <aside className="shadow-[10px_0px_15px_-3px_rgba(0,0,0,0.1)] h-screen w-50 flex flex-col bg-gray-100 p-5 border-2 border-solid border-rose-500">
                <h1 className="font-bold text-2xl"><Link href={"/app01"}>맛집 카테고리</Link></h1>
                <nav>
                    <ul className="gap-5 font-bold">
                        <li><Link href={"/app01/junggu"}>중구</Link></li>
                        <li><Link href={"/app01/dongnae"}>동래</Link></li>
                        <li><Link href={"/app01/jingu"}>부산진구</Link></li>
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