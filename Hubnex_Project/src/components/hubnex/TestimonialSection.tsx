import React from 'react';

interface TestimonialProps {
  userCount: string;
  title: string;
  quote: string;
  description: string;
  logoUrl: string;
  companyName: string;
  companyType: string;
}

export const TestimonialSection: React.FC<TestimonialProps> = ({ 
  userCount, 
  title, 
  quote, 
  description, 
  logoUrl, 
  companyName, 
  companyType 
}) => (
  <div className="text-center space-y-4">
    <p className="text-blue-600 font-medium">{userCount}</p>
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

    <div className="max-w-2xl mx-auto text-left space-y-4">
      <p className="text-gray-700 text-lg">“{quote}”</p>
      <p className="text-gray-500">“{description}”</p>

      <div className="flex items-center space-x-4">
        <img src={logoUrl} alt={`${companyName} Logo`} className="w-20 h-20" />
        <div>
          <p className="font-semibold text-gray-800">{companyName}</p>
          <p className="text-gray-500">{companyType}</p>
        </div>
      </div>
    </div>
  </div>
);
