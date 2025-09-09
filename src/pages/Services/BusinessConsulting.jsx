import React from "react";
import businessconsult from "../../assets/Services/businessconsult.png"

export default function BusinessConsulting() {
  return (
    <div className="flex flex-col bg-white w-full">
      <div className="flex flex-col items-start w-full bg-white min-h-screen">
        <div className="flex flex-col xl:flex-row items-start w-full px-[clamp(16px,5vw,80px)] pt-[clamp(50px,8vw,100px)] pb-[clamp(50px,6vw,116px)] gap-[clamp(30px,5vw,80px)] relative">
          <div className="flex flex-col w-full xl:w-[40%] max-w-[506px] mt-[clamp(20px,4vw,53px)]">
            <h1 className="text-[#535353] text-[clamp(36px,5vw,68px)] font-bold leading-tight">
              Business Consultancy
            </h1>
            <p className="text-[#7B848F] text-[clamp(16px,1.8vw,24px)] font-bold mt-[clamp(10px,2vw,22px)]">
              We enable business transformation with Enterprise Application Services (ERP, CRM, SCM) and Business Process Management (BPM) to streamline, automate, and innovate with ease.
            </p>
          </div>

          <div className="w-full xl:w-auto mt-[clamp(20px,4vw,0)] xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:max-w-[60%] xl:max-h-[90%] xl:pr-12">
            <img
              src={
                businessconsult
              }
              alt="Business Consulting"
              className="w-full h-full max-h-[60vh] object-contain xl:object-cover xl:-l-lg"
              style={{ aspectRatio: "628/469" }}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row w-full bg-black py-[clamp(60px,10vw,170px)] px-[clamp(16px,5vw,80px)] gap-[clamp(40px,8vw,120px)] mt-[clamp(30px,6vw,80px)] items-center">
          <div className="flex flex-col w-full xl:w-[40%] gap-[clamp(20px,4vw,40px)]">
            <h2 className="text-white text-[clamp(32px,5vw,68px)] font-bold">
              Service We Offer
            </h2>
            
            <p className="text-white text-[clamp(16px,2vw,24px)] font-bold max-w-[400px]">
              Explore our services designed to power innovation and efficiency
            </p>

            <button
              className="group flex items-center justify-center bg-transparent hover:bg-[#009ADE] text-center w-[clamp(160px,25vw,336px)] h-[clamp(50px,8vw,94px)] gap-[clamp(6px,1vw,11px)] rounded-md border-[clamp(1.5px,0.4vw,3px)] border-solid border-[#009ADE] relative z-10 transition-all duration-300"
              onClick={() => alert("Pressed!")}
            >
              <span className="text-white text-[clamp(14px,1.8vw,20px)] font-bold transform transition-transform duration-300 group-hover:-translate-x-2">
                Let's Connect
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[clamp(18px,3vw,40px)] h-[clamp(18px,3vw,40px)] text-white transform transition-transform duration-300 group-hover:-rotate-12"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col w-full xl:w-[60%] gap-[clamp(20px,3vw,30px)] items-center">
            <div className="flex flex-col sm:flex-row gap-[clamp(20px,3vw,40px)] w-full justify-center">
              <span className="text-[#009ADE] text-[clamp(16px,2vw,20px)] font-bold text-center">
                Infrastructure Security
              </span>
              <span className="text-[#009ADE] text-[clamp(16px,2vw,20px)] font-bold text-center">
                Workplace Services
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-[clamp(20px,3vw,40px)] w-full justify-center flex-wrap">
              <span className="text-[#009ADE] text-[clamp(16px,2vw,20px)] font-bold text-center">
                Enterprise Computing
              </span>
              <span className="text-[#009ADE] text-[clamp(16px,2vw,20px)] font-bold text-center">
                Network & Convergence
              </span>
              <span className="text-[#009ADE] text-[clamp(16px,2vw,20px)] font-bold text-center">
                IT Management Consulting
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}