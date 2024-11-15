import React from 'react';

interface MainSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const MainSection: React.FC<MainSectionProps> = ({ title, subtitle, buttonText }) => (
  <div className="text-center space-y-4">
    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    <p className="text-gray-600">{subtitle}</p>
    <button className="mt-4 px-6 py-2 border border-gray-900 rounded-md text-gray-900 font-semibold hover:bg-gray-100">
      {buttonText} →
    </button>
  </div>
);
