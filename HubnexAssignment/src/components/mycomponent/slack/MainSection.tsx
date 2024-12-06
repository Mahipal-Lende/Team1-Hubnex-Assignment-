import React from 'react';

interface MainSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const MainSection: React.FC<MainSectionProps> = ({ title, subtitle, buttonText }) => (
  <div className="text-center space-y-4 flex flex-col content-center w-full">
    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    <p className="text-gray-600">{subtitle}</p>
    <div className='flex flex-shrink content-center'>
    <button className='w-36 border-solid border-2 border-gray-600 text-black mx-auto rounded-md'>{buttonText}</button>
    </div>
  </div>
);
