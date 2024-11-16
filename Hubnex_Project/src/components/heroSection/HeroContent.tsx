import React from 'react';
import Button_NoBG from '../Basic_Component_lib/Button_NoBG';
import Button_BlueBG from '../Basic_Component_lib/Button_BlueBG';

interface imageurl{
  url : string;
}

export const HeroContent: React.FC <imageurl> = ({url}) => {
  // const imgurl = "https://s3-alpha-sig.figma.com/img/be12/fc48/f65e8b4594f3089cce96c2bdbd9c1450?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Co12YADKxn65unCgxgy-X2wxueKljhjHhMJKZlcYcSRsyZdWPpDXsGIVIJdRTwpIIWFeMRrpBuqwo9NmoI7zzuT7iufuJelsoxJpo4pI0Oif8CfD~YL-M8C9GN6KC0~HYTWx6cmKjswEY8pI5ht236KsH7rTsN1~KpoDg3G1IG2fLuVbIDbfeI2X1YJ91ipB~fi848IzuCD3khH5KFuwGHGwwz-ZLDaotiVqFjE~ab4wdvvntQ0Z1FWldEmD2PCR5DAUElZ-rg45~BlJEEsyR0Rr9VLBWfknDxYp-fnXIAKWLL5r24D99YDb-3hK5OIIVn~wObg6MtGKSMColafddg__"
  return (
    <div className="lg:w-3/5 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">SaaS growth with weekly tips.</h1>
      <p className="text-gray-700 text-lg">
        Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.
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
