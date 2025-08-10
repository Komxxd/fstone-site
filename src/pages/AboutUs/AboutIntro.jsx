import React from "react";
import AboutIntroImg from "../../assets/aboutintroimg.png"

export default function AboutIntro() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[clamp(20px,5vw,100px)] px-[clamp(16px,5vw,80px)] py-[clamp(40px,8vw,120px)] max-w-[1400px] mx-auto">
      
      
      <img
        src= {AboutIntroImg}
        className="w-[clamp(280px,40vw,540px)] h-auto object-cover"
        alt="Business team"
      />

      
      <div className="flex flex-col items-start max-w-[clamp(300px,50%,650px)]">
        
       
        <span
          className="text-[#535353] font-bold leading-tight mb-[clamp(16px,3vw,33px)]"
          style={{ fontSize: "clamp(24px,4vw,68px)" }}
        >
          We serve Solutions to fit the business needs
        </span>

        
        <span
          className="text-neutral-500 font-medium mb-[clamp(20px,4vw,69px)]"
          style={{ fontSize: "clamp(16px,1.5vw,20px)" }}
        >
          At FSTONE, we strive to deliver value through the combination of right
          people, processes, technologies and program management solutions.
        </span>

        
        <button
          className="group flex items-center justify-center lg:justify-start bg-transparent text-center lg:text-left py-[3vw] sm:py-[2.5vw] md:py-[2vw] lg:py-[1.5vw] xl:py-[1.2vw] 2xl:py-[1vw] px-[10vw] sm:px-[8vw] md:px-[6vw] lg:px-[4vw] xl:px-[3vw] 2xl:px-[2.5vw] gap-[2vw] lg:gap-[1vw] rounded-md border-[0.3vw] sm:border-[0.25vw] md:border-[0.2vw] lg:border-[0.15vw] xl:border-[0.12vw] 2xl:border-[3px] border-solid border-[#009ADE] hover:bg-[#009ADE] transition-all duration-300"
          onClick={() => alert("Pressed!")}
        >
          <span className="text-[#009ADE] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw] font-bold group-hover:text-white transition-colors duration-300">
            Let's Connect
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3.5vw] md:h-[3.5vw] lg:w-[2.5vw] lg:h-[2.5vw] xl:w-[2vw] xl:h-[2vw] 2xl:w-[1.5vw] 2xl:h-[1.5vw] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
