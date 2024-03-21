import React from "react";
import Link from "next/link";
import Title from "../Title/Title";

const Header = () => {
    return (
        <header className={"w-full fixed top-0"}>
            <div
                className={
                    "container m-0 flex justify-between items-center py-4 bg-white/50 backdrop-blur-md"
                }
            >
                <Title Stage="h6">NEXT - Stage</Title>
                <nav className={"flex gap-2"}>
                    <Link
                        href="/"
                        className={"hover:bg-gray-100 p-1 px-2 rounded-md"}
                    >
                        Главная
                    </Link>
                    <Link
                        href="/users"
                        className={"hover:bg-gray-100 p-1 px-2 rounded-md"}
                    >
                        Пользователи
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
