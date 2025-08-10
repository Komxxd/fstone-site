import React from "react";

export default function AboutBanner() {
  return (
    <div className="bg-[#009ADE] w-full mt-20">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-[clamp(8px,2vw,32px)] h-[clamp(40px,8vw,70px)]">
        
     
        <span
          className="text-white font-medium"
          style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
        >
          About Us
        </span>

       
        <div className="flex items-stretch">
          
          <div className="flex items-center px-[clamp(8px,2vw,24px)]">
            <span
              className="text-white font-medium"
              style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
            >
              Leadership
            </span>
          </div>

        
          <div className="flex items-center px-[clamp(8px,2vw,24px)]">
            <span
              className="text-white font-medium"
              style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
            >
              Services
            </span>
          </div>

        
          <div className="flex items-center px-[clamp(8px,2vw,24px)]">
            <span
              className="text-white font-medium"
              style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
            >
              Awards
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
