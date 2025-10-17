/* eslint-disable no-unused-vars */
import React from 'react'
import GetApp from '../../assets/img/Frame 167.png';
import GetDApp from '../../assets/img/Frame 502.png';
import { motion } from "framer-motion"; 

const Apps = () => {
  return (
    <>
      {/* <div>
        <img src={GetApp}/>
    </div> */}

      <div className="w-full">
        {/* Large screen image */}
        <motion.div 
         initial={{ opacity: 0, x: 70 }}
         whileInView={{
             opacity: 1,
             x: 0,
             transition: { duration: 1 },
         }}
         viewport={{ once: false }}
        className="hidden lg:block">
          <img src={GetApp} alt="Working illustration" className="mb-10 w-full" />
        </motion.div>

        {/* Small screen image */}
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeInOut" },
        }}
        viewport={{ once: false }} 
        className="flex items-center justify-center lg:hidden">
          <img src={GetDApp} alt="Work illustration" className="w-full max-w-full mb-6" />
        </motion.div>
      </div>
    </>
  )
}

export default Apps;