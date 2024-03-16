import Title from "@/app/components/Title/Title";
import PostCard from "@/app/components/PostCard/PostCard";

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())

    return response
}
export default async function Home() {
    const posts = await getPosts()
    console.log(posts)
    return (
        <>
            <Title Stage='h2' styles={'py-6'}>Главная</Title>
            {
                posts && posts.map(post => (<PostCard {...post}/>))
            }
        </>
    );
}
