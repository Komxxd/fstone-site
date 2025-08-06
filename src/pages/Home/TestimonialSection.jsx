import React, { useState } from "react";
import testimonial1 from "../../assets/testimonial1.png"
import testimonial2 from "../../assets/testimonial2.png"

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
    <div className="flex flex-col items-start self-stretch bg-black pt-[160px] pb-[120px]">
      <span className="text-white text-5xl font-bold mb-28 ml-[318px]">
        Your Success Is Our Success
      </span>
      <div className="flex flex-col self-stretch ml-[319px] mr-52 gap-12">
        <div className="flex flex-row items-center self-stretch">
          
          <div className="flex-shrink-0">
            <img
              src={t.image}
              className="w-[737px] h-[447px] object-fill mr-[108px] rounded-lg"
              alt={t.name}
            />
          </div>
         
          <div className="flex flex-col justify-between h-[447px] flex-1 max-w-[500px]">
            <div>
              <span className="text-[#009ADE] text-[38px] font-bold block leading-tight">
                {t.name}
              </span>
              {t.title && (
                <span className="text-[#7C8A9A] text-[28px] font-normal block leading-tight mb-4">{t.title}</span>
              )}
              <span className="text-[#D6D6D6] text-[28px] block leading-snug">
                {t.quote}
              </span>
            </div>
          </div>
        </div>
       
        <div className="flex w-full justify-end mt-12 mr-[113px]">
          <div className="flex items-center gap-4">
            
            <button
              className="w-[54px] h-[54px] rounded-full border border-[#81CDED] flex items-center justify-center group disabled:opacity-40"
              onClick={() => canGoLeft && setCurrentIndex(currentIndex - 1)}
              disabled={!canGoLeft}
              aria-label="Previous testimonial"
            >
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
          
            <button
              className="w-[54px] h-[54px] rounded-full border-2 border-[#009ADE] flex items-center justify-center group disabled:opacity-40"
              onClick={() => canGoRight && setCurrentIndex(currentIndex + 1)}
              disabled={!canGoRight}
              aria-label="Next testimonial"
            >
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
      </div>
    </div>
  );
}
