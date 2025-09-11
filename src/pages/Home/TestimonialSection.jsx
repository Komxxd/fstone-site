import React, { useState } from "react";
import testimonial1 from "../../assets/Home/testimonial1.png";
import testimonial2 from "../../assets/Home/testimonial2.png";

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
    <div className="bg-black pt-[clamp(50px,8vw,108px)] pb-[clamp(40px,8vw,95px)]">
      <div className="w-full px-6 sm:px-12 lg:px-24 mb-10 sm:mb-16 lg:mb-20">
        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Your Success Is Our Success
        </span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 px-6 sm:px-12">
        <div className="w-full max-w-md lg:max-w-[700px] flex-shrink-0">
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>

        <div className="w-full max-w-[500px] text-center lg:text-left">
          <span className="text-[#009ADE] text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-bold block leading-tight">
            {t.name}
          </span>
          {t.title && (
            <span className="text-[#7C8A9A] text-lg sm:text-xl md:text-2xl lg:text-[28px] block mb-4">
              {t.title}
            </span>
          )}
          <p className="text-[#D6D6D6] text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed">
            {t.quote}
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end max-w-6xl mx-auto mt-10 px-6 sm:px-12">
        <div className="flex items-center gap-4">
          <button
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-[#81CDED] flex items-center justify-center group disabled:opacity-40"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-[#009ADE] flex items-center justify-center group disabled:opacity-40"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
