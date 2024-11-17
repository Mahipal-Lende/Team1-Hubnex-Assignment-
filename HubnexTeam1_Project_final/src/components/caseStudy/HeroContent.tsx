
import "./Hero.css"
const HeroCaseStudy = () => {
  return (
    <>
<div className='containerCS'>
      <h1 className='text-4xl  mt-8 p-4 '>Case Study</h1>
      <p className='p-1'>We guide global businesses through the challenges of developing purposeful 
        technology that addresses their needs and</p>
        <p className=''>advances their growth. We have established offices in India, the UAE, and the USA.</p>

        <div className="flex justify-center text-white">
        <button type="button" className="inline-flex items-center mt-6 p-2 py-2.5 px-5 me-2  text-sm font-medium text-white focus:outline-none  rounded-lg
           border border-gray-200 border-solid  focus:z-10">View All <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
       </svg></button>
        </div>
     

           
        

    <div className="row justify-center mt-5 space-x-10 flex">
          
    <div className="col-sm-4 h-350px">
              <div className="card  bg-black text-white pb-3">
                  <div> 
                     <img className="object-cover w-full mx-auto" src="https://www.hubnex.in/icons/business1.svg" alt="Card image cap" />
                  </div>
                <h5 className="card-title text-left px-3 pt-3 text-lg ">What is Ad Exposure and Why It Matters?</h5>
                <p className=" card-text text-left px-3 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis omnis dolore?</p>
                <a href="#" className="text-large text-left px-3 text-lg ">Read More</a>
             </div>
          </div>


          <div className="col-sm-4 h-350px">
              <div className="card  bg-black text-white pb-3">
                  <div className="overflow-hidden"> 
                     <img className="object-cover w-full mx-auto" src="https://www.hubnex.in/icons/business1.svg" alt="" />
                     
                  </div>
                <h5 className="card-title text-left px-3 pt-3 text-lg ">What is Ad Exposure and Why It Matters?</h5>
                <p className=" card-text text-left px-3 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis omnis dolore?</p>
                <a href="#" className="text-large text-left px-3 text-lg ">Read More</a>
             </div>
          </div>
    
    </div>
   
</div>
    </>
  )
};

export default HeroCaseStudy;