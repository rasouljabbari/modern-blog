import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createPost, updatePost } from "@api/post-apis";
import { useDispatch, useSelector } from 'react-redux'

import { updatePostList } from "../../redux/features/postsSlice";
import { edit_item_with_id } from "../../utils/generalFunctions";

const PostContentModal = ({ setShowModal, post, isNew = false }: modalContentType) => {
    const [inputs, setInputs] = useState<postContentType>({
        title: '',
        body: '',
    })
    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch()
    const list = useSelector((state: any) => state.postsReducer.postList);

    useEffect(() => {
        setInputs({
            title: post?.title,
            body: post?.body,
        })
    }, [post])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = async (e: FormEvent) => {
        e.preventDefault()
        setLoader(true)
        if (inputs?.title && inputs?.body) {
            if (isNew) {
                const postItem = await createPost({
                    title: inputs?.title,
                    body: inputs?.body,
                    userId: 1
                })
                if (postItem) {
                    dispatch(updatePostList([postItem, ...(list?.length ? list : [])]))
                    setShowModal(false)
                }
            } else {
                const postItem = await updatePost({
                    title: inputs?.title,
                    body: inputs?.body,
                    userId: post?.userId,
                    postId: post?.id
                })
                if (postItem) {
                    dispatch(updatePostList(edit_item_with_id(list, postItem)))
                    setShowModal(false)
                }
            }
            setLoader(false)

        }
    }
    return (
        <div className="w-full h-full px-4 md:px-8 py-10 bg-white dark:bg-slate-700 rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-20 flex-col justify-start items-center gap-3 flex">
                <h3 className="text-center text-blue-600 text-[28px] font-medium leading-9">{isNew ? 'Create' : 'Edit'} post</h3>
            </div>
            <form onSubmit={handleForm} className="self-stretch flex-col justify-start items-start gap-6 flex">

                <label htmlFor="title" className="w-full flex flex-col gap-2">
                    <span className="text-md text-neutral-800 dark:text-slate-100">Title</span>
                    <input
                        value={inputs?.title}
                        onChange={handleChange}
                        className="w-full h-full p-4 bg-neutral-100 dark:bg-slate-300 dark:text-black rounded-lg self-stretch border-none outline-none text-zinc-500 px-2 text-sm font-medium leading-normal"
                        placeholder="Enter post title"
                        name="title"
                    />
                </label>
                <label htmlFor="body" className="w-full flex flex-col gap-2">
                    <span className="text-md text-neutral-800 dark:text-slate-100">Body</span>
                    <textarea
                        rows={5}
                        value={inputs?.body}
                        onChange={handleChange}
                        className="w-full h-full p-4 self-stretch bg-neutral-100 dark:bg-slate-300 dark:text-black rounded-lg border-none outline-none text-zinc-500 px-2 text-sm font-medium leading-normal"
                        placeholder="Enter post body"
                        name="body"
                    />
                </label>

                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <button type="submit" disabled={!inputs?.body || !inputs.title} className="grow shrink basis-0 h-12 px-5 py-3 disabled:bg-blue-400 bg-blue-600 hover:bg-blue-700 animation-transition rounded-lg shadow justify-center items-center gap-2 flex">
                        <div className="text-right text-white text-base font-normal leading-normal">
                            {loader ? 'pending...' :
                                isNew ? 'Create post' : 'Save changes'
                            }</div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostContentModal;