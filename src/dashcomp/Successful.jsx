/* eslint-disable no-unused-vars */
import React from 'react'
import SuccessImg from "../assets/img/succes-mark.png";
import { NavLink } from 'react-router-dom';

const Successful = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-3'>
            <img
                src={SuccessImg} />

            <h2 className='w-[350px] h-[54px] font-medium text-[36px] text-black'>
                Transfer successful
            </h2>

            <div className='text-center w-[470px] h-[54px] text-[18px] font-normal'>
                <p>
                    Your transfer to Muhammed Ibrahim was successful <br />
                    <NavLink to={'/ReviewPage'} className='text-red-600 cursor-pointer'>Click here</NavLink> to view transaction details
                </p>
            </div>

            <NavLink to={"/Dashboard"}>
                <button className="w-[320px] h-[68px] bg-red-600 text-white text-[24px] gap-3 px-14 py-[16px] rounded-xl font-semibold mt-14">
                    Done
                </button>
            </NavLink>
        </div>
    )
}

export default Successful