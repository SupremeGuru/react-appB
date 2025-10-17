/* eslint-disable no-unused-vars */
import React from "react";
import SuccessImg from "../assets/img/succes-mark.png";
import { NavLink } from "react-router-dom";

function Success() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-5">
      {/* Succes Image */}
      <img src={SuccessImg} />

      {/* Title */}
      <h2 className="text-2xl font-extrabold mb-4">
        Limit increased successfully
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-center font-semibold">
        Your account limit has been increased
      </p>

      {/* Done button */}
      <NavLink to={'/Dashboard'}>
        <button className="bg-red-600 text-white font-bold rounded-md w-52 py-3 px-16 mt-12">
          Done
        </button>
      </NavLink>
    </div>
  );
}

export default Success;