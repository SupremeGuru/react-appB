/* eslint-disable no-unused-vars */
import React from "react";
import BackArrow from "../assets/img/bx_arrow-back.png";
import { useNavigate } from "react-router-dom";

const AddBeneficiary = () => {
    const navigate = useNavigate();

    function nextPage() {
        navigate("/Dashboard");
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6 relative px-4 md:px-8">
            {/* Back Button */}
            <div className="absolute top-4 left-3 md:top-6 md:left-6">
                <img
                    src={BackArrow}
                    alt="BackArrow"
                    className="w-6 md:w-8 cursor-pointer"
                    onClick={nextPage}
                />
            </div>

            {/* Page Title */}
            <h1 className="font-semibold text-2xl md:text-4xl mt-10">
                Add a beneficiary
            </h1>

            {/* Bank Account Details Section */}
            <div className="w-full max-w-3xl bg-white p-6 md:p-8">
                <h2 className="font-medium text-lg md:text-[26px] mb-6 md:mb-8">
                    Bank Account Details
                </h2>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[40px]">
                    {/* Account Name */}
                    <div>
                        <label className="block font-normal text-sm md:text-xl mb-2 text-gray-800">
                            Account name
                        </label>
                        <input
                            type="text"
                            className="outline-none h-[52px] w-full rounded-md bg-gray-100 p-3"
                        />
                    </div>

                    {/* Bank */}
                    <div>
                        <label className="block font-normal text-sm md:text-xl mb-2 text-gray-800">
                            Bank
                        </label>
                        <select className="h-[52px] w-full p-3 rounded-md bg-gray-100 outline-none text-gray-800 font-normal">
                            <option value="" disabled selected>
                                -select-
                            </option>
                            {/* Bank options to be added here */}
                        </select>
                    </div>

                    {/* Account Number */}
                    <div>
                        <label className="block font-normal text-sm md:text-xl mb-2 text-gray-800">
                            Account number
                        </label>
                        <input
                            type="text"
                            className="outline-none h-[52px] w-full rounded-md bg-gray-100 p-3"
                        />
                    </div>

                    {/* Bank Location */}
                    <div>
                        <label className="block font-normal text-sm md:text-xl mb-2 text-gray-800">
                            Bank location
                        </label>
                        <input
                            type="text"
                            className="outline-none h-[52px] w-full rounded-md bg-gray-100 p-3"
                        />
                    </div>
                </div>

                {/* Warning Text */}
                <p className="text-red-600 text-sm mt-4 md:mt-6 w-full text-center lg:text-center md:text-left">
                    Please enter the correct beneficiary account information to prevent
                    potential delays in the transaction process.
                </p>

                {/* Submit Button */}
                <div className="flex justify-center md:justify-start">
                    <button
                        className="ml-9 bg-red-600 text-white font-semibold text-base md:text-[24px] px-10 py-3 md:px-14 md:py-[16px] rounded-xl w-full md:w-[620px] h-[52px] md:h-[68px] mt-6"
                        onClick={nextPage}
                    >
                        Add beneficiary
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBeneficiary;
