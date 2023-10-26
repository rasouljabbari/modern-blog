import DeleteIconSVG from "./svg/DeleteIconSVG";
import EditIconSVG from "./svg/EditIconSVG";

const PostActions = () => {
    return (
        <div className="flex items-center justify-end gap-2 w-full">
            <EditIconSVG />
            <DeleteIconSVG />
        </div>
    );
};

export default PostActions;