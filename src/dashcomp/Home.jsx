// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Img from "../assets/img/basil_exchange-outline.png";
import Flag from "../assets/img/twemoji_flag-nigeria.png";
import RedCircle from "../assets/img/Ellipse 4.png";
import Send from "../assets/img/bi_send-fill.png";
import UK from "../assets/img/twemoji_flag-united-kingdom.png";
import Cancel from "../assets/img/hugeicons_cancel-01.png";
import AddImg from "../assets/img/ic_baseline-person-add.png";
import Search from "../assets/img/ic_sharp-search.png";
import User1 from "../assets/img/user01.png";
import User2 from "../assets/img/user02.png";
import User3 from "../assets/img/user03.png";

const Home = () => {
  const [showConfirmForm, setShowConfirmForm] = useState(false);
  const [TransactForm, setTransactForm] = useState(false);
  const [ShowBene, setShowBene] = useState(false);

  const [formData, setFormData] = useState({
    sendAmount: "",
    paymentMethod: "Bank transfer",
    receiveAmount: "",
    currencySend: "UK",
    currencySend2: "NGN",
    currencyReceive: "NGN",
    currencyReceive2: "UK",
    rate: "1 UK = 1700 NGN",
    charges: 0,
    Bene: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    // Navigate to the review page and pass the formData
    navigate("/Receiver", { state: formData });
  };

  function handleOverlayToggle() {
    setShowConfirmForm(!showConfirmForm);
  }

  function handleOverlayToggle2() {
    setTransactForm(!TransactForm);
  }

  function handlePrevPage() {
    setShowConfirmForm(!showConfirmForm);
  }

  function handleOverlayToggle3() {
    setShowBene(!ShowBene);
  }

  const transfers = [
    {
      userImage: User1,
      userName: "Elizabeth Moses",
      amount: "NGN650,000",
      status: "Successful",
    },
    {
      userImage: User2,
      userName: "Aisha Ibrahim",
      amount: "NGN850,000",
      status: "Successful",
    },
    {
      userImage: User3,
      userName: "Murtala Muktar",
      amount: "NGN850,000",
      status: "Successful",
    },
  ];

  return (
    <div className="lg:h-screen min-h-screen">
      <div className="hidden lg:block text-left font-medium text-[26px] absolute left-[290px] top-32">
        Welcome
      </div>

      <div className="flex flex-wrap justify-center gap-5 lg:mt-36 lg:ml-[-13rem] mt-24">
        <div
          className="bg-white rounded-[15px] p-5 flex flex-col gap-2.5 items-start justify-start w-full md:w-[239px] h-[146px]"
          style={{ boxShadow: "rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex flex-col gap-5 items-start justify-start w-full relative">
            <div className="flex flex-row gap-2.5 items-center justify-start relative">
              <div className="bg-red-600 flex rounded-[19px]">
                <img
                  src={Img}
                  className="w-[38px] h-[38px] p-2 filter brightness-0 invert"
                />
              </div>
              <div className="text-[24px] font-semibold">20 </div>
            </div>
            <div className="text-lg font-normal">Transfer Made </div>
          </div>
        </div>

        <div
          className="bg-white rounded-[15px] p-5 flex flex-col gap-2.5 items-start justify-start w-full md:w-[239px] h-[146px]"
          style={{ boxShadow: "rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex flex-col gap-5 items-start justify-start w-full relative">
            <div className="flex flex-row gap-2.5 items-center justify-start relative">
              <div className="bg-red-600 flex rounded-[19px]">
                <img
                  src={Img}
                  className="w-[38px] h-[38px] p-2 filter brightness-0 invert"
                />
              </div>
              <div className="text-[24px] font-semibold">5 </div>
            </div>
            <div className="text-lg font-normal">Beneficiaries </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[518px] w-full mx-auto mt-10 rounded-2xl py-6 px-5 bg-white shadow-2xl lg:ml-[14rem] ml-0">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-[20px] text-center">
            Recent Transfers
          </h2>
          <div className="flex flex-col gap-6 mt-6">
            {/** Transfer Item Component */}
            {transfers.map((transfer, index) => (
              <NavLink to={"/ReviewPage"} key={index}>
                <div className="flex items-center justify-between w-full h-12 py-3 px-5 bg-green-100 rounded-[15px] shadow-md transition-transform transform hover:scale-105">
                  <div className="flex items-center gap-3">
                    <img
                      src={transfer.userImage}
                      className="w-9 h-9 rounded-full"
                      alt={transfer.userName}
                    />
                    <p className="font-normal text-base truncate w-32">
                      {transfer.userName}
                    </p>
                    <div className="flex items-center gap-2">
                      <img src={Flag} className="w-5 h-5" alt="Currency Flag" />
                      <p className="font-normal text-base">{transfer.amount}</p>
                    </div>
                    <p className="font-normal text-base text-green-600">
                      {transfer.status}
                    </p>
                    <p className="text-red-600 cursor-pointer">View</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[518px] h-auto absolute top-[712px] left-1/2 transform -translate-x-1/2 rounded-[15px] p-4 gap-3 bg-white shadow-2xl lg:mt-2 mt-28 -ml-7 md:ml-20 lg:ml-[-6.4rem]">
        <div className="w-full h-auto gap-5">
          <div className="w-full h-auto gap-5">
            <h3 className="w-full h-auto font-medium text-2xl">
              Current Limits
            </h3>
            <div className="w-full flex flex-col md:flex-row items-center justify-between mt-3">
              <div className="flex flex-col w-full md:w-[142px] h-auto gap-[5px]">
                <p className="font-normal text-lg text-gray-500">Daily limit</p>
                <span className="text-[18px] font-medium">20,000 UK</span>
              </div>

              <div className="flex flex-col w-full md:w-[142px] h-auto gap-[5px] mt-3 md:mt-0">
                <p className="font-normal text-lg text-gray-500">
                  Yearly limit
                </p>
                <span className="text-[18px] font-medium">1,000,000 UK</span>
              </div>
            </div>
            <h4 className="w-full h-auto text-[15.2px] font-normal mt-5">
              If you want higher limits, temporarily or permanently,
              <NavLink to={"/AccountLimits"} className="text-red-600">
                {" "}
                click here
              </NavLink>
            </h4>
          </div>
        </div>
      </div>

      <div className="flex absolute left-[790px] top-[130px] p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 w-[448px] h-[800px]">
          <h2 className="w-[220px] h-11 absolute top-9 left-40 font-medium text-[23px]">
            Make a Transfer
          </h2>
          <div className="w-[532px] h-[700px] absolute top-[120px] left-[31px] gap-[32px]">
            <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-2 px-[24px] gap-[10px] mb-10">
              <label className="block text-base font-medium text-gray-500">
                You send
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  name="sendAmount"
                  value={formData.sendAmount}
                  onChange={handleInputChange}
                  className="bg-transparent outline-none rounded-lg p-2 w-[300px] placeholder-black placeholder:font-medium placeholder:text-xl"
                  placeholder="500"
                />
                <img src={UK} className="w-[20px] h-[20px] mr-[4px]" />
                <select className="border-none font-normal text-[18px] outline-none bg-transparent w-20">
                  <option>{formData.currencySend}</option>
                  <option>{formData.currencySend2}</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-3 px-[24px] gap-[10px] mb-10">
              <label className="block text-base font-medium text-gray-500">
                Payment method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="border-none text-[18px] outline-none text-xl font-medium w-[365px] h-[27px] bg-transparent"
              >
                <option>Bank transfer</option>
                <option>Credit cards</option>
                <option>Debit cards</option>
                <option>Prepaid cards</option>
              </select>
            </div>

            <div
              value={formData.Bene}
              onChange={handleInputChange}
              onClick={handleOverlayToggle3}
              className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-3 px-[24px] gap-[10px] mb-10"
            >
              {/* Add Recipient */}
              {ShowBene && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="w-[421px] h-[451px] bg-white rounded-[15px]">
                    <img
                      src={Cancel}
                      className="relative top-[10px] left-[92%] cursor-pointer"
                    />
                    <div className="relative left-[158px] top-[36px]">
                      <NavLink to={"/AddBeneficiary"}>
                        <button className="w-[166px] h-[48px] bg-red-600 text-white flex items-center gap-[10px] p-[10px] rounded-[15px]">
                          <img
                            src={AddImg}
                            alt="Add Beneficiary"
                            className="w-[24px] h-[24px] filter invert"
                          />
                          <p className="font-medium text-[14.2px]">
                            Add beneficiary
                          </p>
                        </button>
                      </NavLink>
                    </div>
                    <div className="relative w-[331px] h-[50px] top-[60px] left-[43px] flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="search"
                        className="bg-gray-300 w-[331px] h-[50px] rounded-3xl outline-none py-3 px-8 placeholder:text-gray-500 placeholder:font-normal placeholder:text-[18px]"
                      />
                      <img
                        src={Search}
                        alt="search"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-7 h-7"
                      />
                    </div>
                    <div className="w-[299px] h-[194px] gap-[22px] relative top-[90px] left-[53px]">
                      <div className="w-[240px] h-[50px]">
                        <NavLink to={"/Dashboard"} onChange={handleInputChange}>
                          <div className="flex items-center justify-between flex-row mb-5">
                            <img
                              className="w-[50px] h-[50px] rounded-full"
                              src={User1}
                            />
                            <h2 className="h-[27px] font-normal text-[18px] ml-3 whitespace-nowrap">
                              Musa Ibrahim Imam
                            </h2>
                          </div>
                        <div className="flex items-center justify-between flex-row mb-5">
                          <img
                            className="w-[50px] h-[50px] rounded-full"
                            src={User2}
                            />
                          <h2 className="h-[27px] font-normal text-[18px] whitespace-nowrap ml-3">
                            Aisha Shehu Muhammad{" "}
                          </h2>
                        </div>
                        <div className="flex items-center justify-between flex-row">
                          <img
                            className="w-[50px] h-[50px] rounded-full"
                            src={User3}
                            />
                          <h2 className="h-[27px] font-normal text-[18px] ml-3 whitespace-nowrap">
                            Ibrahim Adamu ISah
                          </h2>
                        </div>
                            </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-100 w-[410px] h-[80px] rounded-[10px] py-2 px-[24px] gap-[10px] mb-10">
              <label className="block text-base font-medium text-gray-500">
                Recipient gets
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  name="receiveAmount"
                  value={formData.receiveAmount}
                  onChange={handleInputChange}
                  className="bg-transparent outline-none rounded-lg p-2 w-[300px] placeholder-black placeholder:font-medium placeholder:text-xl"
                  placeholder="850,000"
                />
                <img src={Flag} className="w-[20px] h-[20px] mr-[4px]" />
                <select className="border-none font-normal text-[18px] outline-none bg-transparent w-24">
                  <option>{formData.currencyReceive}</option>
                  <option>{formData.currencyReceive2}</option>
                </select>
              </div>
            </div>

            <div className="w-[513px] h-[63px] gap-[15px] mb-10 mt-12">
              <div className="flex justify-between w-[402px] h-7 mb-3">
                <div className="h-[24px] gap-[16px]">
                  <div className="flex items-center w-20 justify-between">
                    <img src={RedCircle} />
                    <p className="text-gray-600 ml-6">Rate</p>
                  </div>
                </div>
                <span className="w-[124px] h-7 font-normal text-[16px]">
                  {formData.rate}
                </span>
              </div>

              <div className="flex justify-between w-[515px] h-7">
                <div className="h-[24px] gap-[16px]">
                  <div className="flex items-center w-20 justify-between">
                    <img src={RedCircle} />
                    <p className="text-gray-600 ml-6">Charges</p>
                  </div>
                </div>
                <span className="w-[124px] h-7 font-normal text-[16px]">
                  {formData.charges}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                handleOverlayToggle();
              }}
              className="bg-red-600 text-white rounded-[10px] py-[16px] px-[50px] w-[410px] h-[62px] gap-[10px] flex items-center justify-center"
            >
              Send <img src={Send} className="filter invert" />
            </button>
          </div>
        </div>
      </div>

      {/*ConfirmForm OverLay */}
      {showConfirmForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-lg relative">
            {/* Confirm Form */}
            <h2 className="text-xl sm:text-2xl lg:text-[26px] text-center font-medium mt-4">
              Are you sure you want to proceed?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <button
                onClick={handlePrevPage}
                className="w-full sm:w-[45%] h-12 sm:h-[68px] rounded-lg py-3 px-6 text-black bg-gray-300 font-semibold text-base sm:text-lg lg:text-[24px]"
              >
                No
              </button>
              <button
                onClick={handleOverlayToggle2}
                className="w-full sm:w-[45%] h-12 sm:h-[68px] rounded-lg py-3 px-6 text-white bg-red-600 font-semibold text-base sm:text-lg lg:text-[24px]"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reason for transfer form */}
      {TransactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 sm:p-8 rounded-[20px] shadow-lg relative w-[90%] max-w-2xl">
            {/* Reason for Request */}
            <div className="mb-6 mt-4">
              <label className="block text-black text-base sm:text-[20px] font-normal mb-2">
                Reason for transfer
              </label>
              <select className="outline-none text-sm sm:text-[18px] w-full py-3 px-4 bg-gray-100 text-gray-600 font-normal rounded-[10px]">
                <option>-Select-</option>
                <option>Paying Bills or Loans</option>
                <option>Sending Money to Family</option>
                <option>Sending Money to Friends</option>
                <option>Purchasing Goods or Services</option>
              </select>
            </div>

            {/* Select Source of Funds */}
            <div className="mb-6">
              <label className="block text-black text-base sm:text-[20px] font-normal mb-2">
                Select source of funds
              </label>
              <select className="outline-none text-sm sm:text-[18px] w-full py-3 px-4 bg-gray-100 text-gray-600 font-normal rounded-[10px]">
                <option>-Select-</option>
                <option>Personal Savings</option>
                <option>Loans</option>
                <option>Investments</option>
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center gap-2 mt-[-8px]">
              <input type="checkbox" className="w-4 h-4" required />
              <p className="text-sm sm:text-[16px] font-normal text-gray-700 text-center">
                I agree to the{" "}
                <a href="#" className="text-red-600">
                  terms
                </a>{" "}
                &{" "}
                <a href="#" className="text-red-600">
                  conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-red-600">
                  privacy policy
                </a>
                .
              </p>
            </div>

            {/* Proceed Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleFormSubmit}
                className="bg-red-600 text-white font-semibold text-base sm:text-[24px] py-3 px-8 sm:py-[16px] sm:px-[50px] w-full max-w-xs rounded-[10px]"
              >
                Send now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
