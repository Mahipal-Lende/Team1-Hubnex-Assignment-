
import React from 'react';
import Button_NoBG from '../Basic_Component_lib/Button_NoBG';
import Button_BlueBG from '../Basic_Component_lib/Button_BlueBG';
interface imageurl{
  url : string;
  title : string;
}

export const HeroContentWoImg: React.FC <imageurl> = ({url, title}) => {
  return (
    <div className='items-center my-8'>
        <div className="">
         <h1 className="text-5xl px-3 mx-3 font-semibold text-gray-900 text-center">{title}</h1>

         <div className="flex space-x-4 justify-center my-10">
          <Button_NoBG buttonName={'Contact Us'} ></Button_NoBG>

          <Button_BlueBG buttonName={'Join Us'}></Button_BlueBG>
        
         </div>

         <div className="flex items-center space-x-8 mt-4 justify-center">
           <div className="flex items-center space-x-2">
            <img src={url} alt="User" className="w-8 h-8 rounded-full" />
            <p className="text-gray-700 font-medium">5,910+</p>
            <p className="text-gray-500">Companies are using & it’s growing every day</p>
           </div>
           <div className="flex items-center space-x-2">
            <p className="text-gray-700 font-medium">4.5/5</p>
            <p className="text-yellow-500">★★★★★</p>
            <p className="text-gray-500">Trusted by the top companies worldwide</p>
           </div>
         </div>
    </div>
    </div>
  );
};

