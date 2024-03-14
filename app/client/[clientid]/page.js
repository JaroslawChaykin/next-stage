
export default function ClientId({params}) {

    if (isNaN(params.clientid)) {
        return (
            <h1>Не правильный url</h1>
        )
    }

    return (
        <h1>Клиент ID {params.clientid}</h1>
    );
}
