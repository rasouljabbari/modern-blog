'use client'
import { useState } from "react";
import EditIconSVG from "./svg/EditIconSVG";
import ModalParent from "./modals/ModalParent";
import EditModal from "./modals/EditModal";
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
                        <EditModal
                            post={post}
                        setShowModal={setShowModal}
                    />
                </ModalParent>
            }
        </>
    );
};

export default EditPost;