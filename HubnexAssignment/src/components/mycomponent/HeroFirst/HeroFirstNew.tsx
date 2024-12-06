import React from "react";
import Button_NoBG from "../Basic_Components/Button_NoBG";
import Button_BlueBG from "../Basic_Components/Button_BlueBG";
import AvatarCircles from "@/components/ui/avatar-circles";
import NumberTicker from "@/components/ui/number-ticker";
import { IoMdStar } from "react-icons/io";
import Marquee from "react-fast-marquee";

const HeroFirst: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-wrap w-full px-4 my-4 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 flex flex-col">
          {/* Heading and Paragraph */}
          <div className="w-full lg:w-5/6 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold pl-4 lg:pl-8">
              SaaS growth with weekly tips.
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
        <div className="w-full lg:w-2/5 flex justify-center lg:mt-0 mt-10">
          <div className="rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[500px] lg:min-w-[500px] mt-20">
            <img
              src="https://s3-alpha-sig.figma.com/img/3459/1306/8b659eea92f8fac3c8bacae4f562ea37?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pnS~QlNshPA8Gd0gVlxlEegaQs-Ai184o-ODQlaKzFwnqxuxtfFuKo-elozGAna794VvTvusU073Um~eV~25~zldhRDYvR7fmwiGuqpsmWSZVUjUSnh9~LkxV92sX~MjD7wzYIcX9PWUg8OWRyxNr9XThg6bEOCeTxUXvFvhPFPHYQUTjlCs5yKYN-nl3XvzHYqAHPlH-RcN5Agn5ThjmIRdfjv-24VJjuRiILBX98SM29m~tzAgLGw84LFE1BSs1bv~EWI5v7xK7-HQQgRMeUU3K47jd5YXE6uru-o6dfZ~n1S-EfTlWYxqFXK3F1XGT6unpXwsRrL9X28sBreEdQ__"
              alt="Hero Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-8">
        <Marquee speed={70}>
          <div className="w-60 mx-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkz5xFqM708khbZ7YCczAOgDalSA7rBBdOHQ&s"
              alt="Chorus logo"
              className="w-full"
            />
          </div>
          <div className="w-60 mx-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png"
              alt="TCS logo"
              className="w-full"
            />
          </div>
          <div className="w-60 mx-4">
            <img
              src="https://getvectorlogo.com/wp-content/uploads/2023/03/pantera-capital-vector-logo-2023.png"
              alt="Pantera"
              className="w-full"
            />
          </div>
          <div className="w-60 mx-14">
            <img
              src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png"
              alt="Reddit"
              className="w-full"
            />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default HeroFirst;
