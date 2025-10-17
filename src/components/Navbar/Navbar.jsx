// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Dots from '../../assets/img/dots.png';
import { motion } from 'framer-motion'

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const BgColor = {
        backgroundColor: 'rgba(73, 48, 48, 0.84)',
        backdropFilter: 'blur(16px)',
    };

    return (
        <div style={BgColor} className="flex justify-between items-center p-3 sticky top-0 z-[20]">
            {/* Logo */}
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.5, ease: 'easeInOut'},
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-white font-bold text-4xl ml-11 cursor-default"
            >
                Logo
            </motion.h2>

            {/* Desktop Navigation Buttons */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.5, ease: 'easeInOut'},
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="hidden md:flex">
                <NavLink
                    className="mr-10 w-36 text-center bg-white hover:bg-gray-100  text-red-600 p-2 rounded-lg font-semibold"
                    to={'./SignIn'}
                >
                    Login
                </NavLink>
                <NavLink
                    className="text-white text-center w-36 mr-10 bg-red-600 hover:bg-red-700 font-semibold p-2 rounded-lg"
                    to={'./SignUp'}
                >
                    Register
                </NavLink>
            </motion.div>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className="cursor-pointer md:hidden">
                <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.5, ease: 'easeInOut'},
                }}
                viewport={{ once: true, amount: 0.5 }}
                 src={Dots} className="h-8 mr-4" alt="Menu icon" />
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={`fixed top-0 right-0 w-[70%] bg-white transition-transform duration-500 ${nav ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                {/* Close Icon */}
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-black font-bold text-[24px]">Logo</h2>
                    <AiOutlineClose size={20} className="mr-4 cursor-pointer" onClick={handleNav} />
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex flex-col p-6 space-y-4 bg-white fixed mt-[-1px] w-full h-[100vh]">
                    <NavLink className="text-black text-xl font-medium mb-1" to={'/'}>
                        FAQs
                    </NavLink>
                    <NavLink className="text-black text-xl font-medium" to={'/'}>
                        Help center
                    </NavLink>
                    <div>
                        <div className="flex space-x-7 mt-10">
                            <NavLink
                                className="text-center text-red-600 border border-gray-400 px-4 py-2 rounded-xl font-semibold w-full"
                                to={'/SignIn'}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                className="text-white text-center bg-red-600 px-4 py-2 rounded-xl font-semibold w-full"
                                to={'/SignUp'}
                            >
                                Sign up
                            </NavLink>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;