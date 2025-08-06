import React from "react";
import javaimage from "../../assets/javaimage.png"
import microsoftimage from "../../assets/microsoftimage.png"
import erpimage from "../../assets/erpimage.png"

export default function TechnologiesSection() {
  return (
    <div className="flex flex-col items-start self-stretch bg-[#F7F7F7] pt-[108px] pb-[184px]">
      
      <div className="flex items-start self-stretch mb-20 mx-[318px]">
        <span className="text-[#535353] text-5xl font-medium mr-auto">
          Technologies
        </span>
        <div className="flex gap-4 mt-2">
          
          <button className="w-[54px] h-[54px] rounded-full border border-[#81CDED] flex items-center justify-center group">
            <svg
              className="w-4 h-4 text-[#81CDED] group-hover:text-[#009ADE] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          
          <button className="w-[54px] h-[54px] rounded-full border-2 border-[#009ADE] flex items-center justify-center group">
            <svg
              className="w-4 h-4 text-[#009ADE] group-hover:text-[#005F99] transition"
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

      
      <div className="flex justify-center self-stretch mb-7 mx-80 gap-8">
        <div className="flex flex-col items-start">
          <img
            src={javaimage}
            className="w-[411px] h-[364px] object-fill"
          />
          <span className="text-[#535353] text-[28px] font-medium mt-6">
            JAVA/J2EE Technologies
          </span>
        </div>

        <div className="flex flex-col items-start">
          <img
            src={microsoftimage}
            className="w-[411px] h-[364px] object-fill"
          />
          <span className="text-[#535353] text-[28px] font-medium mt-6">
            Microsoft Technologies
          </span>
        </div>

        <div className="flex flex-col items-start">
          <img
            src={erpimage}
            className="w-[411px] h-[364px] object-fill"
          />
          <span className="text-[#535353] text-[28px] font-medium mt-6">
            ERP Services
          </span>
        </div>
      </div>
    </div>
  );
}
