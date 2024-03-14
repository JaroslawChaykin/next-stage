import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className={'flex justify-between items-center bg-gray-950 text-amber-50 pl-6'}>
            Header
            <nav className={'flex gap-2'}>
                <Link href='/' className={'hover:bg-gray-900 py-4 px-6'}>Home</Link>
                <Link href='/users' className={'hover:bg-gray-900 py-4 px-6'}>Users</Link>
            </nav>
        </header>
    );
};

export default Header;