import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';

const DeletePostConfirmModal = ({ setShowModal, postId }: deletePostType) => {

    const [loader, setLoader] = useState(false)

    const handleForm = async (e: FormEvent) => {
        e.preventDefault()
        console.log(postId);
        
        setLoader(true)
        setShowModal(false)
        toast.success('deleted post successfully')
    }

    return (
        <div className="w-full h-full px-8 py-10 bg-white rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
            <p className="text-slate-900 text-xl font-medium leading-9">Are you sure you want to <b className="text-rose-500">DELETE</b> this post?</p>
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