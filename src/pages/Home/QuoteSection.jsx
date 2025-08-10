import React from "react";

export default function QuoteSection() {
  return (
    <div className="flex flex-col items-center self-stretch bg-[#F7F7F7] pt-[clamp(3rem,8vw,8.375rem)] pb-[clamp(3rem,10vw,10.9375rem)] px-[5%]">
      <span
        className="text-[#009ADE] font-semibold text-center leading-snug 
                   text-[clamp(1.25rem,3vw,2.25rem)] max-w-[90%] md:max-w-[80%] lg:max-w-[1280px]"
      >
        {
          "To succeed in the complex world of technology, you need exceptional connections—to the right experts, the right opportunities and the right answers"
        }
      </span>
    </div>
  );
}
