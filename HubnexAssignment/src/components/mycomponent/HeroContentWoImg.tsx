import React from "react";
import Button_NoBG from "./Basic_Components/Button_NoBG";
import Button_BlueBG from "./Basic_Components/Button_BlueBG";
import AvatarCircles from "@/components/ui/avatar-circles";
import NumberTicker from "@/components/ui/number-ticker";
import { IoMdStar } from "react-icons/io";

const HeroFifth: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-wrap w-full px-4 my-4 items-center space-y-4">
        {/* Left Section */}
        <div className="w-full lg:w-full flex flex-col text-center space-y-6">
          {/* Heading and Paragraph */}
          <div className="w-full lg:w-full mb-8">
            <h1 className="text-5xl font-semibold pl-4 lg:p-12">
            We’re empowering businesses with the technology they need to lead change and innovate in a business landscape that waits for no one.
            </h1>
          </div>

          {/* Buttons and Ratings */}
          <div className="w-full lg:w-full">
            {/* Buttons */}
            <div className="flex flex-wrap justify-center mb-6 px-4 lg:px-8">
              <div className="mr-4 mb-4">
                <Button_NoBG buttonName={"Contact Us"} />
              </div>
              <div className="mr-4 mb-4">
                <Button_BlueBG buttonName={"Join Us"} />
              </div>
            </div>

            {/* Ratings and Trust Info */}
            <div className="flex flex-wrap justify-center px-4 lg:px-8 space-y-8">
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
              <div className="ml-20">
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

      </div>

    </>
  );
};

export default HeroFifth;
