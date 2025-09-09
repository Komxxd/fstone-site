import React, { useState } from "react";
import dtcclogo from "../../assets/Home/dtcclogo.png";
import tatalogo from "../../assets/Home/tatalogo.png";
import infosyslogo from "../../assets/Home/infosyslogo.png";

const partners = [
  {
    img: dtcclogo,
    imgClass:
      "w-[clamp(90px,12vw,181px)] h-[clamp(25px,3vw,47px)] mb-[clamp(20px,3vw,47px)] object-fill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[clamp(20px,3vw,46px)]",
  },
  {
    img: [tatalogo], 
    imgClass: "flex items-center mb-[clamp(15px,2vw,36px)]",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[clamp(20px,3vw,46px)]",
  },
  {
    img: infosyslogo,
    imgClass:
      "w-[clamp(90px,12vw,188px)] h-[clamp(35px,4vw,72px)] object-fill mb-[clamp(15px,2vw,22px)]",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[clamp(20px,3vw,46px)]",
  },
  {
    img: dtcclogo,
    imgClass:
      "w-[clamp(90px,12vw,181px)] h-[clamp(25px,3vw,47px)] mb-[clamp(20px,3vw,47px)] object-fill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[clamp(20px,3vw,46px)]",
  },
  {
    img: [tatalogo], 
    imgClass: "flex items-center mb-[clamp(15px,2vw,36px)]",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[clamp(20px,3vw,46px)]",
  },
  {
    img: infosyslogo,
    imgClass:
      "w-[clamp(90px,12vw,188px)] h-[clamp(35px,4vw,72px)] object-fill mb-[clamp(15px,2vw,22px)]",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[clamp(20px,3vw,46px)]",
  },
];

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex + 3 < partners.length;

  const visiblePartners = partners.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex flex-col items-start self-stretch bg-white pt-[clamp(50px,8vw,108px)] pb-[clamp(40px,8vw,95px)]">
      
      <div className="w-full px-6 sm:px-12 lg:px-24 mb-10 sm:mb-16 lg:mb-20">
        <span className="text-[#535353] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Partners we are with
        </span>
      </div>

     
      <div className="flex flex-col md:flex-row w-full px-[clamp(20px,10vw,318px)] gap-[clamp(16px,3vw,32px)]">
        {visiblePartners.map((partner, idx) => (
          <div className="flex flex-col flex-1 items-start" key={idx}>
            {Array.isArray(partner.img) ? (
              <div className={`${partner.imgClass} gap-[clamp(8px,1vw,16px)]`}>
                <img
                  src={partner.img[0]}
                  className="w-[clamp(60px,10vw,140px)] h-[clamp(20px,4vw,50px)] object-fill"
                  alt=""
                />
              </div>
            ) : (
              <img src={partner.img} className={partner.imgClass} alt="" />
            )}
            <span
              className={`text-[#535353] text-[clamp(16px,2.5vw,28px)] font-bold ${partner.descClass}`}
            >
              {partner.desc}
            </span>
            <div className="flex items-center gap-[clamp(8px,1vw,12px)]">
              <span className="text-[#009ADE] text-[clamp(16px,2.5vw,28px)] font-bold">
                Learn more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#009ADE"
                viewBox="0 0 24 24"
                className="w-[clamp(16px,2vw,26px)] h-[clamp(16px,2vw,26px)]"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex w-full px-[clamp(20px,10vw,318px)] mt-[clamp(20px,3vw,48px)] justify-end">
        <div className="flex items-center gap-[clamp(8px,1.5vw,16px)]">
          <button
            className="w-[clamp(36px,5vw,54px)] h-[clamp(36px,5vw,54px)] rounded-full border border-[#81CDED] flex items-center justify-center group disabled:opacity-40"
            onClick={() => canGoLeft && setCurrentIndex(currentIndex - 3)}
            disabled={!canGoLeft}
          >
            <svg
              className="w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] text-[#81CDED] group-hover:text-[#009ADE] transition"
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
            className="w-[clamp(36px,5vw,54px)] h-[clamp(36px,5vw,54px)] rounded-full border-2 border-[#009ADE] flex items-center justify-center group disabled:opacity-40"
            onClick={() => canGoRight && setCurrentIndex(currentIndex + 3)}
            disabled={!canGoRight}
          >
            <svg
              className="w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] text-[#009ADE] group-hover:text-[#005F99] transition"
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
  );
}
