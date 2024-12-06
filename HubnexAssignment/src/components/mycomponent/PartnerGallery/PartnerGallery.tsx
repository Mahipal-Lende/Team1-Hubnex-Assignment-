import RetroGrid from '@/components/ui/retro-grid';
import React from 'react'




const PartnerGallery:React.FC = () => {
  return (
    <div className='my-32 box-border'>
        <RetroGrid>
        </RetroGrid>
        <div className=' p-4'>
            <h1 className='text-center text-5xl'>Why Choose Us?</h1>
            

        <div className="w-auto mx-auto h-screen flex items-center justify-around box-border">
      <div className="relative w-1/4 h-5/6 rounded-lg overflow-hidden bg-cover bg-center shadow-lg transition-all duration-300">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1631624226983-655dea38053d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGVyfGVufDB8MXwwfHx8MA%3D%3D')", 
          }}
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
          {/* Title */}
          <div className="p-6">
            <h1 className="text-white text-2xl font-bold">Fast MVP Development</h1>
          </div>

          {/* Description Section */}
          <div
            className="p-6 bg-black rounded-t-lg transition-all duration-300 ease-in-out hover:h-[calc(25%+20px)] h-1/4"
            style={{ minHeight: "150px" }}
          >

            <p className="text-white text-sm leading-relaxed">
            We develop the prototypes and MVP for the ERP System within a few months and optimise the final product based on its performance metrics and your feedback.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-1/4 h-5/6 rounded-lg overflow-hidden bg-cover bg-center shadow-lg transition-all duration-300">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579226905180-636b76d96082?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVudGlzdHxlbnwwfDF8MHx8fDA%3D')", 
          }}
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
          {/* Title */}
          <div className="p-6">
            <h1 className="text-white text-2xl font-bold">Maintenance & Support</h1>
          </div>

          {/* Description Section */}
          <div
            className="p-6 bg-black rounded-t-lg transition-all duration-300 ease-in-out hover:h-[calc(25%+20px)] h-1/4"
            style={{ minHeight: "150px" }}
          >
            

            <p className="text-white text-sm leading-relaxed">
            Our work does not end with delivery. We offer complete support and maintenance post the launch of the ERP systems to ensure their smooth functioning.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-1/4 h-5/6 rounded-lg overflow-hidden bg-cover bg-center shadow-lg transition-all duration-300">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          }}
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
          {/* Title */}
          <div className="p-6">
            <h1 className="text-white text-2xl font-bold">Smooth ERP Intergration</h1>
          </div>

          {/* Description Section */}
          <div
            className="p-6 bg-black rounded-t-lg transition-all duration-300 ease-in-out hover:h-[calc(25%+20px)] h-1/4"
            style={{ minHeight: "150px" }}
          >

            <p className="text-white text-sm leading-relaxed">
            We ensure smooth ERP integration with other business parts, including other ERPs, Salesforce, Office Suite, and IoT systems, for effective, seamless business operations.
            </p>
          </div>
        </div>
      </div>
    </div>


        </div>
    </div>
  )
}

export default PartnerGallery;
