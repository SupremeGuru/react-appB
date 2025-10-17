/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';

const Footer = () => {
  // Background style for the input field
  const inputBgStyle = {
    backgroundColor: 'rgba(240, 240, 240, 1)',
  };

  // Handle the form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // Display subscription logic (can be replaced with real logic)
    alert(`You just subscribed with email: ${email}`);

    // Clear the input field after submission
    e.target.email.value = ''; // Directly clearing the input value
  };

  return (
    <div className="text-center mt-6 mb-14 px-4">
      {/* Title */}
      <h1 className="font-medium text-2xl md:text-3xl mb-6">
        Subscribe to our rates alert
      </h1>

      {/* Subscription Form */}
      <form onSubmit={handleSubscribe}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {/* Input Field */}
          <input
            style={inputBgStyle}
            type="email"
            name="email"
            placeholder="Type your email"
            className="text-gray-500 py-8 px-16 text-2xl md:text-xl font-medium lg:rounded-l-xl rounded-xl w-full md:w-[600px] outline-none placeholder:text-center"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white font-medium text-3xl md:text-xl bg-red-600 lg:rounded-r-xl rounded-xl w-full md:w-[260px] py-8 px-16 mt-"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Footer;