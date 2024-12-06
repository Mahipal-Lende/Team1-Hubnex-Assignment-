import React from "react";

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const radius = 60; // Radius of the circle
  const strokeWidth = 10; // Thickness of the progress bar
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-[140px] h-[140px]">
      {/* Background Circle */}
      <svg
        width={radius * 2 + strokeWidth}
        height={radius * 2 + strokeWidth}
        className="transform -rotate-90"
      >
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="#e5e7eb" /* Tailwind color-gray-200 */
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="rgb(59, 130, 246)" /* Tailwind color-blue-500 */
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          className="transition-all duration-500"
          strokeLinecap="round"
        />
      </svg>
      {/* Text in the center */}
      <div className="absolute text-center">
        <span className="text-xl font-semibold text-blue-500">{percentage}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
