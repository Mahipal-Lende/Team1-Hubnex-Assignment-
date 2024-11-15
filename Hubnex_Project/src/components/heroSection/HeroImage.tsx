import React from 'react';

interface HeroImageProps {
  imageUrl: string;
}

// const image : HeroImageProps = {
//     imageUrl : https://s3-alpha-sig.figma.com/img/3459/1306/8b659eea92f8fac3c8bacae4f562ea37?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kkvec4ftg0VxYNn~8ogHwVGWMkRgbX9~VXWriWUCOPTWRilykvXV8Ms0FMIGUUWQPdv7rxhAPhsaSmmjVpg2ocafh5Wb6OdD4jqeMDUT6kxk5pah8ELHvVLZC1hSb0laF89EljJLR3TZYQLuMVV2SZSp0LG~giGGB7DoX-tc~vq~6Yq-Z6QwgVXZkuLAsMEMVbw37~0wQ~QkJNfWJkN2IVhgtJxBoT20LCKQlR7Wnlvp8cyLcVhoxWyTGpkrj9eNqoAMDwg41CXocChy5fBnUHJS667VcHq2QXa98defcYDns5mFH54hLr-5f~g8hsGws4SP2fylY5QG2gzxhIY1UQ__
// }
export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl }) => {
  return (
    <div className="lg:w-1/2">
      <img src={imageUrl} alt="User Illustration" className="w-full rounded-lg shadow-lg" />
    </div>
  );
};
