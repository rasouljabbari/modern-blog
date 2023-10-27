import { getPosts } from "@api/post-apis";

import PostListInfiniteScroll from "./PostListInfiniteScroll";

const Posts = async() => {
    const postsList = await getPosts(1)

    return (
        <section id="posts">
            <PostListInfiniteScroll initialPosts={postsList}/>
        </section>
    );
};

export default Posts;