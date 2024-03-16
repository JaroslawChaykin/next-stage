import Title from "@/app/components/Title/Title";
import Link from "next/link";

const getUserNameById = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())

    return response.name
}
const PostCard = async ({title, body, userId, id}) => {
    const userName = await getUserNameById(userId)
    return (
        <div className={'my-2'}>
            <div className={'flex justify-between bg-gray-700 text-white p-3'}>
                <Title Stage={'h6'} styles={''}>
                    <Link href={'users/' + userId}>{userName}</Link>
                </Title>
                <Link href={'posts/' + id} className={'hover:mr-1 ease-in-out duration-100'}>
                    Перейти к посту
                </Link>
            </div>
            <div className={'border-2 border-t-0 p-3'}>
                <p>{title}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostCard;