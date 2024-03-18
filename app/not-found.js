import Title from "@/app/components/Title/Title";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={'w-full h-lvh flex justify-center items-center flex-col gap-5'}>
            <Title>404</Title>
            <span>Страница не найдена</span>
            <Link href={'/'} className={'underline'}>Главная</Link>
        </div>
    )
}