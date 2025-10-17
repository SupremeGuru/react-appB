import { motion } from 'framer-motion';  // Importing Framer Motion
import Working from '../../assets/img/Frame 150.png';
import Work from '../../assets/img/Frame 530.png';

const Works = () => {
  return (
    <div className="w-full">
      {/* Large screen image with animation */}
      <motion.div
        className="hidden lg:block lg:p-12"
        initial={{ opacity: 0, x: 70 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 },
                }}
                viewport={{ once: false }}
      >
        <img src={Working} alt="Working illustration" className="mb-10 w-full" />
      </motion.div>

      {/* Small screen image with animation */}
      <motion.div
        className="p-12 lg:p-12 flex items-center justify-center lg:hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeInOut" },
        }}
        viewport={{ once: false }} 
      >
        <img src={Work} alt="Work illustration" className="w-full max-w-4xl mb-6 object-cover" />
      </motion.div>
    </div>
  );
};

export default Works;