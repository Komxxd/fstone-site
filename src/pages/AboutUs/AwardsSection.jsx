import React from "react";
import star from "../../assets/AboutUs/star_shine.png"

export default function AwardsSection() {
  return (
    <div className="self-stretch bg-black py-[clamp(60px,10vw,121px)]">
      
      <div className="flex items-start justify-between self-stretch mx-[clamp(16px,5vw,95px)] mb-[clamp(40px,6vw,80px)]">
        <span className="text-white text-[clamp(24px,4vw,48px)] font-bold max-w-[646px] leading-tight">
          We're recognized for the value we create together
        </span>

       
        <div className="flex gap-[clamp(8px,1.5vw,16px)] mt-[clamp(20px,4vw,62px)]">
          
          <button className="w-[clamp(36px,5vw,54px)] h-[clamp(36px,5vw,54px)] rounded-full border border-[#81CDED] flex items-center justify-center group">
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
         
          <button className="w-[clamp(36px,5vw,54px)] h-[clamp(36px,5vw,54px)] rounded-full border-2 border-[#009ADE] flex items-center justify-center group">
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

     
      <div className="flex flex-col md:flex-row items-start self-stretch mx-[clamp(16px,5vw,95px)] gap-[clamp(12px,2vw,20px)]">
        {[
          {
            bg: "#E31238",
            img: star,
            text: "FICCI Lead Vault Skills Champion of the India Award",
          },
          {
            bg: "#0041F0",
            img: star,
            text: "One of the top ESIC Contributor in the Country (India)",
          },
          {
            bg: "#460073",
            img: star,
            text: "Best Performance Award (2015 & 2016) by Metso India",
          },
        ].map((award, idx) => (
          <div
            key={idx}
            className="flex flex-1 flex-col items-start py-[clamp(20px,4vw,38px)] rounded-lg"
            style={{ backgroundColor: award.bg }}
          >
            <img
              src={award.img}
              className="w-[clamp(36px,5vw,52px)] h-[clamp(36px,5vw,52px)] mb-[clamp(40px,8vw,85px)] ml-[clamp(16px,2vw,29px)] object-fill"
              alt=""
            />
            <span className="text-white text-[clamp(16px,2vw,28px)] font-bold mx-[clamp(16px,2vw,29px)]">
              {award.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
