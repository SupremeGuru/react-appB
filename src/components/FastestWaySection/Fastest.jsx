/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
// import bgCoverImg from "../../assets/img/fast.png";
import Svg from "../../assets/img/Vector.svg";
import Vector from "../../assets/img/faster.png";
import { motion } from "framer-motion";

const Fastest = () => {
    const BgImg = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <div
            style={BgImg}
            className="text-center p-20 lg:p-20 bg-gray-900 w-full h-[250px] lg:h-[365px]"
        >
            <div className="flex flex-col items-center justify-center gap-0">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 0.7, ease: 'easeInOut' },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-white text-[12px] lg:text-2xl font-medium mb-0">
                    We are the fastest way to
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { delay: 0.4, duration: 0.6, ease: 'easeInOut' },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="font-semibold text-[18px] lg:text-4xl text-red-600 mt-0">
                    send money abroad
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.6, duration: 0.6, ease: 'easeInOut' },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <NavLink to="/SignUp">
                        <button className="group flex items-center justify-center gap-[6px] text-white bg-red-600 p-3 rounded-lg font-semibold text-[12px] lg:text-2xl leading-7 mt-4 lg:mt-6 py-[4px] px-[22px] lg:py-4 lg:px-14 hover:bg-red-700 transition-all duration-300">
                            Register
                            <img src={Svg} className="w-[13px] lg:w-7 transform transition-transform duration-300 group-hover:translate-x-3" alt="Arrow icon" />
                        </button>
                    </NavLink>
                </motion.div>
            </div>
        </div>
    );
};

export default Fastest;