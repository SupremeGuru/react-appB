import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import BgImg from '../../assets/img/Rectangle 14.png';
import Svg from '../../assets/img/Vector.svg';

function Closer() {
    const bgImage = {
        backgroundImage: `linear-gradient(rgba(40, 20, 8, 0.75), rgba(40, 20, 8, 0.75)), url(${BgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div
            style={bgImage}
            className="text-center p-6 lg:p-16 leading-loose w-full h-[400px] md:h-[500px]">
            <div className="flex flex-col items-center justify-center h-full">
                {/* Animated Heading */}
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.2, duration: 0.7, ease: 'easeInOut' },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-6 text-center"
                >
                    We are closer than you think
                </motion.h2>

                {/* Animated Paragraph */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { delay: 0.4, duration: 0.6, ease: 'easeInOut' },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-gray-300 text-sm md:text-base lg:text-lg leading-6 md:leading-7 mb-6 text-center"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros <br />
                    tortor, consectetur eget libero non, condimentum purus.
                </motion.p>

                {/* Animated Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.6, duration: 0.6, ease: 'easeInOut' },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <NavLink to={'/SignUp'} className="text">
                        <button
                            className="group flex items-center justify-around gap-3 text-white bg-red-600 p-2 rounded-lg font-semibold text-base md:text-xl lg:text-2xl leading-7 py-2 md:py-3 px-10 md:px-16 lg:px-24 hover:bg-red-700 transition-all duration-300"
                        >
                            Register
                            <img
                                src={Svg}
                                className="w-5 md:w-6 lg:w-7 transform transition-transform duration-300 group-hover:translate-x-3"
                                alt="Arrow Icon"
                            />
                        </button>
                    </NavLink>

                </motion.div>
            </div>
        </div>
    );
}

export default Closer;
