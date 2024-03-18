import Title from "@/app/components/Title/Title";
import {notFound} from "next/navigation";

export async function generateMetadata({params, searchParams}) {
    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        .then(response => response.json());

    return {
        title: user.name,
        description: 'Страница пользователя ' + user.name,
    }
}

const getUser = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
    return response
}

export default async function User({params}) {
    const user = await getUser(params.id);

    if(Object.keys(user).length === 0) {
        return notFound()
    }

    return (
        <>
            <Title Stage='h2' styles={'py-6'}>Пользователь</Title>
            <p>{user.name}</p>
        </>
    );
}
