
import "./Hero.css"

const HeroBlog = () => {
    return (
      <>
      <div className='containerCS'>
        <h1 className='text-5xl  mt-5 p-2'>Blogs</h1>
        <p className='p-1 text-2xl'>Explore the impact we've delivered</p>
  
        <div className="flex justify-center text-white">
        <button type="button" className="inline-flex items-center mt-6 p-2 py-2.5 px-5 me-2  text-sm font-medium text-white focus:outline-none  rounded-lg
           border border-gray-200 border-solid  focus:z-10">View All <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
       </svg></button>
        </div>

        <div className="row mt-5 justify-center space-x-10 flex">
          

        <div className=" col-sm-3 max-w-sm bg-white hover:bg-blue-300 hover:text-white rounded-lg shadow">
    <div className="p-2">
        <div>
            <img src="https://www.hubnex.in/companyicon/blog1.svg" alt="" />

        </div>
        <div className="flex justify-center">
        <button className="mt-2 bg-white  text-gray-800 font-semibold py-2 px-4 border-solid border-red-500 rounded shadow">
               Finance
        </button>
        </div>
        <a href="#">
            <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is Ad Exposure </h5>
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">and Why It Matters?</h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className=" text-lg font-medium text-black inline-flex items-center">
           
        Read more   <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div className=" col-sm-3 max-w-sm bg-white hover:bg-blue-300 rounded-lg shadow">
    <div className="p-2">
        <div>
            <img src="https://www.hubnex.in/companyicon/blog2.svg" alt="" />

        </div>
        <div className="flex justify-center">
        <button className="mt-2 bg-white  text-gray-800 font-semibold py-2 px-4 border-solid border-red-500 rounded shadow">
               Business
        </button>
        </div>
        <a href="#">
            <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is Ad Exposure </h5>
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">and Why It Matters?</h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className=" text-lg font-medium text-black inline-flex items-center">
           
        Read more   <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


<div className=" col-sm-3 max-w-sm bg-white hover:bg-blue-300 rounded-lg shadow">
    <div className="p-2">
        <div>
            <img src="https://www.hubnex.in/companyicon/blog1.svg" alt="" />

        </div>
        <div className="flex justify-center">
        <button className="mt-2 bg-white  text-gray-800 font-semibold py-2 px-4 border-solid border-red-500 rounded shadow">
               Marketing
        </button>
        </div>
        <a href="#">
            <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is Ad Exposure </h5>
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">and Why It Matters?</h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className=" text-lg font-medium text-black inline-flex items-center">
           
        Read more   <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



  </div>
       
         
          

   

     
      </div>
      </>
    )
};

export default HeroBlog 