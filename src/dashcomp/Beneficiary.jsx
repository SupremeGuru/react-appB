import { useState } from "react";
import Search from "../assets/img/ic_sharp-search.png";
import AddImg from "../assets/img/ic_baseline-person-add.png";
import { NavLink, useNavigate } from "react-router-dom";

const Beneficiary = () => {
  // Initial list of beneficiaries
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: "John Swead", country: "NGR - Naira" },
    { id: 2, name: "Jane Doe", country: "USA - Dollar" },
    { id: 3, name: "Alice Smith", country: "UK - Pound" },
    { id: 4, name: "Bob Johnson", country: "CAN - Dollar" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Handle delete action
  const handleDelete = (id) => {
    const updatedBeneficiaries = beneficiaries.filter(
      (beneficiary) => beneficiary.id !== id
    );
    setBeneficiaries(updatedBeneficiaries);
  };

  const navigate = useNavigate();
  const Page = () => {
    navigate("/ReviewPage");
  };

  // Search functionality
  const filterBeneficiaries = beneficiaries.filter((beneficiary) => (
    beneficiary.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  return (
    <div className="md:p-8 lg:ml-64 lg:mt-10 mt-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
        {/* Title and Search */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-medium mr-24 lg:mr-52">Beneficiary</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)} // update search term
              className="w-full md:w-[400px] h-10 md:h-12 bg-gray-300 rounded-full pl-4 pr-10 placeholder:text-gray-500"
            />
            <img
              src={Search}
              alt="search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>
        </div>

        {/* Add Beneficiary Button */}
        <NavLink to="/AddBeneficiary">
          <button className="bg-red-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg">
            <img
              src={AddImg}
              alt="Add Beneficiary"
              className="w-5 h-5 filter invert"
            />
            Add Beneficiary
          </button>
        </NavLink>
      </div>

      {/* Beneficiary List */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
        <div className="grid grid-cols-4 text-gray-600 text-sm md:text-lg font-medium mb-4 pb-2">
          <h2>Account Name</h2>
          <h2 className="text-right">Country</h2>
        </div>

        {/* Beneficiary Rows */}
        <div className="space-y-4">
        {filterBeneficiaries.length > 0 ? (
            filterBeneficiaries.map((beneficiary) => (
              <div
                key={beneficiary.id}
                className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
              >
                {/* Beneficiary Details */}
                <div>
                  <h1 className="text-black lg:text-lg text-base md:text-lg font-medium">
                    {beneficiary.name}
                  </h1>
                </div>
                <p className="text-base lg:text-lg md:text-lg mr-7">{beneficiary.country}</p>

                {/* Action Buttons */}
                <div className="flex gap-10">
                  <button className="font-medium" onClick={Page}>
                    View
                  </button>
                  <button
                    className="text-red-600 font-medium"
                    onClick={() => handleDelete(beneficiary.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No beneficiaries found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Beneficiary;
