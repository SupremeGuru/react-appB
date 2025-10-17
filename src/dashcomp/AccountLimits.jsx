/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Limits() {
    const navigate = useNavigate();
    const [showLimitForm, setShowLimitForm] = useState(false); // Controls overlay visibility

    // Function to toggle overlay visibility
    const handleOverlayToggle = () => {
        setShowLimitForm(!showLimitForm);
    };

    // Function to handle the clicking event
    const handleNextPage = () => {
        navigate('/Residence');
    }

    return (
        <div className="relative mt-36 ml-[-150px] lg:mt-40 lg:ml-32">
            {/* Account Limits Title */}
            <h1 className="font-extrabold text-xl text-left ml-40 mb-6 w-[188px]">Account Limits</h1>

            {/* Current Limits Section */}
            <div className="ml-10">
                <h2 className="font-bold text-lg mb-4 ml-48 w-[161px]">Current Limits</h2>

                {/* Limits Card */}
                <div className="flex items-center justify-between flex-col lg:flex-row gap-4 p-8 bg-white rounded-lg lg:w-[750px] md:w-[750px] shadow-lg ml-48">
                    {/* Daily Limit */}
                    <div className="text-left">
                        <p className="text-gray-400 font-semibold">Daily limit</p>
                        <p className="text-black font-semibold text-lg">20,000 UK</p>
                    </div>

                    {/* Yearly Limit */}
                    <div className="text-left">
                        <p className="text-gray-400 font-semibold">Yearly limit</p>
                        <p className="text-black font-semibold text-lg">1,000,000 UK</p>
                    </div>

                    {/* Increase Limits Button */}
                    <button
                        className="bg-red-600 text-white font-bold p-3 rounded-md w-48"
                        onClick={handleOverlayToggle}
                    >
                        Increase Limits
                    </button>
                </div>
            </div>

            {/* LimitForm Overlay */}
            {showLimitForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full h-96 relative">

                        {/* Reason for Request */}
                        <div className="mb-6 mt-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Reason for request</label>
                            <select className="outline-none text-sm w-full p-3 bg-gray-100 text-gray-400 rounded-md">
                                <option>-Select-</option>
                                <option>Rewards and Benefits</option>
                                <option>Enhanced Financial Flexibility</option>
                                <option>Improved Creditworthiness</option>
                            </select>
                        </div>

                        {/* Enter Limit */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Enter limit</label>
                            <input type="number" className="outline-none w-full p-3 bg-gray-100 rounded-md" />
                        </div>

                        {/* Proceed Button */}
                        <button className="bg-red-600 text-white font-bold p-3 w-52 ml-24 mt-9 rounded-md" onClick={handleNextPage}>Proceed</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Limits;