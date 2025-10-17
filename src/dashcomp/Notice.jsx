/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Notice = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 sm:gap-7 gap-9 sm:px-6">
      <h2 className="text-red-600 font-medium text-[30px] sm:text-[36px] w-full text-center sm:mt-5">
        Important Notice!
      </h2>

      <div className="w-full max-w-[808px] text-center mx-auto">
        <h3 className="text-lg sm:text-xl font-normal">
          To complete transfer, payment must come from sender’s account only. <br />
          Please transfer funds directly to your Frica Xchange unique bank
          account as shown below.
        </h3>
      </div>

      {/* Displaying transaction reference number if data is available */}
      {transactions.length > 0 && (
        <div className="w-full text-center text-[16px] sm:text-[18px] font-normal">
          <h3>
            Your transaction reference number is{" "}
            <span className="text-red-600">{transactions[0].Reference}</span>
          </h3>
        </div>
      )}


        <div className="w-full max-w-[271px] text-center text-[16px] sm:text-[18px] mt-6">
          <p className="font-medium">
            Account name: <span className="text-red-600 font-normal">{'Kabir Akinola'}</span>
          </p>
          <p className="font-medium">
            Account number: <span className="text-red-600 font-normal">{'1234567890'}</span>
          </p>
        </div>

      {/* Button for navigation */}
      <NavLink to="/Successful" aria-label="Go to Successful page">
        <button className="w-full sm:w-[320px] h-[68px] bg-gray-200 text-white text-[20px] sm:text-[24px] gap-3 px-14 py-[16px] rounded-xl font-semibold mt-8 sm:mt-12">
          Done
        </button>
      </NavLink>
    </div>
  );
};

export default Notice;
