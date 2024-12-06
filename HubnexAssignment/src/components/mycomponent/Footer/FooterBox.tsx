
import './FooterBox.css'

const FooterBox = () => {
  return (
  <div className='py-4 px-14'>
     
     <div className="container1 py-4 px-17 md:h-52 rounded">

           <h1 className='mt-3 text-3xl font-bold text-white text-center'> See all that you can accomplish with Hubnex Labs</h1>
        
            <div className='flex md:justify-center py-3'>
            <button
              type="button"
              className="btn-foot"
            >
              Connect Sales
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            </div>
     </div>

     <div className="flex flex-col md:flex-row justify-between items-center px-6 py-8 bg-white space-y-6 md:space-y-0">
      {/* Left Content */}
      <div className=" md:text-left">
        <h1 className="text-3xl md:text-3xl font-semibold text-black">
          Let’s grow{" "}
          <span role="img" aria-label="flex emoji">
            💪
          </span>
        </h1>
        <h2 className="text-3xl md:text-3xl font-semibold text-black">
          together with the faster ecosystem
        </h2>
      </div>

      {/* Right Button */}
      <button className="bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition">
        Contact Us →
      </button>
    </div>
  </div>
  )
}

export default FooterBox