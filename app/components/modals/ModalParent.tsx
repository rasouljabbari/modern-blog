import React from 'react';
import CloseIcon from '../../../public/close.svg'
import Image from 'next/image';
const modalSize = {
    'sm': 'max-w-[400px]',
    'md': 'max-w-[600px]',
    'lg': 'max-w-[800px]'
}

function ModalParent({ setShowModal, size, children }: modalTypes) {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-slate-700 opacity-70"
                onClick={() => setShowModal(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div
                    className={`${modalSize[size]} bg-white w-full animation-in relative mx-auto rounded-xl shadow-lg`}>
                    <Image
                        src={CloseIcon}
                        alt='close icon'
                        className={`z-50 absolute top-6 right-2 md:right-4 cursor-pointer transition-all duration-300 hover:bg-rose-50 text-2xl`}
                        onClick={() => setShowModal(false)}
                    />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalParent;