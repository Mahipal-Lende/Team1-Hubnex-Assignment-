import React from 'react';

interface HeroImageProps {
  imageUrl: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl }) => {
  return (
    <div className="lg:w-2/5">
      <img src={imageUrl} alt="User Illustration" className="w-full rounded-lg shadow-lg" />
    </div>
  );
};
