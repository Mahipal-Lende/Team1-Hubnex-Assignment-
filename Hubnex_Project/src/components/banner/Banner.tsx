import React from 'react';

const technologies = ["Edge Computing", "Connectivity", "Cloud Platforms", "Protocols and Standards", "Development and Tools Platform", "Operating Systems"];

const Banner: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white h-auto py-7 flex items-center justify-between px-4">
      {/* Left Side Text */}
      <h2 className="text-xl font-semibold">Technologies we use!</h2>

      {/* Right Side Technology List */}
      <div className="flex flex-wrap gap-3 w-2/3 flex-grow-0">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white text-blue-700 px-4 py-2 rounded-md text-base font-semibold shadow-md flex-1 flex-grow-0"
            style={{ minWidth: '22%' }} // Adjust width to make 3 items per row
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
