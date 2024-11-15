
import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { CompanyLogos } from './CompanyLogos';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <HeroContent />
        <HeroImage imageUrl="https://s3-alpha-sig.figma.com/img/3459/1306/8b659eea92f8fac3c8bacae4f562ea37?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kkvec4ftg0VxYNn~8ogHwVGWMkRgbX9~VXWriWUCOPTWRilykvXV8Ms0FMIGUUWQPdv7rxhAPhsaSmmjVpg2ocafh5Wb6OdD4jqeMDUT6kxk5pah8ELHvVLZC1hSb0laF89EljJLR3TZYQLuMVV2SZSp0LG~giGGB7DoX-tc~vq~6Yq-Z6QwgVXZkuLAsMEMVbw37~0wQ~QkJNfWJkN2IVhgtJxBoT20LCKQlR7Wnlvp8cyLcVhoxWyTGpkrj9eNqoAMDwg41CXocChy5fBnUHJS667VcHq2QXa98defcYDns5mFH54hLr-5f~g8hsGws4SP2fylY5QG2gzxhIY1UQ__" />
      </div>
      <CompanyLogos />
    </div>
  );
};

export default HeroSection;



