import React from 'react';
import Button_NoBG from '../Basic_Component_lib/Button_NoBG';
import Button_BlueBG from '../Basic_Component_lib/Button_BlueBG';

interface imageurl{
  url : string;
  title : string;
  description : string;
}



export const HeroContent: React.FC <imageurl> = ({url, title, description}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-700 text-lg">
        {description}
      </p>

      <div className="flex space-x-4">
        <Button_NoBG buttonName={'Contact Us'} ></Button_NoBG>

        <Button_BlueBG buttonName={'Join Us'}></Button_BlueBG>
        
        
        
      </div>

      <div className="flex items-center space-x-8 mt-4">
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
  );
};