import Dis from '../../assets/img/Frame 159.png';
import Dist from '../../assets/img/Frame 525.png';
import { motion } from 'framer-motion'

const Distance = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7 } }}
        viewport={{ once: false, amount: .5 }}
        className="w-full"
      >
        {/* Large screen image */}
        <div className="hidden lg:block lg:p-12">
          <img src={Dis} alt="Working illustration" className="mb-10 w-full object-cover" />
        </div>

        {/* Small screen image */}
        <div className="p-6 lg:p-12 flex items-center justify-center lg:hidden">
          <img
            src={Dist}
            alt="Work illustration"
            className="w-full max-w-full object-cover mb-6"
          />
        </div>
      </motion.div>
    </>
  )
}

export default Distance;