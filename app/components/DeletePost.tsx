'use client'
import { useState } from "react";
import DeleteIconSVG from "./svg/DeleteIconSVG";
import ModalParent from "./modals/ModalParent";
import DeletePostConfirmModal from "./modals/DeletePostConfirmModal";

const DeletePost = ({ postId }:{postId: number} ) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>
                <DeleteIconSVG/>
            </button>
            {
                showModal &&
                <ModalParent
                    setShowModal={setShowModal}
                    size="sm"
                >
                    <DeletePostConfirmModal
                            postId={postId}
                        setShowModal={setShowModal}
                    />
                </ModalParent>
            }
        </>
    );
};

export default DeletePost;