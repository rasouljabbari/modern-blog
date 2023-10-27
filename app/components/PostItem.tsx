import PostActions from "./PostActions";

const PostItem = ({ post }: propsType) => {
    const { title, body } = post
    return (
        <div className="border border-gray-100 dark:border-slate-700 py-4 md:py-8 px-4 rounded-lg bg-gray-50 hover:bg-slate-100 dark:bg-slate-700 hover:dark:bg-slate-800 shadow-sm hover:shadow-lg animation-transition flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
                <h2 className="text-xl text-semibold leading-8">{title}</h2>
                <p className="text-cut text-base text-gray-800 dark:text-gray-200">{body}</p>
            </div>
            <PostActions post={post} />
        </div>
    );
};

export default PostItem;