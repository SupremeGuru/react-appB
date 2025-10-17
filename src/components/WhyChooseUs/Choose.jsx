import { motion } from "framer-motion"; 
import Frica from '../../assets/img/Frame 113.png';
import tradeImg from '../../assets/img/TRADING.png';
import fastImg from '../../assets/img/FAST.png';
import safeImg from '../../assets/img/SAFETY.png';

function Choose() {
    return (
        <div className="px-4">
            {/* Title with Animation */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeInOut", delay: 0.2 },
                }}
                viewport={{ once: false }}
                className="text-2xl sm:text-4xl leading-normal text-center mt-20 font-semibold"
            >
                Why Choose FricaXChange
            </motion.h1>

            {/* Large screen image with animation */}
            <motion.img
                src={Frica}
                className="hidden lg:block lg:w-full lg:p-12 lg:mb-4"
                alt="Frica Illustration"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 },
                }}
                viewport={{ once: false }}
            />

            {/* Small to medium screen layout with animation */}
            <div className="lg:hidden mt-10 mb-10 space-y-8">
                {/* Fast Option */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 },
                    }}
                    viewport={{ once: false }}
                    className="flex flex-col items-center text-center"
                >
                    <img src={fastImg} className="w-[101px] h-20 mb-4" alt="Fast" />
                    <h2 className="text-[18px] font-semibold">Extremely Fast</h2>
                    <p className="text-xs w-[176px] text-center font-normal mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero
                    </p>
                </motion.div>

                {/* Unbeatable Rates */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
                    }}
                    viewport={{ once: false }}
                    className="flex flex-col items-center text-center"
                >
                    <img src={tradeImg} className="w-[101px] h-20 mb-4" alt="Unbeatable Rates" />
                    <h2 className="text-[18px] font-semibold">Unbeatable Rates</h2>
                    <p className="text-xs w-[176px] text-center font-normal mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero
                    </p>
                </motion.div>

                {/* Secure & Regulated */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: "easeInOut", delay: 0.5 },
                    }}
                    viewport={{ once: false }}
                    className="flex flex-col items-center text-center"
                >
                    <img src={safeImg} className="w-[101px] h-20 mb-4" alt="Secure & Regulated" />
                    <h2 className="text-[18px] font-semibold">Secure & Regulated</h2>
                    <p className="text-xs w-[176px] text-center font-normal mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, consectetur eget libero
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Choose;
