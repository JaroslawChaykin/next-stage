import Title from "@/app/components/Title/Title";
import Link from "next/link";

const getUserNameById = async (id) => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
    ).then((response) => response.json());

    return response.name;
};
const PostCard = async ({ title, body, userId, id, styles = "" }) => {
    const userName = await getUserNameById(userId);
    return (
        <div
            className={
                "post-card-shadow bg-white my-3 border-b-2 rounded-lg p-6 " +
                styles
            }
        >
            <div className={"flex justify-between items-center p-3 pb-0"}>
                <Title Stage={"h6"} styles={""}>
                    <Link href={"users/" + userId}>#{userName}</Link>
                </Title>
                <Link
                    href={"posts/" + id}
                    className={"hover:bg-gray-100 p-1 px-2 rounded-md"}
                >
                    Перейти к посту
                </Link>
            </div>
            <div>
                <p className={"p-3 text-wrap first-letter:uppercase text-3xl"}>
                    {title}
                </p>
                <p
                    className={
                        "post-card-body-shadow text-wrap first-letter:uppercase bg-gray-50 border-b-2 border-gray-200 rounded-md p-3"
                    }
                >
                    {body}
                </p>
            </div>
        </div>
    );
};

export default PostCard;
