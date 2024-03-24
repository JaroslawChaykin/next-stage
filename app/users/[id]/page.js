import PostCard from "@/app/components/PostCard/PostCard";
import Title from "@/app/components/Title/Title";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {
    const user = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + params.id
    ).then((response) => response.json());

    return {
        title: user.name,
        description: "Страница пользователя " + user.name,
    };
}

const getUser = async (id) => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
    ).then((response) => response.json());
    return response;
};

const getUserPosts = async (id) => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=" + id
    ).then((response) => response.json());
    return response;
};

export default async function User({ params }) {
    const user = await getUser(params.id);
    const posts = await getUserPosts(params.id);

    if (Object.keys(user).length === 0) {
        return notFound();
    }

    return (
        <>
            <Title Stage="h2" styles={"py-6"}>
                {user.name}
            </Title>
            <div>
                <Title Stage="h6" styles={"py-6"}>
                    Посты
                </Title>
                <div>
                    {posts &&
                        posts.map((post) => (
                            <PostCard {...post} key={post.id} />
                        ))}
                </div>
            </div>
        </>
    );
}
