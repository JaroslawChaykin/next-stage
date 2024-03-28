import Title from "@/app/components/Title/Title";
import PostCard from "./components/PostCard/PostCard";
import { NextAPI } from "./NextAPI/NextAPI";

const getPosts = async () => {
    const response = await new NextAPI().collection("posts").getList();
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
