import React from 'react';
import { FaCrown } from "react-icons/fa";

interface FooterBannerProps {
  message: string;
  buttonText: string;
}

export const FooterBanner: React.FC<FooterBannerProps> = ({ message, buttonText }) => (
  <div className="flex flex-row bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 justify-between mb-20">

    <div className=' flex ml-20 items-center'>
    <div>
    <FaCrown className='mr-4 text-3xl' />
    </div>
    <div id="para" className='flex flex-col'>
    <p>Work better, together</p>
    <p className="">{message}</p>
    </div>
    </div>
    
    <div id="btn">
    <button className="mt-4 px-6 py-2 max-w-[250px] bg-white text-purple-600 mr-5 font-semibold rounded-md hover:bg-gray-100">
      {buttonText} →
    </button>
    </div>
  </div>
);
