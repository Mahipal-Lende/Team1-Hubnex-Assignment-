import React from 'react'
import "./Hero2.css"

const Hero2:React.FC = () => {
  return (
    
    <div className="max-w-[4/6] space-y-6 mx-5">
        <h1 className='my-5 text-center text-3xl'>Benefits to Join Hubnex Labs</h1> 
      <div id="parentkaparent" className='parentkaparent'>
      <div id="parent" className='parent'>
        <div id="child" className='mx-4 min-h-[700px] w-1/3 rounded-lg'>
            <div id="top1" className='h-3/5 box-border my-2 rounded-lg'>
                <div id="image_top" className='image_top'></div>
            </div>
            <div id="bottom1" className='h-1/3 box-border bg-black rounded-lg flex flex-col'>
            <div className='flex flex-col'>
            <h3 className='text-white text-center mt-28'>On time Delivery</h3>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
        </div>
        <div id="child" className='mx-4 min-h-[700px] w-1/3 rounded-lg'>
            <div id="top2" className='min-h-[240px] my-4 bg-black rounded-lg'>
            <div className='flex flex-col'>
            <h3 className='text-white text-center mt-28'>On time Delivery</h3>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
            <div id="middle2" className='min-h-[240px] my-4 rounded-lg'>
                <img src="https://assets.airtel.in/static-assets/aoi/images/webp/Banner_COCP_mobile_375x220.webp" alt="image corporate" className='middle_img'/>
            </div>
            <div id="bottom2" className='min-h-[240px] my-4 bg-black rounded-lg'>
            <div className='flex flex-col'>
            <h3 className='text-white text-center mt-28'>On time Delivery</h3>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
        </div>
        <div id="child" className='mx-4 min-h-[700px] w-1/3 rounded-lg'>
            <div id="top3" className='h-3/5 bg-black box-border my-4 rounded-lg'>
            <img src="https://thumbs.dreamstime.com/b/business-people-meeting-conference-discussion-corporate-concept-72017923.jpg" alt="100% satisfaction img" />
            <h3 className='text-white text-center mt-28'>Lorem ipsum dolor sit amet.</h3>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="bottom3" className='h-1/3 box-border bg-black rounded-lg'>
            <div>
            <h3 className='text-white text-center'>Lorem, ipsum dolor.</h3>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ad?</p>
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero2
