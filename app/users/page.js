import Link from "next/link";
import Title from "@/app/components/Title/Title";
import { NextAPI } from "../NextAPI/NextAPI";

const getUsers = async () => {
    const response = await new NextAPI().collection("users").getList();

    return response;
};

export const metadata = {
    title: "Пользователи",
    description: "Страница с пользователями",
};

export default async function Users() {
    const users = await getUsers();

    return (
        <>
            <Title Stage="h2" bold styles={"py-12"}>
                Пользователи
            </Title>
            <ul className={"mt-3 border-2 border-gray-300"}>
                {users &&
                    users.map((user) => (
                        <li
                            className={
                                "odd:bg-gray-300 p-1 hover:text-cyan-300"
                            }
                            key={user.id}
                        >
                            <Link href={"/users/" + user.id}>{user.name}</Link>
                        </li>
                    ))}
            </ul>
        </>
    );
}
