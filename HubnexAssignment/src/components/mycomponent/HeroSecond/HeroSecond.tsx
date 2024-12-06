import RetroGrid from '@/components/ui/retro-grid';
import React from 'react'
import HeroGalleryMiddle from './HeroGalleryMiddle';
import { LuComputer } from "react-icons/lu";




const HeroSecond:React.FC = () => {
  return (
    <div className='my-10 box-border'>
        <RetroGrid>
        </RetroGrid>
        <div className=' p-4'>
            <h1 className='text-center text-5xl'>Benefits to Join Hubnex Labs</h1>
            

        <div className="w-auto mx-auto h-screen flex items-center justify-around box-border">
      <div className="relative w-1/4 h-5/6 rounded-lg overflow-hidden bg-cover bg-center shadow-lg transition-all duration-300">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1683880731060-efedd8b4d382?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwYmFja2dyb3VuZHxlbnwwfDF8MHx8fDA%3D')", 
          }}
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
          {/* Title */}
          <div className="p-6">
            <h1 className="text-white text-2xl font-bold">On Time Delivery</h1>
          </div>

          {/* Description Section */}
          <div
            className="p-6 bg-black rounded-t-lg transition-all duration-300 ease-in-out hover:h-[calc(25%+20px)] h-1/4"
            style={{ minHeight: "150px" }}
          >
            <LuComputer className='text-white text-3xl mt-8'/>

            <p className="text-white text-sm leading-relaxed">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      <HeroGalleryMiddle url={"url('https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvcnBvcmF0ZSUyMHRlYW18ZW58MHwxfDB8fHww')"}></HeroGalleryMiddle>
      
      <HeroGalleryMiddle url={"url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwdGVhbXxlbnwwfDF8MHx8fDA%3D')"}></HeroGalleryMiddle>
    </div>


        </div>
    </div>
  )
}

export default HeroSecond;
