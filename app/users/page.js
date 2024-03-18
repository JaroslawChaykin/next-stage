import Link from "next/link";
import Title from "@/app/components/Title/Title";

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

    return response
}

export const metadata = {
    title: "Пользователи",
    description: "Страница с пользователями",
};

export default async function Users() {
    const users = await getUsers();

    return (
        <>
            <Title Stage='h2' styles={'py-6'}>Пользователи</Title>
            <ul className={'mt-3 border-2 border-gray-300'}>
                {
                    users && users.map(user => (
                        <li className={'odd:bg-gray-300 p-1 hover:text-cyan-300'}>
                            <Link href={'/users/' + user.id}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
