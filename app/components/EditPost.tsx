'use client'
import { useState } from "react";
import EditIconSVG from "./svg/EditIconSVG";
import ModalParent from "./modals/ModalParent";
import PostContentModal from "./modals/PostContentModal";
const EditPost = ({ post }: propsType) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>
                <EditIconSVG />
            </button>
            {
                showModal &&
                <ModalParent
                    setShowModal={setShowModal}
                    size="md"
                >
                    <PostContentModal
                        post={post}
                        setShowModal={setShowModal}
                    />
                </ModalParent>
            }
        </>
    );
};

export default EditPost;