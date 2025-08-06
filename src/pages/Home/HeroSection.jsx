import React from "react";
import HeroImage from "../../assets/HeroImage.png";
import BlueArrow from "../../assets/BlueArrow.png";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(1);

  const images = [HeroImage, HeroImage, HeroImage];

  return (
    <div
      className="self-stretch bg-cover bg-center py-0.5 mb-[3px] mt-[22px] transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentSlide - 1]})`,
      }}
    >
      <div
        className="flex flex-col items-start self-stretch pt-[177px] pb-[62px] relative"
        style={{
          background: "linear-gradient(180deg, #73737300, #2D2D2D99, #000000)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-0"></div>

        <span className="text-white text-[68px] font-bold mb-[17px] ml-[95px] relative z-10">
          FSTONE TECHNOLOGIES
        </span>

        <span className="text-[#D6D6D6] text-[28px] font-normal w-[732px] mb-[76px] ml-[95px] relative z-10">
          We partner closely with clients to drive real transformation—backed by
          deep expertise and proven results. Let's connect and shape your future
          together.
        </span>

        <button
          className="group flex items-center justify-center bg-transparent hover:bg-[#009ADE] text-center w-[336px] h-[94px] mb-[143px] ml-[95px] gap-[11px] rounded-md border-[3px] border-solid border-[#009ADE] relative z-10 transition-colors duration-300"
          onClick={() => alert("Pressed!")}
        >
          <span className="text-white text-xl font-bold transform transition-transform duration-300 group-hover:-translate-x-2">
            Let's Connect
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-white transform transition-transform duration-300 group-hover:-rotate-12"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex items-start justify-between w-full px-[95px] relative z-10">
          <div className="flex gap-[59px] mt-[26px]">
            <div className="group flex items-center gap-2.5 cursor-pointer">
              <img
                src={BlueArrow}
                className="w-8 h-8 object-fill transform transition-transform duration-300 group-hover:-rotate-90"
                alt=""
              />
              <span className="text-white text-2xl underline decoration-white decoration-1 font-thin group-hover:text-[#009ADE] group-hover:decoration-[#009ADE] transition">
                Work Solutions & Outsourcing Services
              </span>
            </div>
            <div className="group flex items-center gap-2.5 cursor-pointer">
              <img
                src={BlueArrow}
                className="w-8 h-8 object-fill transform transition-transform duration-300 group-hover:-rotate-90"
                alt=""
              />
              <span className="text-white text-2xl underline decoration-white decoration-1 font-thin group-hover:text-[#009ADE] group-hover:decoration-[#009ADE] transition">
                Staff Augmentation & IT Augmentation
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-[10px] mr-6">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1))
              }
              className="text-white text-lg hover:text-[#009ADE] transition"
            >
              &#x25C0;
            </button>

            <div className="relative w-[88px] h-[88px]">
              <svg className="w-full h-full transform -rotate-90">
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
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                {currentSlide}/3
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1))
              }
              className="text-white text-lg hover:text-[#009ADE] transition"
            >
              &#x25B6;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
