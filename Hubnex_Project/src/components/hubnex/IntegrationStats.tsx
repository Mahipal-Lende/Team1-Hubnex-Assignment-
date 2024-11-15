import React from 'react';

interface IntegrationStatsProps {
  stats: string[];
}

export const IntegrationStats: React.FC<IntegrationStatsProps> = ({ stats }) => (
  <div className="bg-gray-50 rounded-lg shadow-lg py-6">
    <div className="grid grid-cols-5 gap-4 px-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-semibold text-purple-600">{stat}</p>
          <p className="text-gray-500">Integrations</p>
        </div>
      ))}
    </div>
  </div>
);
