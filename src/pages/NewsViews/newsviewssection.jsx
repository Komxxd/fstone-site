import React from "react";
import newsimage from "../../assets/newsimage.png"

export default function NewsAndViews() {
  return (
    <div className="relative bg-[#F7F7F7] min-h-screen flex justify-center pt-[clamp(5rem,15vw,7rem)] pb-[clamp(2rem,8vw,5rem)] px-[clamp(1rem,4vw,2rem)] overflow-hidden">
      
      <div className="absolute top-0 left-0 w-[clamp(300px,60vw,800px)] h-[clamp(200px,40vw,400px)] bg-[#009ADE] opacity-40"></div>
      
      <div className="absolute bottom-0 right-0 w-[clamp(300px,60vw,800px)] h-[clamp(200px,40vw,400px)] bg-[#009ADE] opacity-40"></div>
      
      <div className="max-w-5xl w-full relative z-10">
       
        <div className="mb-[clamp(2rem,5vw,3rem)] max-w-2xl text-left px-[clamp(0.5rem,2vw,1.5rem)] py-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">
            News & Views
          </h1>
          <p className="text-[clamp(0.8rem,1.5vw,1rem)] text-black leading-relaxed">
            Whether it's out there in headlines or simply sharing our point-of-view, there's a lot happening in FSTONE. Take a peek and you'll see there's always something to talk about at FSTONE Technologies. We are Growing, we are Hiring, we are Expending.
          </p>
        </div>

        
        <div 
          className="bg-white rounded-lg shadow-md mb-[clamp(1.5rem,4vw,2.5rem)] p-[clamp(1rem,3vw,1.5rem)] min-h-[200px] flex flex-col justify-end"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${newsimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
          }}
        >
          <p className="mb-4 leading-relaxed text-[clamp(0.9rem,1.25vw,1.1rem)]">
            <strong>FSTONE Technologies</strong> in process of singing Joint Business Relationship with one of the Big 4.
          </p>
          <p className="text-blue-200 text-[clamp(0.75rem,1vw,0.875rem)]">March 2018</p>
        </div>

       
        <div className="bg-white rounded-lg shadow-md mb-6 p-[clamp(1rem,3vw,1.5rem)]">
          <p className="text-gray-700 mb-4 leading-relaxed text-[clamp(0.9rem,1.25vw,1.1rem)]">
            <strong>FSTONE Technologies</strong> has had a strong 2017, winning a number of awards, hiring top talent and even expanding their national footprint beyond their New Jersey headquarter. Their most recent office opened in Jaipur (India) to support the growing clientele in US & India. What next ? Dallas, TX & San Jose, CA to support local clients.
          </p>
          <p className="text-[#009ADE] text-[clamp(0.75rem,1vw,0.875rem)]">January 2018</p>
        </div>

        
        <div 
          className="bg-white rounded-lg shadow-md mb-6 p-[clamp(1rem,3vw,1.5rem)] min-h-[200px] flex flex-col justify-end"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${newsimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
          }}
        >
          <p className="mb-4 leading-relaxed text-[clamp(0.9rem,1.25vw,1.1rem)]">
            <strong>FSTONE Technologies</strong> entered in partnership with French based advertising giant, FSTONE will be providing consulting support in USA & India. FSTONE will be hiring staff in New Jersey & India (Gurugram & Jaipur) to support the same.
          </p>
          <p className="text-blue-200 text-[clamp(0.75rem,1vw,0.875rem)]">November 2017</p>
        </div>

     
        <div className="bg-white rounded-lg shadow-md p-[clamp(1rem,3vw,1.5rem)]">
          <p className="text-gray-700 mb-4 leading-relaxed text-[clamp(0.9rem,1.25vw,1.1rem)]">
            <strong>FSTONE Technologies</strong> is awarded 2 years Cyber Security project by one of the financial group in India. FSTONE Team is going to add 15+ resources in Bangalore office to handle & deliver the same.
          </p>
          <p className="text-[#009ADE] text-[clamp(0.75rem,1vw,0.875rem)]">August 2018</p>
        </div>
      </div>
    </div>
  );
}