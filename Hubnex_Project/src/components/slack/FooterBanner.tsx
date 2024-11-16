import React from 'react';

interface FooterBannerProps {
  message: string;
  buttonText: string;
}

export const FooterBanner: React.FC<FooterBannerProps> = ({ message, buttonText }) => (
  <div className="flex flex-row bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 text-center justify-between">
    <div id="para" className='self-start'>
    <p className="font-medium pl-5">Work better, together</p>
    <p className="text-lg font-bold pl-5">{message}</p>
    </div>
    
    <div id="btn">
    <button className="mt-4 px-6 py-2 max-w-[250px] bg-white text-purple-600 mr-5 font-semibold rounded-md hover:bg-gray-100">
      {buttonText} →
    </button>
    </div>
  </div>
);
