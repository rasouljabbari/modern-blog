import { getPosts } from "@api/post-apis";
import PostItem from "./PostItem";

const Posts = async() => {
    const postsList = await getPosts()
    console.log(postsList);

    return (
        <section id="posts" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
            {
                postsList.map((post: postType )=> (
                    <PostItem
                        key={post.id}
                        post={post}
                    />
                ))
            }
        </section>
    );
};

export default Posts;