'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import PostItem from "./PostItem";
import { useInView } from "react-intersection-observer";
import { getPosts } from "@api/post-apis";

import { useDispatch, useSelector } from "react-redux";

import PostsLoader from '../../public/posts-loader.svg'
import { updatePostList } from "../redux/features/postsSlice";

const PostListInfiniteScroll = ({ initialPosts }: { initialPosts: postType[] }) => {

    const [postList, setPostList] = useState(initialPosts)
    const [page, setPage] = useState(1)
    const [isEmptyList, setIsEmptyList] = useState(false)
    const [ref, inView] = useInView()

    const list = useSelector((state: any) => state.postsReducer.postList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialPosts) { dispatch(updatePostList(initialPosts)) }
    }, [initialPosts, dispatch])

    const loadMorePosts = async () => {
        const nextPage = page + 1
        const posts = await getPosts(nextPage)

        if (posts?.length > 0) {
            setPage(nextPage)
            dispatch(updatePostList([
                ...postList,
                ...posts
            ]))
        } else {
            setIsEmptyList(true)
        }
    }

    useEffect(() => {
        if (inView) {
            loadMorePosts()
        }
    }, [inView])

    useEffect(() => {
        if (list) {
            setPostList(list)
            setIsEmptyList(false)
        }
    }, [list])

    return (
        <>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
                {
                    postList.map((post: postType) => (
                        <PostItem
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </div>

            <div ref={ref} className="w-full py-8">
                {
                    inView && !isEmptyList &&
                    <Image
                        src={PostsLoader}
                        alt='posts loader'
                        className='w-fit mx-auto'
                    />
                }
            </div>
        </>
    );
};

export default PostListInfiniteScroll;