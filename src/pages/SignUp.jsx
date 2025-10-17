/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import bgImage from '../assets/img/SignImg.png';
import Nav1 from '../assets/img/nav1.png';
import Eye from '../assets/img/eye-slash.png';
import EyeOpen from '../assets/img/eye.png';

const SignUp = () => {

  const BGimage = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: "400px",
    height: '100vh'
  }

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    ConfirmPassword: '',
    Country: ''
  });

  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Password visibility state
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false); // Confirm password visibility state

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.FirstName) {
      newErrors.FirstName = 'First Name is required';
    }
    if (!formData.LastName) {
      newErrors.LastName = 'Last Name is required';
    }
    if (!formData.Email) {
      newErrors.Email = 'Email is required';
    }
    if (!formData.PhoneNumber) {
      newErrors.PhoneNumber = 'Phone Number is required';
    }
    if (!formData.Password) {
      newErrors.Password = 'Password is required';
    }
    if (formData.Password !== formData.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Passwords do not match';
    }
    if (!formData.Country) {
      newErrors.Country = 'Country is required';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // const validationErrors = validate();
    // setErrors(validationErrors);

    // // If no validation errors, form is ready to be submitted
    // if (Object.keys(validationErrors).length === 0) {
    //   axios.post('http://localhost:8000/users', formData)
    //     .then(result => {
    //       window.alert('Signed Up Successfully');

    //       // Pass only email to VerifyEmail page
    //       navigate('/VerifyEmail', { state: { email: formData.Email } });
    //     })
    //     .catch(err => console.log(err)
    //     )
    // }

    // // Reset form data after submission  
    // setFormData({
    //   FirstName: '',
    //   LastName: '',
    //   Email: '',
    //   PhoneNumber: '',
    //   Password: '',
    //   ConfirmPassword: '',
    //   Country: ''
    // });

    navigate("/Dashboard")
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="flex flex-col md:flex-row">

      {/* Background Image Section */}
      <div
        style={BGimage}
        className="hidden md:block" // Hidden on smaller screens
      >
        <div className="w-96 h-32 mt-24 text-center">
          <p className="font-medium text-4xl text-gray-300">
            The fastest way to
            <br />
            <span className="text-red-600">send money abroad</span>
          </p>
        </div>
        <h2 className="w-32 h-20 font-bold text-5xl text-white text-center ml-32 mt-20">
          Logo
        </h2>
      </div>

      {/* Form Section */}
      <div
        className="w-full md:w-1/2 p-4 md:p-10 ml-0 md:ml-24 mt-0 md:mt-[-15px]"
      >
        <div className="mb-7">
          <img
            src={Nav1}
            className="hidden md:block" // Hidden on smaller screens
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold mb-2 text-2xl h-10 hidden md:block">Sign up</h3>
          <p className="text-gray-400 mb-4 md:mb-6 font-medium text-xs hidden md:block">
            Please fill in your name as it appears on your official documents
            and government IDs.
            <p>
              Already have an account?{" "}
              <span>
                <NavLink
                  to={"/SignIn"}
                  className="text-red-600 font-medium"
                >
                  Log in here
                </NavLink>
              </span>
            </p>
          </p>
        </div>

        <form className="flex flex-col md:flex-row justify-between" onSubmit={handleSubmit}>
          {/* Left column inputs */}
          <div className="mb-4 md:mb-0">
            <label className="text-sm text-gray-500 font-medium">First name</label>
            <div className="mb-4">
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                className="bg-gray-100 rounded h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.FirstName}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Country of residence</label>
            <div className="mb-4">
              <input
                type="text"
                name="Country"
                value={formData.Country}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.Country}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Phone number</label>
            <div className="mb-4">
              <input
                type="tel"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="border rounded bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.PhoneNumber}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm mt-4">Confirm Password</label>
            <div className="flex items-center mb-4">
              <input
                type={isConfirmPasswordVisible ? 'text' : 'password'}
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <img
                src={isConfirmPasswordVisible ? EyeOpen : Eye}
                alt="Toggle Confirm Password Visibility"
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: 'pointer', marginLeft: '-30px', width: '24px', height: '20px', padding: '2px' }}
              />
            </div>
            <p className="text-red-500 text-xs font-medium">{errors.ConfirmPassword}</p>
          </div>

          {/* Right column inputs */}
          <div className="mb-4 md:ml-20">
            <label className="text-gray-500 font-medium text-sm">Last name</label>
            <div className="mb-4">
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.LastName}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm">Email</label>
            <div className="mb-4">
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <p className="text-red-500 text-xs font-medium">{errors.Email}</p>
            </div>

            <label className="text-gray-500 font-medium text-sm mt-4">Password</label>
            <div className="flex items-center mb-4">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className="rounded border bg-gray-100 h-8 p-2 w-full md:w-64 outline-none"
                required
              />
              <img
                src={isPasswordVisible ? EyeOpen : Eye}
                alt="Toggle Password Visibility"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer', marginLeft: '-30px', width: '24px', height: '20px', padding: '2px' }}
              />
            </div>
            <p className="text-red-500 text-xs font-medium">{errors.Password}</p>

          </div>
        </form>

        <div className="flex flex-row items-center ml-2 w-full">
          <input type="checkbox" className="mr-1" required />
          <p className="font-medium text-[10px] whitespace-nowrap gap-1 inline-flex">
            I agree to the{" "}
            <a href="#" className="text-red-600 font-medium">
              terms
            </a>{" "}
            &{" "}
            <a href="#" className="text-red-600 font-medium">
              conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-red-600 font-medium">
              privacy policy
            </a>
          </p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-600 text-white font-semibold rounded p-2.5 w-52 ml-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;