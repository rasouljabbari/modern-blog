import PostActions from "./PostActions";

interface propsType {
    post: postType
}

const PostItem = ({ post }: propsType) => {
    const { id, title, body } = post
    return (
        <div className="border border-gray-100 py-4 md:py-8 px-4 rounded-lg bg-gray-50 hover:bg-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
            <h2 className="text-xl text-semibold leading-8">{title}</h2>
            <p className="text-cut text-base text-gray-800">{body}</p>
            <PostActions/>
        </div>
    );
};

export default PostItem;