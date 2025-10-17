/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import VerifyNav from '../assets/img/VerifyNav.png';
import VerifyImg from '../assets/img/VerifyEmail.png';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // To access the email passed from the sign up page
  const email = location.state?.email;

  // Function to handle navigation when the Next button is clicked
  const handleNext = () => {
    navigate('/Upload');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen px-4">
    {/* Navigation Image (Visible only on md and above) */}
    <div className="hidden md:flex justify-center mb-8 w-full">
      <img src={VerifyNav} alt="Navigation" className="w-7/12 mt-4" />
    </div>
  
    {/* Main Verification Image */}
    <img src={VerifyImg} alt="Verify Email" className="mb-7 max-w-full h-64 object-contain" />
  
    {/* Email Verification Text */}
    <div className="text-center mb-6">
      <p className="font-medium">
        We've sent an email to you <span className="font-extrabold">{email || 'your email'}</span>
      </p>
      <p className="font-medium">Please check your inbox to verify.</p>
    </div>
  
    {/* Next Button */}
    <button
      className="text-white bg-gray-300 hover:bg-gray-400 font-bold py-4 px-14 rounded-lg w-80 max-w-xs mt-0"
      onClick={handleNext}
    >
      Next
    </button>
  </div>
  
  );
}

export default VerifyEmail;