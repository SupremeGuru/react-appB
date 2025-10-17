/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transact = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // If input is valid (only one character), update the state
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Move to the next input if current input is filled
      if (value && index < pin.length - 1) {
        document.getElementById(`pin-input-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index]) {
      if (index > 0) {
        document.getElementById(`pin-input-${index - 1}`).focus();
      }
    }
  };

  const handleNavigate = () => {
    // Check if all inputs are filled
    if (pin.every((item) => item !== "")) {
      // If all inputs are filled, navigate to the next page
      navigate("/SignIn");
    }
  };

  return (
    <div className='flex flex-col h-screen items-center gap-20 py-20'>
      <h2 className="font-extrabold text-xl">Confirm Pin</h2>
      <div className="flex gap-3">
        {pin.map((digit, index) => (
          <input
            key={index}
            id={`pin-input-${index}`} // Added ID for accessibility
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
            className="w-[93px] h-[93px] text-2xl text-center bg-gray-200 rounded outline-none"
            aria-label={`Pin digit ${index + 1}`} // Accessibility label
          />
        ))}
      </div>
      <button type="button" className="py-[16px] px-[50px] w-[301px] h-[68px] rounded-[10px] gap-[10px] bg-red-600 text-white font-semibold text-[24px]" onClick={handleNavigate}>Submit</button>
    </div>
  );
};

export default Transact;