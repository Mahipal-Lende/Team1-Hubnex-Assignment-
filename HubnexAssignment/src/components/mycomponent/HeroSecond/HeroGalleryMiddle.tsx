import React from 'react'
import { FaUserGear } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";


interface url{
    url : string
}

const HeroGalleryMiddle : React.FC<url> = ({url}) => {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center box-border gap-4">

      <div className="relative w-full max-w-md">
        <div
          className="bg-black text-white rounded-lg shadow-lg p-6 h-40 hover:h-48 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ minHeight: "96px" }}
        >
            <FaUserGear className='text-3xl text-white' />
          <h2 className="text-white text-lg font-bold">Dedicated Project Manager</h2>
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Middle Card */}
      <div className="relative w-full max-w-md h-80">
        <div
          className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden h-80"
          style={{
            backgroundImage:`${url}`, // Replace with your image URL
            minHeight: "192px",
          }}
        >
          <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
            <h2 className="text-white text-lg font-bold">Middle Card</h2>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="relative w-full max-w-md">
        <div
          className="bg-black text-white rounded-lg shadow-lg p-6 h-40 hover:h-48 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ minHeight: "96px" }}
        >
            <Ri24HoursFill />

            <h2 className="text-white text-lg font-bold">24*7 round the clock support</h2>
          <p className="text-white text-sm">
            This is the bottom card description. Hover to expand it upward.
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default HeroGalleryMiddle
