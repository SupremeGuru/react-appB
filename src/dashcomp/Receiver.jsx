/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import BackArrow from '../assets/img/bx_arrow-back.png'
import Check from '../assets/img/Frame 308.png'

const ReviewPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const transaction = location.state; // Access the passed formData

    const [transactions, setTransactions] = useState([]);
    const [ShowPinQuest, setShowPinQuest] = useState(false);

    const handleOverLay = () => {
        setShowPinQuest(!ShowPinQuest);
    }

    useEffect(
        () => {
            // Fetch data from JSON server
            fetch('http://localhost:8000/transactions')
                .then(response => response.json())
                .then(data => setTransactions(data))
                .catch(error => console.error('Error fetching data:', error));
        }, []
    );

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Function to get day suffix (e.g., "st", "nd", "rd", "th")
        const getDaySuffix = (day) => {
            if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${day}${getDaySuffix(day)} ${month}, ${year}`;
    };

    const [currentDate, setCurrentDate] = useState('');

    useEffect(
        () => {
            const today = new Date();
            setCurrentDate(formatDate(today))
        }, []
    );

    const prevpage = () => {
        navigate('/Dashboard');
    }

    const [pin, setPin] = useState(["", "", "", ""]);

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

    return (
        <>
            <img src={BackArrow} className='w-[50px] h-[45px] relative top-[13px] left-[8px] cursor-pointer' onClick={prevpage} />
            <div className="flex items-center justify-center gap-[15px]">
                <h2 className='font-semibold text-[25px] lg:text-[30px] text-center w-[678px] h-[48px]'>Review</h2>
                {transactions.length > 0 && transaction && (
                    <div className='w-full max-w-[778px] h-auto flex md:flex-row items-center justify-between p-4 absolute top-[130px] left-[50%] transform -translate-x-1/2'>
                        <div className='w-full md:w-56 h-auto p-3 flex flex-col gap-4'>
                            <div className='font-normal text-[16px] lg:text-[20px] leading-[50px]'>
                                <p>Reference No</p>
                                <p>Transaction date</p>
                                <p>Recipient</p>
                                <p>Amount to send</p>
                                <p>Charges</p>
                                <p>Payment method</p>
                            </div>
                        </div>
                        <div className='w-full md:w-[229px] h-auto p-3 flex flex-col gap-4'>
                            <div className='font-normal text-[16px] lg:text-[20px] flex items-end justify-center flex-col leading-[50px]'>
                                <span>{transactions[0].Reference}</span>
                                <span className='text-[19px]'>{currentDate}</span>
                                <span>Musa Ibrahim</span>
                                <span>{transaction.sendAmount} {transaction.currencySend}</span>
                                <span>{transaction.charges}</span>
                                <span>{transaction.paymentMethod}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className='w-full max-w-[770px] h-auto absolute top-[500px] left-1/2 transform -translate-x-1/2 gap-[40px]'>
                    <h3 className='w-full h-auto font-semibold text-[20px] lg:text-[26px] mb-3 text-center'>Receiver details</h3>
                    {
                        transaction && (
                            <div className='w-full h-auto flex md:flex-row items-start justify-between px-4'>
                                <div className='w-full md:w-[204px] h-auto p-2 gap-[31px] flex flex-col'>
                                    <div className='font-normal text-[16px] lg:text-[20px] leading-[50px]'>
                                        <p>Account name</p>
                                        <p>Amount to receive</p>
                                        <p>Bank name</p>
                                        <p>Account number</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[261px] h-auto p-2 gap-[31px] leading-[50px] flex flex-col items-start md:items-center'>
                                    <div className='font-normal text-[16px] lg:text-[20px] leading-[50px] flex items-end justify-center flex-col'>
                                        <span>Musa Mamman Ibrahim</span>
                                        <span>{transaction.receiveAmount} {transaction.currencyReceive}</span>
                                        <span>United Bank For Africa</span>
                                        <span>2345236657</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className='max-w-[1022px] w-full h-auto absolute top-[820px] left-1/2 transform -translate-x-1/2 gap-[25px] p-4'>
                    <div className='w-full h-auto gap-[15px] flex items-start'>
                        <img src={Check} alt="Check" className='flex-shrink-0' />
                        <p className='text-red-600 text-sm md:text-base'>
                            Transaction will be completed upon payment confirmation in our bank account. Large/first payments may take up to 24 hours. Also, the rate is locked with a transaction, it will not be changed or altered even when the transaction has failed, cancelled, or expired.
                        </p>
                    </div>
                    <div className='w-full h-auto gap-[15px] flex items-start'>
                        <img src={Check} alt="Check" className='flex-shrink-0' />
                        <p className='text-red-600 text-sm md:text-base'>
                            Confirm that money will be sent from your account. If not, the whole transaction will be reversed.
                        </p>
                    </div>
                    <div className='w-full h-auto gap-[15px] flex items-start'>
                        <img src={Check} alt="Check" className='flex-shrink-0' />
                        <p className='text-red-600 text-sm md:text-base'>
                            Transaction of \$4999 or more per month may require additional proof of source of funds (Payslips, bank statement). This does not take account of your personal need or objective.
                        </p>
                    </div>
                </div>

                <div className='max-w-lg h-auto absolute top-[1100px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-between sm:gap-10'>
                    <NavLink to={'/Dashboard'}>
                        <button
                            className='w-full md:w-[259px] h-[68px] rounded-[10px] gap-[10px] py-[16px] px-[50px] bg-gray-300 font-semibold text-[24px] whitespace-nowrap mb-4 md:mb-0'
                        >
                            Edit
                        </button>
                    </NavLink>
                    <button
                        onClick={handleOverLay}
                        className='w-full md:w-[259px] h-[68px] rounded-[10px] gap-[10px] py-[16px] px-[50px] bg-red-600 font-semibold text-[24px] text-white whitespace-nowrap mb-5'
                    >
                        Make Payment
                    </button>
                </div>

                {/* Pin */}
                {ShowPinQuest && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="flex flex-col items-center max-w-[722px] h-auto rounded-[20px] bg-white p-6 sm:p-8">
                            <h4 className="text-center font-medium text-[24px] mt-8 sm:mt-12 text-lg sm:text-xl">
                                Please enter your pin
                            </h4>
                            <div className="mt-10 flex justify-center space-x-4">
                                {pin.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`pin-input-${index}`}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className="w-[93px] h-[93px] text-2xl text-center bg-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-600"
                                        aria-label={`Pin digit ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <NavLink to="/Notice">
                                <button className="w-[301px] h-[68px] mt-12 sm:mt-24 mb-4 py-3 sm:py-4 px-10 sm:px-12 rounded-lg bg-red-600 text-white font-semibold text-[18px] sm:text-[24px]">
                                    Next
                                </button>
                            </NavLink>
                        </div>
                    </div>
                )}

            </div>
        </>
    );

};

export default ReviewPage;