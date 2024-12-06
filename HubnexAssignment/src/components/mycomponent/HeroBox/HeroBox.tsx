import React from "react";
//import { LuPenSquare } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCogs, faFolder, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const HeroBox:React.FC = () => {
  return (
    <div className="container1 h-600px w-auto bg-slate-200 space-x-20 pb-20">

<h1 className="text-3xl font-bold text-center pt-5 pb-5">How to get on board with us</h1>
<div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Card 1 */}
      <div className="space-y-10 justify-center w-1/3 h-full bg-white shadow-md rounded-md overflow-hidden px-6 flex-grow-0 flex-shrink-0">
    <div className="p-4">
        <div className="pt-3 text-center">
        <div>
        
        <FontAwesomeIcon icon={faPencilAlt} className="text-blue-500 text-4xl py-5 justify-center" />

        </div>
           <button className="bg-white-500  text-center text-black font-medium border-3 border-black py-2 px-4 mx-auto rounded-full">
              Step 1
            </button>
        </div>
          <p className="text-black-700 text-xl font-bold text-center pt-10 pb-4" >
            Free Sign-Up
          </p>
          <p className="text-black-700 text-lg text-center pb-4">
             Register on our Partner Dashboard and have your contact details verified instantly.
          </p>
      </div>
      </div>

      {/* Card 2 */}
      <div className="space-y-10 justify-center w-1/3 h-full bg-white shadow-md rounded-md overflow-hidden px-6">
       
        <div className="p-4">
        <div className="pt-3 text-center">
        <div>
        <FontAwesomeIcon icon={faCogs} className="text-green-500 text-4xl py-5 justify-center" />

        </div>
           <button className="bg-white-500  text-center text-black font-medium border-3 border-black py-2 px-4 mx-auto rounded-full">
              Step 2
            </button>
        </div>
          <p className="text-black-700 text-xl font-bold text-center pt-10 pb-4" >
            Profile setup
          </p>
          <p className="text-black-700 text-lg text-center pb-4">
             Access your personalised dashboard to complete your profile.
          </p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="space-y-10 justify-center w-1/3 h-full bg-white shadow-md rounded-md overflow-hidden px-6">
       
        <div className="p-4">
        <div className="pt-3 text-center">
        <div>
        <FontAwesomeIcon icon={faFolder} className="text-yellow-500 text-4xl py-5 justify-center" />

        </div>
           <button className="bg-white-500  text-center text-black font-medium border-3 border-black py-2 px-4 mx-auto rounded-full">
              Step 3
            </button>
        </div>
          <p className="text-black-700 text-xl font-bold text-center pt-10 pb-4" >
            Showcase your Work
          </p>
          <p className="text-black-700 text-lg text-center pb-4">
            Upload your portfolio and past work examples to attract clients to your profile.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="space-y-10 justify-center w-1/3 h-full bg-white shadow-md rounded-md overflow-hidden px-6">
        
        <div className="p-4">
        <div className="pt-3 text-center">
        <div>
        <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500 text-4xl py-5 justify-center" />

        </div>
           <button className="bg-white-500  text-center text-black font-medium border-3 border-black py-2 px-4 mx-auto rounded-full">
              Step 4
            </button>
        </div>
          <p className="text-black-700 text-xl font-bold text-center pt-10 pb-4" >
            Starting Working
          </p>
          <p className="text-black-700 text-lg text-center pb-4">
          Get verified by our team and easily manage your work through our Partner Dashboard.
          </p>
        </div>
      </div>

    </div>



    </div>
    
    
    
  );
};

export default HeroBox;