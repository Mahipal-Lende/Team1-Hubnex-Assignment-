import React from "react";
import Button_NoBG from "../Basic_Components/Button_NoBG";
import Button_BlueBG from "../Basic_Components/Button_BlueBG";
import AvatarCircles from "@/components/ui/avatar-circles";
import NumberTicker from "@/components/ui/number-ticker";
import { IoMdStar } from "react-icons/io";
import { MarqueeDemo } from "@/components/ui/MarqueeDemo";
const HeroThird: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-wrap w-full px-4 my-4 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 flex flex-col">
          {/* Heading and Paragraph */}
          <div className="w-full lg:w-5/6 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold pl-4 lg:pl-8">
            Join Your Partner Network
            </h1>
            <p className="mt-4 px-4 lg:px-8 text-gray-600">
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page, or admin panel for your
              SaaS. Clarity gives you the blocks & components you need to
              succeed.
            </p>
          </div>

          {/* Buttons and Ratings */}
          <div className="w-full lg:w-5/6">
            {/* Buttons */}
            <div className="flex flex-wrap mb-6 px-4 lg:px-8">
              <div className="mr-4 mb-4">
                <Button_NoBG buttonName={"Contact Us"} />
              </div>
              <div className="mr-4 mb-4">
                <Button_BlueBG buttonName={"Join Us"} />
              </div>
            </div>

            {/* Ratings and Trust Info */}
            <div className="flex flex-wrap items-center px-4 lg:px-8">
              {/* Avatar and Numbers */}
              <div className="flex items-center">
                <AvatarCircles
                  avatarUrls={[
                    {
                      imageUrl:
                        "https://thumbs.dreamstime.com/b/beautiful-smiling-businesswoman-arms-folded-standing-black-suit-brown-jacket-isolated-white-background-also-105189427.jpg",
                      profileUrl: "",
                    },
                    {
                      imageUrl:
                        "https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",
                      profileUrl: "",
                    },
                    {
                      imageUrl:
                        "https://www.transparentpng.com/thumb/happy-person/VJdvLa-download-happy-blackman-png.png",
                      profileUrl: "",
                    },
                    {
                      imageUrl:
                        "https://e7.pngegg.com/pngimages/156/499/png-clipart-business-man-businessperson-desktop-business-man-image-file-formats-photography-thumbnail.png",
                      profileUrl: "",
                    },
                  ]}
                  className="mr-4"
                />
                <NumberTicker value={5910} />
                <span className="ml-1">+</span>
              </div>

              {/* Ratings */}
              <div className="ml-8">
                <div className="flex items-center">
                  <span className="text-lg font-semibold mr-2">4.5/5</span>
                  <span className="flex text-blue-800">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Trusted by the top companies worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center items-center mt-8 lg:mt-0">
          <div className="bg-white rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[500px] lg:min-w-[500px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1661589179615-7edb04711cc6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero Image"
              className="h-full pt-16"
            />
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="flex flex-wrap justify-between align-middle">
      
      <div className="min-h-[300px] max-w-full bg-blue-700 self-center py-12">
      <MarqueeDemo></MarqueeDemo>
      </div>
      </div>
    </>
  );
};

export default HeroThird;
