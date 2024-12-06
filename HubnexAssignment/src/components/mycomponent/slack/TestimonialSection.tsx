import React from 'react';

interface TestimonialProps {
  title: string;
  quote: string;
  description: string;
  logoUrl: string;
  companyName: string;
  companyType: string;
}

export const TestimonialSection: React.FC<TestimonialProps> = ({  
  title, 
  quote, 
  description, 
  logoUrl, 
  companyName, 
  companyType 
}) => (


  <div className="text-center space-y-4 ml-20 mt-20 mb-20">


    <h2 className="text-3xl font-bold text-gray-900 text-center ">{title}</h2>

    <div id="imageandtext" className='flex items-center'>
    <div id="image_slack" className='w-1/5 flex justify-center'>
        <img src={logoUrl} alt={`${companyName} Logo`} className="" />
    </div>

    <div className="max-w-2xl mx-auto text-left space-y-4">
      <p className="text-gray-700 text-lg">“{quote}”</p>
      <p className="text-gray-500">“{description}”</p>

      <div className='flex flex-col'>
      <p className="font-semibold text-gray-800">{companyName}</p>
      <p className="text-gray-500">{companyType}</p>
      </div>
    </div>
    </div>

  </div>
);

