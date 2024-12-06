import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col sm:flex-row my-8">
      {/* Left Section */}
      <div className="bg-[url('https://img.freepik.com/free-photo/skyscrapers-from-low-angle-view_1359-998.jpg?ga=GA1.1.1211299630.1714709361&semt=ais_hybrid')] sm:w-1/3 ml-8 w-full bg-[#E7EEFF] flex flex-col justify-center items-center p-10 sticky max-h-screen">
        {/* Circles */}
        <div className="absolute top-1/4 left-1/4 w-[80%] h-[80%] rounded-full border-2 border-[#C2D3FF]"></div>
        <div className="absolute top-1/3 left-1/3 w-[70%] h-[70%] rounded-full border-2 border-[#8EA7FF]"></div>
        {/* <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] rounded-full border-2 border-[#5B6FFF]"></div> */}

        {/* Stats */}
        <div className="mt-auto text-center">
          <p className="text-4xl text-white font-semibold">5,910+</p>
          <p className="text-white mt-2">
            Companies are using & it’s growing everyday
          </p>
          <button className="mt-4 px-6 py-2 bg-[#5B6FFF] text-white rounded-lg hover:bg-[#3C4CCF]">
            Join Now!
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-1/2 w-full p-6 sm:p-10 flex flex-col justify-center bg-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#202D5A]">
          Let’s Talk - Contact Our Experts
        </h1>
        <p className="text-[#4A5678] mt-4 text-sm sm:text-base">
          Tell us a little bit about yourself and your queries. Our customer
          experience team will reach out to you within 24 hours.
        </p>
        <form className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Business Name*"
              className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Business Email*"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center w-full sm:w-1/3 border border-gray-300 rounded-lg">
              <select
                className="p-3 bg-transparent border-none focus:outline-none"
                defaultValue="IN"
              >
                <option value="IN">🇮🇳 +91</option>
                <option value="US">🇺🇸 +1</option>
              </select>
              <input
                type="tel"
                placeholder="1234567890"
                className="flex-grow p-3 border-none focus:outline-none"
              />
            </div>
          </div>
          <textarea
            placeholder="Reason for Contact Request *"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#5B6FFF] text-white p-3 rounded-lg text-lg font-semibold hover:bg-[#3C4CCF]"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
