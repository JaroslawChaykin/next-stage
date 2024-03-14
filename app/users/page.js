import Link from "next/link";

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

    return response
}

export default async function Users() {
    const users = await getUsers();

    return (
        <>
            <h1 className={'text-4xl font-bold py-4'}>Пользователи</h1>
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
