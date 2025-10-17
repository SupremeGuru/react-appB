/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Eye from '../assets/img/eye-slash.png';
import EyeOpen from '../assets/img/eye.png';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: '',
    Password: ''
  });

  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Validation logic
  const validate = () => {
    const validationErrors = {};
    if (!formData.Email) {
      validationErrors.Email = 'Email is required';
    }
    if (!formData.Password) {
      validationErrors.Password = 'Password is required';
    }
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const validationErrors = validate();

    // if (Object.keys(validationErrors).length > 0) {
    //   setError('Wrong credentials');
    //   return;
    // }

    // try {
    //   const result = await axios.get('http://localhost:8000/users');
    //   const user = result.data.find(
    //     (user) => user.Email === formData.Email
    //   );

    //   if (user && user.Password === formData.Password) {
    //     alert('Login Successfully');
    //     setFormData({
    //       Email: '',
    //       Password: ''
    //     });
    //     setError('');
    //     navigate('/Dashboard'); // Navigate after successful login
    //   } else {
    //     setError('Wrong credentials');
    //   }
    // } catch (err) {
    //   console.error('Error fetching users:', err);
    //   setError('An error occurred during login. Please try again later.');
    // }
    navigate('/Dashboard')
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

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
        <h1 className="text-3xl font-semibold h-11 text-foreground">Welcome back!</h1>
        <p className="text-gray-500 font-medium text-sm">
          New to CosmoRemit?{' '}
          <NavLink to={'/SignUp'} className="text-red-600">Sign up</NavLink>
        </p>

        <form className="w-full max-w-sm mt-4" onSubmit={handleSubmit}>
          {/* Display a generic error message when credentials are wrong */}
          {error && (
            <p className="text-red-500 text-sm font-medium mb-4">{error}</p>
          )}

          <label className="block text-left text-muted-foreground" htmlFor="email">Email</label>
          <div className="mb-4">
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="rounded border bg-gray-100 h-8 p-2 outline-none w-96"
              required
            />
          </div>

          <label className="block text-left text-muted-foreground mt-4" htmlFor="password">Password</label>
          <div className="mb-4">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="rounded bg-gray-100 h-8 p-2 w-96 outline-none"
              required
            />
            <img
              src={isPasswordVisible ? EyeOpen : Eye}
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer', marginLeft: '93%', marginTop: '-25px', width: '24px', height: '20px', padding: '2px' }}
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-red-600 text-white p-2 rounded w-full hover:bg-red-700">
            Sign in
          </button>

          <p className="text-center m-5">
            <NavLink to={'/Error'} className="mt-4 text-muted-foreground">Forgot password?</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;