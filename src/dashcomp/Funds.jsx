/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import BackArrow from "../assets/img/bx_arrow-back.png";
import UpImg from "../assets/img/document-upload.png";
import { useNavigate } from 'react-router-dom';

const Resident = () => {

    const [selectedImg, setselectedImg] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    // Function to handle file change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setselectedImg(URL.createObjectURL(file));
        }
    }

    // Function to trigger file input click when the circle is clicked
    const handleImgClick = () => {
        fileInputRef.current.click();
    }

    // Function to handle the clicking event
    const handleNextPage = () => {
        navigate('/Review');
    }

    const handlePrevPage = () => {
        navigate('/Residence');
    }

  return (
    <div className='bg-neutral-100 h-screen flex flex-col justify-center items-center p-6'>
        {/* Back Arrow */}
        <div className='absolute top-5 left-0 ml-5'>
            <img src={BackArrow} alt="BackArrow" className='w-8 cursor-pointer' onClick={handlePrevPage} />
        </div>

        {/* Main Content */}
        <div className='text-center mt-10'>
            <h1 className='text-2xl font-extrabold'>Upload proof of funds</h1>
            <p className='text-gray-500 mt-2'>You are required to provide a proof of the source of your funds <br /> for security purposes. Upload an appointment letter or bank statement</p>

            {/* Upload Box */}
            <div className='mt-10 border-dashed border-2 rounded-md border-gray-300 p-9 text-center w-full max-w-lg' onClick={handleImgClick}>
                <img src={ selectedImg || UpImg} alt="Upload Document" className='w-8 mx-auto mb-6' />
                <p>
                    <span className='font-bold text-red-600 cursor-pointer text-sm'>Click to upload</span> or drag and drop
                </p>
                <p className='text-sm text-gray-400'>(Max. file size: 25 MB)</p>

                {/* Hidden file input */}
                <input type="file" accept='*/*' className='hidden' id=
                'file-upload' onChange={handleFileChange} ref={fileInputRef} />
            </div>

            {/* Next Button */}
            <button className='bg-red-600 text-white font-semibold rounded-md w-52 py-3 px-16 mt-20 disabled:bg-gray-300' onClick={handleNextPage}>
                Next
            </button>
        </div>
    </div>
  )
}

export default Resident;