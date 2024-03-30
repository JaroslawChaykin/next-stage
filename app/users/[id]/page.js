import PostCard from "@/app/components/PostCard/PostCard";
import Title from "@/app/components/Title/Title";
import Link from "next/link";
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
        <div className={"pt-12"}>
            <div className={"flex gap-6"}>
                <div className={"w-1/2 bg-gray-100 rounded-md p-3 h-full"}>
                    <div className={"flex justify-between items-center"}>
                        <Title Stage="h2" styles={"py-6 uppercase"}>
                            {user.name}
                            <span className={"text-gray-500 text-lg"}>
                                #{user.username}
                            </span>
                        </Title>
                        {user.website ? (
                            <Link
                                target="_blank"
                                href={"https://" + user.website}
                                className={
                                    "h-full p-2 rounded-sm bg-gray-500 text-white"
                                }
                            >
                                Site {">"}
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>
                        {user.address.city} / {user.address.street} /{" "}
                        {user.address.suite} /{" "}
                    </div>
                    <div>
                        {user.email.replace((item, i) =>
                            i > 3 || i < 9 ? "+" : item
                        )}
                    </div>
                </div>
                <div className={"w-1/2"}>
                    <Title Stage="h6" styles={"pb-6"}>
                        Посты
                    </Title>
                    <div>
                        {posts &&
                            posts.map((post) => (
                                <PostCard {...post} key={post.id} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: { lat: '-37.3159', lng: '81.1496' }
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
//   }
