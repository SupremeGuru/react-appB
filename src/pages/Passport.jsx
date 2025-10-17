/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import Upload from '../assets/img/Upload.png';
import Circle from '../assets/img/black-circle.png';
import { useNavigate } from 'react-router-dom';

const Passport = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file)); // Create URL for the uploaded image
    }
  };

  // Function to trigger file input click when the circle is clicked
  const handleCircleClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle navigation when the Next button is clicked
  const handleNextPage = () => {
    navigate('/Resident');
  }

  return (
    <div className="flex flex-col items-center gap-16 py-9">
    {/* Upload icon (Visible only on md and larger screens) */}
    <img src={Upload} className="w-7/12 hidden md:block" alt="Upload Icon" />
    
    {/* Header */}
    <h1 className="font-bold text-2xl">Take a passport photograph</h1>
  
    {/* Circle image as clickable */}
    <div className="w-40 h-40 rounded-full overflow-hidden cursor-pointer" onClick={handleCircleClick}>
      <img src={selectedFile || Circle} className="w-full h-full object-cover" alt="Passport or Placeholder" />
    </div>
  
    {/* Hidden file input */}
    <input type="file" accept="image/*" capture="user" onChange={handleFileChange} ref={fileInputRef} className="hidden" />
  
    {/* Responsive Button */}
    <button
      type="submit"
      className="bg-red-600 text-white font-semibold rounded py-3 w-full max-w-sm md:max-w-md"
      onClick={handleNextPage}
    >
      Next
    </button>
  </div>
  
  );
};

export default Passport;