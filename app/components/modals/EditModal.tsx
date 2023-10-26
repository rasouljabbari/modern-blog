import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const EditModal = ({ setShowModal, post }: { setShowModal: (value: boolean) => void, post: postType }) => {
    const [inputs, setInputs] = useState({
        title: '',
        body: '',
    })
    const [loader, setLoader] = useState(false)

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
        setShowModal(false)
    }
    return (
        <div className="w-full h-full px-8 py-10 bg-white rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-20 flex-col justify-start items-center gap-3 flex">
                <h3 className="text-center text-blue-600 text-[28px] font-medium leading-9">Edit post</h3>
            </div>
            <form onSubmit={handleForm} className="self-stretch flex-col justify-start items-start gap-6 flex">

                <label htmlFor="title" className="w-full flex flex-col gap-2">
                    <span className="text-md text-neutral-800">Title</span>
                    <input
                        value={inputs?.title}
                        onChange={handleChange}
                        className="w-full h-full p-4 bg-neutral-100 rounded-lg self-stretch border-none outline-none text-zinc-500 px-2 text-sm font-medium leading-normal"
                        placeholder="Enter post title"
                        name="title"
                    />
                </label>
                <label htmlFor="body" className="w-full flex flex-col gap-2">
                    <span className="text-md text-neutral-800">Body</span>
                    <textarea
                        rows={5}
                        value={inputs?.body}
                        onChange={handleChange}
                        className="w-full h-full p-4 self-stretch bg-neutral-100 rounded-lg border-none outline-none text-zinc-500 px-2 text-sm font-medium leading-normal"
                        placeholder="Enter post body"
                        name="body"
                    />
                </label>

                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <button type="submit" disabled={!inputs?.body || !inputs.title} className="grow shrink basis-0 h-12 px-5 py-3 disabled:bg-blue-400 bg-blue-600 hover:bg-blue-700 animation-transition rounded-lg shadow justify-center items-center gap-2 flex">
                        <div className="text-right text-white text-base font-normal leading-normal">{loader ? 'pending...' : 'Save changes'}</div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditModal;