'use client'
import Link from 'next/link';
import { useAtomValue } from 'jotai'
import { loginStatus } from '@/atoms/loginJotai';

export default function Header() {
    const isLoggedIn = useAtomValue(loginStatus);
    return (
        <header className='bg-purple-500 text-white shadow-md'>
            <nav className='container h-20 mx-auto flex justify-between items-center'>
                <div className='text-xl font-bold'>KDT 03</div>
                <ul className='flex space-x-4'>
                    <li className='hover:text-lg font-bold cursor-pointer'>
                        <Link href="/">홈</Link></li>
                    {isLoggedIn &&
                        <>
                        <li className='hover:text-lg font-bold cursor-pointer'>
                            <Link href="/lotto">로또</Link></li>                        
                        <li className='hover:text-lg font-bold cursor-pointer'>
                            <Link href="/festival">부산 축제 정보</Link></li>                        
                        <li className='hover:text-lg font-bold cursor-pointer'>
                            <Link href="/todolist">할 일 목록</Link></li>
                        <li className='hover:text-lg font-bold cursor-pointer'>
                            <Link href="/restaurant">맛집 목록</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}
{/* <div className='hover:text-lg font-bold cursor-pointer'>
                        <Link href="/">홈{isLoggedIn ? "로그아웃" : "로그인" }</Link></div> */}