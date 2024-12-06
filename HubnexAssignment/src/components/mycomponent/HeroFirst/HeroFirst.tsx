
import React from 'react'
import Button_NoBG from '../Basic_Components/Button_NoBG';
import Button_BlueBG from '../Basic_Components/Button_BlueBG';
import AvatarCircles from '@/components/ui/avatar-circles';
import NumberTicker from '@/components/ui/number-ticker';
import { IoMdStar } from "react-icons/io";
import Marquee from "react-fast-marquee";

const HeroFirst: React.FC = () => {
  return (
    <>
    <div className='h-full w-full flex my-2 px-4'>

      {/* left side top */}
      <div className='w-3/5 min-h-[500px]  flex-col flex-shrink-0 flex-wrap'>
      {/* Saas heading and Paragraph */}
      <div className='h-1/2 w-5/6'>
        <h1 className='text-7xl font-semibold pl-8 box-border'>SaaS growth with weekly tips.</h1>
        <p className='font-sans p-8 '>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.Clarity gives you the blocks & components you Clarity gives you the blocks.</p>
      </div>
      {/* left side bottom */}
      <div className='h-1/2 w-5/6'>
      {/* left side buttons */}
        <div className='h-1/3 w-full flex'>
          <div className='mx-4 border-gray-900 border-solid py-4'>
          <Button_NoBG buttonName={'Contact Us'}></Button_NoBG>
          </div>
          <div className='mx-4 py-4'>
          <Button_BlueBG buttonName={'Join Us'}></Button_BlueBG>
          </div>
        </div>
        {/* Ratings */}
        <div className='flex'>
          <div className='h-2/3 w-full  py-8 pl-4 flex items-center'>
           <AvatarCircles avatarUrls={[{
            imageUrl : "https://thumbs.dreamstime.com/b/beautiful-smiling-businesswoman-arms-folded-standing-black-suit-brown-jacket-isolated-white-background-also-105189427.jpg",
            profileUrl : ""
          }, 
          {
            imageUrl:"https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png",
            profileUrl:""
          },
          {
            imageUrl:"https://www.transparentpng.com/thumb/happy-person/VJdvLa-download-happy-blackman-png.png",
            profileUrl:""
          },
          {
            imageUrl:"https://e7.pngegg.com/pngimages/156/499/png-clipart-business-man-businessperson-desktop-business-man-image-file-formats-photography-thumbnail.png",
            profileUrl:""
          }
          ]} className='mx-4'></AvatarCircles>
           <NumberTicker value={5910}></NumberTicker>
           <span>+</span>
        </div>
        
        
        <div className='flex flex-col'>
        <div className='flex items-center'>
          <span className='mx-2'>4.5/5</span>
          <span className='flex'>
            <IoMdStar className='text-blue-800'/>
            <IoMdStar className='text-blue-800'/>
            <IoMdStar className='text-blue-800'/>
            <IoMdStar className='text-blue-800'/>
            <IoMdStar className='text-blue-800'/>
          </span>
        </div>
        <div className='mx-2'>
          <p>Trusted by the top companies worldwide</p>
        </div>
        </div>
        </div>
        
      </div>
      </div>
      {/* hero image */}
      <div className='heroimg w-2/5 min-w-[500px] min-h-[500px] flex flex-wrap flex-col flex-shrink-0 bg-black rounded-2xl rounded-l-2xl'>
      <img src="https://s3-alpha-sig.figma.com/img/3459/1306/8b659eea92f8fac3c8bacae4f562ea37?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-z5Cnhyuc~xHlB6HmV69O6bjSwRle1tDRwxafvTlNF88nvTL-QzeJWVXV2VE9NyyXTBetsAjF0WuPzc7OvVJ1BdvxB9nrY1LCnKCfQYbDjF0yjVIVLHXy2HmM64EhMf6CbpNZoi3-Mskn2hzUkp6DrxnquXD5FZ2loQN7nvYl71tyQ1oT2dZ6IkvkCxPCr7fGgXefEQdjDVuvkqnnjctQpjNupKiKWbbcnzrDI~Spop-NGMNr978rCjfPL7KY0vB1cEiMXj9HWCLZN4Nu5vYm8s3ZMT89N-jWltfQfrXRxTNzpYFJ4V~7V0ee9KA6T7kLZ3pCu6klwRxHY53ppajw__" alt="Hero Image" className='rounded-2xl'/>
      </div>
    </div>
    <div>
    <Marquee speed={70}>
          <div className='w-48 mx-4'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkz5xFqM708khbZ7YCczAOgDalSA7rBBdOHQ&s" alt="chrous logo" />
          </div>
          <div className='w-48 mx-4'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png" alt="tcs logo" />
          </div>
          <div className='w-48 mx-4'>
            <img src="https://getvectorlogo.com/wp-content/uploads/2023/03/pantera-capital-vector-logo-2023.png" alt="pantera" />
          </div>
          <div className='w-48 mx-4'>
            <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png" alt="reddit" />
          </div>
  </Marquee>
    </div>
    </>
  )
}

export default HeroFirst;
