/* eslint-disable no-unused-vars */
import React from 'react';
import Country from '../../assets/img/Frame 24.png';
import { motion } from 'framer-motion'

const Countries = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7 } }}
      viewport={{ once: false, amount: .5 }}
      className="w-full">
      <img
        src={Country}
        alt="Countries"
        className="hidden md:flex w-full"
      />
      <img src={Country}
        alt="Countries"
        className="md:hidden w-full"
      />
    </motion.div>
  );
};

export default Countries;