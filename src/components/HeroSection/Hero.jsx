/* eslint-disable no-unused-vars */
import React from 'react'
import bgCoverImg from '../../assets/img/Vector.png';
import FormImg from '../../assets/img/Frame 256.png';
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div
      className="lg:h-[694px] bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${bgCoverImg})` }}>

      <div className='flex flex-col lg:flex-row justify-between items-center h-full lg:mt-[-70px]'>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="pt-10 lg:mt-0">
          <h1 className="lg:text-7xl lg:leading-snug leading-snug font-bold text-white ml-11 text-5xl">Send Money <br />
            <span className="text-red-600">without</span> Borders
          </h1>
          <p className="text-gray-400 leading-7 font-normal lg:text-lg text-base ml-11 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros
            <br /> tortor, consectetur eget libero non, condimentum sagittis mauris. Ut
            <br /> molestie euismod neque. Proin eget odio
          </p>
        </motion.div>

        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          src={FormImg}
          className='mb-5 mr-10 mt-10 ml-10 lg:w-[470px]' alt="Form Illustration" />
      </div>
    </div>
  )
}

export default Hero;