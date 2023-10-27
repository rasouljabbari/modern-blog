import { deletePost } from "@api/post-apis";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { updatePostList } from "../../redux/features/postsSlice";

const DeletePostConfirmModal = ({ setShowModal, postId }: deletePostType) => {

    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const list = useSelector((state: any) => state.postsReducer.postList);

    const handleForm = async (e: FormEvent) => {
        e.preventDefault()

        setLoader(true)

        const responseCode = await deletePost({ postId })

        if (responseCode) {
            setShowModal(false)
            let deletedIndex: number = list.findIndex((item: postType) => item.id === postId)
            if (deletedIndex > -1) {
                let arr = [...list]
                arr.splice(deletedIndex, 1);
            
                dispatch(updatePostList(arr))
            }
        }
    }

    return (
        <div className="w-full h-full px-4 md:px-8 py-10 bg-white dark:bg-slate-700 rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
            <p className="text-slate-900 dark:text-slate-100 text-xl font-medium leading-9">Are you sure you want to <b className="text-rose-500">DELETE</b> this post?</p>
            <form onSubmit={handleForm} className="self-stretch justify-start items-start gap-4 flex">
                <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="grow shrink basis-0 px-5 py-3 border border-red-600 text-red-600 hover:bg-red-400 hover:text-white text-right text-base font-normal leading-normal animation-transition rounded-lg shadow justify-center items-center gap-2 flex">
                    No
                </button>
                <button type="submit" className="grow shrink basis-0 px-5 py-3 whitespace-nowrap disabled:bg-blue-400 border border-blue-600 bg-blue-600 hover:bg-blue-700 animation-transition rounded-lg shadow justify-center items-center gap-2 flex">
                    <div className="text-right text-white text-base font-normal leading-normal">
                        {loader ? 'pending...' : 'Yes delete It'
                        }</div>
                </button>
            </form>
        </div>
    );
};

export default DeletePostConfirmModal;