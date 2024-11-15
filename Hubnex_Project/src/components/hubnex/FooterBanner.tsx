import React from 'react';

interface FooterBannerProps {
  message: string;
  buttonText: string;
}

export const FooterBanner: React.FC<FooterBannerProps> = ({ message, buttonText }) => (
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 text-center">
    <p className="font-medium">Work better, together</p>
    <p className="text-lg font-bold">{message}</p>
    <button className="mt-4 px-6 py-2 bg-white text-purple-600 font-semibold rounded-md hover:bg-gray-100">
      {buttonText} →
    </button>
  </div>
);
