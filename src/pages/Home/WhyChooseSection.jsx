import React from "react";
import whychooseusimage from "../../assets/whychooseimage.png"

export default function WhyChooseSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start bg-[#F7F7F7]">
      <div className="w-full lg:w-[60%] xl:w-[55%] 2xl:w-[50%] overflow-hidden">
        <img
          src={whychooseusimage}
          className="w-full h-auto max-h-[90vh] object-cover object-left"
          alt="Why choose FSTONE"
        />
      </div>
      <div className="w-full lg:w-[40%] xl:w-[45%] 2xl:w-[50%] flex flex-col items-start p-6 sm:p-8 lg:p-12 xl:p-16 2xl:pl-32">
        <h2 className="text-[#535353] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-10 w-full">
          Why choose FSTONE
        </h2>
        <p className="text-neutral-500 text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[1.5vw] 2xl:text-[1.3vw] w-full lg:max-w-[90%] mb-[8vw] sm:mb-[6vw] lg:mb-[4vw] xl:mb-[3vw] 2xl:mb-[3.5vw] leading-relaxed">
          To succeed in the complex world of technology, you need exceptional
          connections—to the right experts, the right opportunities, and the
          right answers.
        </p>
        <button
          className="group flex items-center justify-center lg:justify-start bg-transparent text-center lg:text-left py-[3vw] sm:py-[2.5vw] md:py-[2vw] lg:py-[1.5vw] xl:py-[1.2vw] 2xl:py-[1vw] px-[10vw] sm:px-[8vw] md:px-[6vw] lg:px-[4vw] xl:px-[3vw] 2xl:px-[2.5vw] gap-[2vw] lg:gap-[1vw] rounded-md border-[0.3vw] sm:border-[0.25vw] md:border-[0.2vw] lg:border-[0.15vw] xl:border-[0.12vw] 2xl:border-[3px] border-solid border-[#009ADE] hover:bg-[#009ADE] transition-all duration-300"
          onClick={() => alert("Pressed!")}
        >
          <span className="text-[#009ADE] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw] font-bold group-hover:text-white transition-colors duration-300">
            Learn more
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
