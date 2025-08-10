import React from "react";
import javaimage from "../../assets/javaimage.png";
import microsoftimage from "../../assets/microsoftimage.png";
import erpimage from "../../assets/erpimage.png";

export default function TechnologiesSection() {
  return (
    <div className="flex flex-col items-start self-stretch bg-[#F7F7F7] pt-[clamp(40px,6vw,108px)] pb-[clamp(60px,8vw,184px)]">
    
      <div className="flex flex-wrap items-center justify-between self-stretch mb-10 sm:mb-16 lg:mb-20 px-6 sm:px-12 lg:px-24 w-full">
        <span className="text-[#535353] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Technologies
        </span>
        <div className="flex gap-[clamp(8px,1.5vw,16px)]">
          
          <button className="w-[clamp(36px,4vw,54px)] h-[clamp(36px,4vw,54px)] rounded-full border border-[#81CDED] flex items-center justify-center group">
            <svg
              className="w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] text-[#81CDED] group-hover:text-[#009ADE] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

         
          <button className="w-[clamp(36px,4vw,54px)] h-[clamp(36px,4vw,54px)] rounded-full border-2 border-[#009ADE] flex items-center justify-center group">
            <svg
              className="w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] text-[#009ADE] group-hover:text-[#005F99] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

     
      <div className="flex flex-wrap justify-center self-stretch mb-7 px-[clamp(20px,6vw,80px)] gap-[clamp(20px,3vw,32px)]">
        
        <div className="flex flex-col items-start w-[clamp(200px,28vw,411px)]">
          <img
            src={javaimage}
            className="w-full h-[clamp(180px,25vw,364px)] object-fill"
          />
          <span className="text-[#535353] text-[clamp(16px,2vw,28px)] font-medium mt-[clamp(8px,1.5vw,24px)]">
            JAVA/J2EE Technologies
          </span>
        </div>

        
        <div className="flex flex-col items-start w-[clamp(200px,28vw,411px)]">
          <img
            src={microsoftimage}
            className="w-full h-[clamp(180px,25vw,364px)] object-fill"
          />
          <span className="text-[#535353] text-[clamp(16px,2vw,28px)] font-medium mt-[clamp(8px,1.5vw,24px)]">
            Microsoft Technologies
          </span>
        </div>

       
        <div className="flex flex-col items-start w-[clamp(200px,28vw,411px)]">
          <img
            src={erpimage}
            className="w-full h-[clamp(180px,25vw,364px)] object-fill"
          />
          <span className="text-[#535353] text-[clamp(16px,2vw,28px)] font-medium mt-[clamp(8px,1.5vw,24px)]">
            ERP Services
          </span>
        </div>
      </div>
    </div>
  );
}
