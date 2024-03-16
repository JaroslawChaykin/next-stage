import Title from "@/app/components/Title/Title";

const getUser = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())

    return response
}

export default async function User({params}) {
    const user = await getUser(params.id);

    return (
        <>
            <Title Stage='h2' styles={'py-6'}>Пользователь</Title>
            <p>{user.name}</p>
        </>
    );
}
