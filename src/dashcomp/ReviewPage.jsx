// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import HomeArrow from '../assets/img/Frame 257.png';
import { NavLink } from 'react-router-dom';

const ReviewPage = () => {
  const contentRef = useRef();
  const [currentDate, setCurrentDate] = useState('');

    useEffect(
        () => {
            const today = new Date();
            setCurrentDate(formatDate(today))
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

  // Function to download the content as PDF
  const downloadPdf = async () => {
    const content = contentRef.current;
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('review.pdf');
  };

  // Function to share the PDF
  const sharePdf = async () => {
    if (navigator.share) {
      const content = contentRef.current;
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], 'review.pdf', { type: 'application/pdf' });

      try {
        await navigator.share({
          title: 'Transaction Review',
          files: [file],
          text: 'Check out this transaction review!',
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  return (
    <div ref={contentRef}>
      <NavLink to={"/Dashboard"}>
        <img src={HomeArrow} alt="Home Arrow" className="w-[150px] h-[40px] absolute top-[20px] left-[25px] cursor-pointer" />
      </NavLink>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-[40px] mt-10">500 UK Sent</h1>
        <p className="font-medium text-[26px]">Transfer to Musa Ibrahim</p>

        <div className="flex w-full max-w-[778px] h-[483px] items-center justify-between mt-10">
          <div className="w-56 p-3 space-y-3 text-[20px] font-normal leading-[45px]">
            <p>Reference No</p>
            <p>Status</p>
            <p>Transaction date</p>
            <p>Recipient</p>
            <p>Amount sent</p>
            <p>Completed on</p>
            <p>Fee</p>
            <p>Payment method</p>
          </div>
          <div className="p-3 space-y-3 text-[20px] font-normal leading-[45px] flex items-end justify-center flex-col">
            <p>89578833456593334</p>
            <p className="bg-green-500 text-white w-[113px] h-[36px] rounded-[31px] gap-[10px] flex items-center justify-center py-1 px-[15px]">Success</p>
            <p>{currentDate}</p>
            <p>Musa Ibrahim</p>
            <p>500 UK</p>
            <p>{currentDate}</p>
            <p>0</p>
            <p>Bank transfer</p>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[770px] h-[251px] mt-16">
          <h2 className="font-semibold text-[26px]">Receiver details</h2>
          <div className=" flex items-center justify-between">
            <div className="p-10 space-y-3 text-[20px] font-normal leading-[45px]">
              <p>Amount received</p>
              <p>Bank name</p>
              <p>Account number</p>
            </div>
            <div className="p-10 space-y-3 text-[20px] font-normal leading-[45px] flex items-end justify-center flex-col">
              <p>NGN 850,000</p>
              <p>United Bank For Africa</p>
              <p>{'2345236xxx'}</p>
            </div>
          </div>
        </div>

        <div className='h-[68px] gap-[64px] flex items-center justify-center mt-10 mb-10'>
          <button
            onClick={downloadPdf}
            className='w-[259px] h-[68px] rounded-[10px] gap-[10px] py-[16px] px-[50px] bg-gray-300 font-medium text-[24px] whitespace-nowrap'
          >
            Download PDF
          </button>
          <button
            onClick={sharePdf}
            className='w-[259px] h-[68px] rounded-[10px] gap-[10px] py-[16px] px-[50px] bg-red-600 font-medium text-[24px] text-white'
          >
            Share PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;