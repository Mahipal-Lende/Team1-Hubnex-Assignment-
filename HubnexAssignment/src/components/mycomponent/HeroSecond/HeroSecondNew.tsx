import RetroGrid from "@/components/ui/retro-grid";
import React from "react";
// import HeroGalleryMiddle from "./HeroGalleryMiddle";
import HeroGalleryMiddle from "./HeroGalleryMiddleNew";
import { LuComputer } from "react-icons/lu";

const HeroSecondNew: React.FC = () => {
  return (
    <div className="my-16 px-4 box-border">
      {/* RetroGrid Component */}
      <RetroGrid />

      {/* Title */}
      <div className="text-center my-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Benefits to Join Hubnex Labs
        </h1>
      </div>

      {/* Grid Section */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {/* Card 1 */}
        <div className="relative w-full sm:w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-300">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1683880731060-efedd8b4d382?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwYmFja2dyb3VuZHxlbnwwfDF8MHx8fDA%3D')",
            }}
          ></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
            {/* Title */}
            <div className="p-4">
              <h1 className="text-white text-xl font-bold">On Time Delivery</h1>
            </div>

            {/* Description Section */}
            <div className="p-4 bg-black bg-opacity-80 rounded-t-lg h-1/4 transition-all duration-300 hover:h-[calc(25%+20px)]">
              <LuComputer className="text-white text-3xl mb-4" />
              <p className="text-white text-sm leading-relaxed">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>

        {/* Cards 2 and 3 using HeroGalleryMiddle */}
        <HeroGalleryMiddle
          url={
            "url('https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvcnBvcmF0ZSUyMHRlYW18ZW58MHwxfDB8fHww')"
          }
        />
        <HeroGalleryMiddle
          url={
            "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwdGVhbXxlbnwwfDF8MHx8fDA%3D')"
          }
        />
      </div>
    </div>
  );
};

export default HeroSecondNew;
