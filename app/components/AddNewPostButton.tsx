'use client'
import { useState } from 'react';
import ModalParent from './modals/ModalParent';
import EditModal from './modals/EditModal';

const AddNewPostButton = () => {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    
    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 animation-transition text-white border-none rounded-lg px-6 py-2"
            >
                Create New Post
            </button>
            {
                showModal && 
                <ModalParent
                    setShowModal={setShowModal}
                        size='md'>
                        <EditModal
                            isNew
                            setShowModal={setShowModal}
                        />
                </ModalParent>
            }
        </>
    );
};

export default AddNewPostButton;