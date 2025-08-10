import React, { useState } from "react";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";

const testimonials = [
  {
    image: testimonial1,
    name: "National Health Insurance Provider",
    title: "",
    quote:
      '"My partnership with FSTONE Technologies is long and fruitful. The relationship is as important as the candidates we receive."',
  },
  {
    image: testimonial2,
    name: "Head of IT",
    title: "Healthcare Industry",
    quote:
      '"FSTONE has always impressed us with their efficient, professional manner - an approach that not only inspired confidence, but generates loyalty. The staff at FSTONE has always provided effective solution to any issues I\'ve had."',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < testimonials.length - 1;
  const t = testimonials[currentIndex];

  return (
    <div className="flex flex-col items-start self-stretch bg-black pt-20 sm:pt-28 lg:pt-[160px] pb-16 sm:pb-20 lg:pb-[120px]">
     
      <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 sm:mb-16 lg:mb-20 px-6 sm:px-12 lg:px-24 w-full block">
        Your Success Is Our Success
      </span>

    
      <div className="flex flex-col self-stretch px-6 sm:px-12 lg:ml-[319px] lg:mr-52 gap-8 sm:gap-10 lg:gap-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start self-stretch">
          
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img
              src={t.image}
              className="w-full max-w-sm sm:max-w-md lg:max-w-[737px] h-auto object-fill lg:mr-[108px] rounded-lg"
              alt={t.name}
            />
          </div>

          
          <div className="flex flex-col justify-between flex-1 max-w-full lg:max-w-[500px]">
            <div>
              <span className="text-[#009ADE] text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-bold block leading-tight">
                {t.name}
              </span>
              {t.title && (
                <span className="text-[#7C8A9A] text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal block leading-tight mb-4">
                  {t.title}
                </span>
              )}
              <span className="text-[#D6D6D6] text-lg sm:text-xl md:text-2xl lg:text-[28px] block leading-snug">
                {t.quote}
              </span>
            </div>
          </div>
        </div>

       
        <div className="flex w-full justify-center lg:justify-end mt-8 sm:mt-10 lg:mt-12 lg:mr-[113px]">
          <div className="flex items-center gap-3 sm:gap-4">
            
            <button
              className="w-10 sm:w-12 lg:w-[54px] h-10 sm:h-12 lg:h-[54px] rounded-full border border-[#81CDED] flex items-center justify-center group disabled:opacity-40"
              onClick={() => canGoLeft && setCurrentIndex(currentIndex - 1)}
              disabled={!canGoLeft}
              aria-label="Previous testimonial"
            >
              <svg
                className="w-3 sm:w-4 h-3 sm:h-4 text-[#81CDED] group-hover:text-[#009ADE] transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            
            <button
              className="w-10 sm:w-12 lg:w-[54px] h-10 sm:h-12 lg:h-[54px] rounded-full border-2 border-[#009ADE] flex items-center justify-center group disabled:opacity-40"
              onClick={() => canGoRight && setCurrentIndex(currentIndex + 1)}
              disabled={!canGoRight}
              aria-label="Next testimonial"
            >
              <svg
                className="w-3 sm:w-4 h-3 sm:h-4 text-[#009ADE] group-hover:text-[#005F99] transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
