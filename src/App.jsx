/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Choose from "./components/WhyChooseUs/Choose";
import Closer from "./components/CloserThanYouThink/Closer";
import Works from "./components/HowItWorks/Works";
import Countries from "./components/CountriesSection/Countries";
import Distance from "./components/DistanceSection/Distance";
import Fastest from "./components/FastestWaySection/Fastest";
import Faq from "./components/NewsFAQ/Faq";
import Apps from "./components/AppDownloadSection/Apps";
import Footer from "./components/Subscribe/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import VerifyEmail from "./pages/VerifyEmail";
import Upload from "./pages/Upload";
import Passport from "./pages/Passport";
import Resident from "./pages/Resident";
import Transact from "./pages/Transact";
import Confirm from "./pages/Confirm";
import Success from "./dashcomp/Success";
import Review from "./dashcomp/Review";
import Funds from './dashcomp/Funds'
import Residence from "./dashcomp/Residence";
import Beneficiary from "./dashcomp/Beneficiary";
import AddBeneficiary from "./dashcomp/AddBeneficiary";
import Profile from "./dashcomp/Profile";
import Notice from "./dashcomp/Notice";
import Successful from "./dashcomp/Successful";
import Receiver from './dashcomp/Receiver'
import ReviewPage from "./dashcomp/ReviewPage";
import Dashboard from "./dashcomp/layout/Dashboard";
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Choose />
              <Closer />
              <Works />
              <Countries />
              <Distance />
              <Fastest />
              <Faq />
              <Apps />
              <Footer />
            </>
          }
        />

        {/* Authentication and other routes */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Passport" element={<Passport />} />
        <Route path="/Resident" element={<Resident />} />
        <Route path="/Transact" element={<Transact />} />
        <Route path="/Confirm" element={<Confirm />} />
        <Route path="/Error" element={<Error />} />

        {/* Dashboard-related Routes */}
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/Receiver" element={<Receiver />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/Successful" element={<Successful />} />
        <Route path="ReviewPage" element={<ReviewPage />} />

        <Route path="/Beneficiary" element={<Beneficiary />} />
        <Route path="/AddBeneficiary" element={<AddBeneficiary />} />

        <Route path="/Profile" element={<Profile />} />

        <Route path="/Residence" element={<Residence />} />
        <Route path="/Funds" element={<Funds />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Success" element={<Success />} />

      </Routes>
    </div>
  );
};

export default App;