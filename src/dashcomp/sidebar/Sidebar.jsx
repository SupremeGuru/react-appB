import { useState } from "react";
import {
  FaHome,
  FaHistory,
  FaUserFriends,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isSidebarOpen, onLinkClick }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen pt-32 bg-white md:translate-x-0 transition-transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-full py-5 overflow-y-auto">
        <ul className="space-y-5 w-[260px]">
          <li
            className={`${activeLink === "home" ? "bg-red-500 text-white" : "text-black"} flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => {
              handleClick("home");
              onLinkClick("home");
            }}
          >
            <FaHome className="mr-4 ml-3" /> Home
          </li>
          <li
            className={`${activeLink === "history" ? "bg-red-500 text-white" : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => {
              handleClick('history');
              onLinkClick('history');
            }}
          >
            <FaHistory className="mr-4 ml-3" /> Transaction History
          </li>
          <li
            className={`${activeLink === "beneficiary"
              ? "bg-red-500 text-white"
              : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => {
              handleClick('beneficiary');
              onLinkClick('beneficiary');
            }}
          >
            <FaUserFriends className="mr-4 ml-3" /> Beneficiary
          </li>
          <li
            className={`${activeLink === "account" ? "bg-red-500 text-white" : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => {
              handleClick('account');
              onLinkClick('account');
            }}
          >
            <FaShieldAlt className="mr-4 ml-3" /> Account Limits
          </li>
          <li
            className={`${activeLink === "profile" ? "bg-red-500 text-white" : "text-black"
              } flex items-center p-2 cursor-pointer text-xl h-16`}
            onClick={() => {
              handleClick('profile');
              onLinkClick('profile');
            }}
          >
            <FaUser className="mr-4 ml-3" /> Profile
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;