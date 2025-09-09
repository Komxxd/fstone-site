import React from "react";
import HeroImage from "../../assets/Home/HeroImage.png"
import BlueArrow from "../../assets/Home/BlueArrow.png";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const images = [HeroImage, HeroImage, HeroImage];

  return (
    <div
      className="self-stretch bg-cover bg-center py-[0.5px] mb-[clamp(2px,0.5vw,3px)] mt-[clamp(10px,2vw,22px)] transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentSlide - 1]})`,
      }}
    >
      <div
        className="flex flex-col items-start self-stretch pt-[clamp(80px,12vw,177px)] pb-[clamp(30px,6vw,62px)] relative"
        style={{
          background: "linear-gradient(180deg, #73737300, #2D2D2D99, #000000)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-0"></div>

        
        <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8 ml-6 sm:ml-12 lg:ml-24 relative z-10 w-full max-w-[90%]">
          FSTONE TECHNOLOGIES
        </span>

        
        <span className="text-[#D6D6D6] text-[clamp(14px,2.2vw,28px)] font-normal w-[clamp(250px,60vw,732px)] mb-[clamp(20px,6vw,76px)] ml-[clamp(16px,5vw,95px)] relative z-10 leading-relaxed">
          We partner closely with clients to drive real transformation—backed by
          deep expertise and proven results. Let's connect and shape your future
          together.
        </span>

      
        <button
          className="group flex items-center justify-center bg-transparent hover:bg-[#009ADE] text-center w-[clamp(140px,20vw,336px)] h-[clamp(44px,8vw,94px)] mb-[clamp(40px,10vw,143px)] ml-[clamp(16px,5vw,95px)] gap-[clamp(6px,1vw,11px)] rounded-md border-[clamp(1.5px,0.4vw,3px)] border-solid border-[#009ADE] relative z-10 transition-colors duration-300"
          onClick={() => alert("Pressed!")}
        >
          <span className="text-white text-[clamp(14px,1.5vw,20px)] font-bold transform transition-transform duration-300 group-hover:-translate-x-2">
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
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>

     
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full px-[clamp(16px,5vw,95px)] relative z-10 gap-[clamp(20px,3vw,40px)]">
          
         
          <div className="flex flex-col sm:flex-row gap-[clamp(12px,4vw,59px)] mt-[clamp(10px,2vw,26px)]">
            {[
              "Work Solutions & Outsourcing Services",
              "Staff Augmentation & IT Augmentation",
            ].map((text, idx) => (
              <div key={idx} className="group flex items-center gap-[clamp(4px,1vw,10px)] cursor-pointer">
                <img
                  src={BlueArrow}
                  className="w-[clamp(14px,2vw,32px)] h-[clamp(14px,2vw,32px)] object-fill transform transition-transform duration-300 group-hover:-rotate-90"
                  alt=""
                />
                <span className="text-white text-[clamp(12px,2vw,24px)] underline decoration-white decoration-1 font-thin group-hover:text-[#009ADE] group-hover:decoration-[#009ADE] transition">
                  {text}
                </span>
              </div>
            ))}
          </div>

          
          <div className="flex items-center gap-[clamp(6px,1vw,16px)] mt-[clamp(6px,1vw,10px)]">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1))
              }
              className="text-white text-[clamp(14px,1.5vw,20px)] hover:text-[#009ADE] transition"
            >
              &#x25C0;
            </button>

            <div className="relative w-[clamp(40px,8vw,88px)] h-[clamp(40px,8vw,88px)]">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 88 88"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="40"
                  fill="transparent"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="40"
                  fill="transparent"
                  stroke="#009ADE"
                  strokeWidth="1"
                  strokeDasharray="251"
                  strokeDashoffset={251 - (251 * currentSlide) / 3}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-[clamp(10px,1.2vw,18px)]">
                {currentSlide}/3
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1))
              }
              className="text-white text-[clamp(14px,1.5vw,20px)] hover:text-[#009ADE] transition"
            >
              &#x25B6;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
