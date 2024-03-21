import Title from "@/app/components/Title/Title";
import PostCard from "./components/PostCard/PostCard";

const getPosts = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
    ).then((response) => response.json());

    return response;
};
export default async function Home() {
    const posts = await getPosts();

    return (
        <>
            <Title Stage="h2" bold styles={"py-12"}>
                Главная
            </Title>
            <section>
                {posts &&
                    posts.map((post) => <PostCard {...post} key={post.id} />)}
            </section>
        </>
    );
}
