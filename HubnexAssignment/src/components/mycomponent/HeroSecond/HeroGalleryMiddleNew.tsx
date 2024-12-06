import React from "react";
import { FaUserGear } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";

interface UrlProps {
  url: string;
}

const HeroGalleryMiddle: React.FC<UrlProps> = ({ url }) => {
  return (
    <div className="flex flex-col items-center gap-6 box-border">
      {/* Top Card */}
      <div className="relative w-full sm:w-[300px] h-[200px] bg-black text-white rounded-lg shadow-lg p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
        <FaUserGear className="text-4xl mb-4" />
        <div>
          <h2 className="text-xl font-bold">Dedicated Project Manager</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* Middle Card */}
      <div
        className="relative w-full sm:w-[300px] h-[300px] bg-cover bg-center rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
        style={{
          backgroundImage: `${url}`,
        }}
      >
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent">
          <h2 className="text-lg font-bold text-white">Middle Card</h2>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="relative w-full sm:w-[300px] h-[200px] bg-black text-white rounded-lg shadow-lg p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
        <Ri24HoursFill className="text-4xl mb-4" />
        <div>
          <h2 className="text-xl font-bold">24*7 Round the Clock Support</h2>
          <p className="text-sm">This is the bottom card description.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroGalleryMiddle;
