import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

const PostActions = ({ post }: propsType) => {
    return (
        <div className="flex items-center justify-end gap-2 w-full">
            <EditPost post={post} />
            <DeletePost postId={post.id}/>
        </div>
    );
};

export default PostActions;