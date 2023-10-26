'use client'
import { useState } from "react";
import DeleteIconSVG from "./svg/DeleteIconSVG";

const DeletePost = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>
                <DeleteIconSVG/>
            </button>
        </>
    );
};

export default DeletePost;