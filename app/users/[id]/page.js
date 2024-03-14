const getUser = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())

    return response
}

export default async function User({params}) {
    const user = await getUser(params.id);

    return (
        <>
            <h1 className={'text-4xl font-bold py-4'}>Пользователь</h1>
            <p>{user.name}</p>
        </>
    );
}
