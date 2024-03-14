import Link from "next/link";

export default function Client() {
    return (
        <>
            <h1>Клиент</h1>
            <Link href={'/client/show'}>Показать клиента</Link>
            <Link href={'/client/23'}>Клиент 23</Link>
        </>
    );
}
