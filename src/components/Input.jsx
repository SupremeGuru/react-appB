/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; 

const Input = ({ type, value, placeholder, name }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="bg-gray-100 rounded h-8 p-2 outline-none max-w-full"
      />
    </div>
  )
};


Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;