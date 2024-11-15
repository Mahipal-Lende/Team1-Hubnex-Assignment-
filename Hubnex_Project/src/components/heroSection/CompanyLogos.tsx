import React from 'react';

const logos = [
  { src: "https://cdn.sanity.io/images/ku7s4y42/production/af3f0cda376d17c5aa7fce3f128108457ec2f0a5-1200x600.png?w=700&h=350&auto=format",
    alt: "Chorus Logo" },

  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png", 
    alt: "TCS Logo" },

  { src: "https://s3-alpha-sig.figma.com/img/0812/7a1c/c48e2a1fb55718946bf13830d01de43d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RexwvDyetc6ig6l12ihvgy32Iz82Hyo9oRbdyhcMrtYvJhmjn69ZoJ71LbCJXCd8pddX5epuAMyO5ZiTQUTf64tyWAjkMsftaDhFz4w7G5K1CpYROqgU6suyK8sQ40l79lJJ3FPzfyAlS3LMNztVD0WL-8acilJZyv82OGLGi5a3RfTD7X~IcfciGHh-w-7QjIbG0WBsLXuRdE7Nh2P7aUCU0l5tQR-blBKfRTvPFpS69wORuOTNoDmrTBGe8YPUHFyDruqFhKdrfs64DQATjur9dj0YK2XAHi1HJ-234ByyOQkyAN96Is4KR8M4vieDmoXiJUYQKtYyoVpwUfYQ4A__", 
    alt: "Pantera Logo" },

  { src: "https://s3-alpha-sig.figma.com/img/bfc1/aec5/e9e9367fdbe9274c209fc99d320b0654?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MZaY9mrNLdNv2cjAZ-iS-LLQD4Ucv1~4NOxC08RoMi5tnpirJqWyXbveCBOrLLFfIdFngHq87D~6awvSH5sX6jRUj9x~a8lJ--h7pY9McUR9w1xxAEqLbwzGUAAV-k64rqxMOpuEHJ0H5l4oXUQDElAtThJXSivGXsmUe1xeZKx7ydRqw3Q~Cj9zzfgACltuW2H~h2uE~N2KV3iwAz0~iJgz56jcgu14xEnaflvFKeXZu7DeML8Qa0ypBgyFVa2zkrjgZOH1Yc~b~uW5KIU0XY713sadoUd-2hq5sDy05WhrOH8NtqpDQ21u5DKkznxnWxHUZHQ89-rUlQ8IJAyzEw__", 
    alt: "Reddit Logo" },
];

export const CompanyLogos: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center">
      <p className="text-gray-600 font-medium">Join 4,000+ companies already growing</p>
      <div className="flex justify-center items-center space-x-8 mt-4">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="w-24" />
        ))}
      </div>
    </div>
  );
};
