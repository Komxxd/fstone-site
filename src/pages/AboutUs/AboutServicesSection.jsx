import React from "react";

export default function ServicesSection() {
  const services = [
    "IT Staff Augmentation",
    "Technology Consulting",
    "Business Consulting",
    "Workforce Solutions",
    "Outsourcing Services",
  ];

  return (
    <div className="flex flex-col items-start self-stretch bg-black pt-[clamp(40px,8vw,110px)] pb-[clamp(60px,12vw,204px)]">
      
    
      <span className="text-white font-bold text-[clamp(1.8rem,4vw,3rem)] mb-[clamp(20px,2.5vw,44px)] ml-[clamp(16px,5vw,95px)]">
        Our Services
      </span>

     
      <span className="text-neutral-500 text-[clamp(1rem,2vw,1.75rem)] w-[clamp(90%,60vw,844px)] mb-[clamp(30px,6vw,110px)] ml-[clamp(16px,5vw,95px)]">
        To succeed in the complex world of technology, you need exceptional
        connections—to the right experts, the right opportunities and the right
        answers
      </span>

      
      {services.map((service, index) => (
        <React.Fragment key={index}>
          
          <div className="self-stretch bg-[#009ADE] h-[2px] mb-[clamp(8px,2vw,25px)] mx-[clamp(16px,5vw,95px)]"></div>

         
          <div className="flex items-center self-stretch mb-[clamp(10px,2vw,27px)] mx-[clamp(16px,5vw,95px)]">
            <span className="text-white font-medium flex-1 text-[clamp(1rem,2vw,1.75rem)]">
              {service}
            </span>

           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[clamp(20px,3vw,48px)] h-[clamp(20px,3vw,48px)]"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </React.Fragment>
      ))}

   
      <div className="self-stretch bg-[#009ADE] h-[2px] mx-[clamp(16px,5vw,95px)]"></div>
    </div>
  );
}
