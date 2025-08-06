import React, { useState } from "react";
import dtcclogo from "../../assets/dtcclogo.png";
import tatalogo from "../../assets/tatalogo.png";
import infosyslogo from "../../assets/infosyslogo.png";

const partners = [
  {
    img: dtcclogo,
    imgClass: "w-[181px] h-[47px] mb-[47px] object-fill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[46px]",
  },
  {
    img: tatalogo,
    imgClass: "flex items-center mb-9",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[46px]",
  },
  {
    img: infosyslogo,
    imgClass: "w-[188px] h-[72px] object-fill mb-[22px]",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[46px]",
  },
  {
    img: dtcclogo,
    imgClass: "w-[181px] h-[47px] mb-[47px] object-fill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[46px]",
  },
  {
    img: tatalogo,
    imgClass: "flex items-center mb-9",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[46px]",
  },
  {
    img: infosyslogo,
    imgClass: "w-[188px] h-[72px] object-fill mb-[22px]",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    descClass: "mb-[46px]",
  },
];

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex + 3 < partners.length;

  const visiblePartners = partners.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex flex-col items-start self-stretch bg-white pt-[108px] pb-[95px]">
      {/* Title */}
      <div className="w-full px-[318px] mb-[119px]">
        <span className="text-[#535353] text-5xl font-bold">
          Partners we are with
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-row w-full px-[318px] gap-8">
        {visiblePartners.map((partner, idx) => (
          <div className="flex flex-col flex-1 items-start" key={idx}>
            {Array.isArray(partner.img) ? (
              <div className={partner.imgClass}>
                <img
                  src={partner.img[0]}
                  className="w-[84px] h-[60px] object-fill"
                  alt=""
                />
                <img
                  src={partner.img[1]}
                  className="w-40 h-[55px] object-fill"
                  alt=""
                />
              </div>
            ) : (
              <img src={partner.img} className={partner.imgClass} alt="" />
            )}
            <span
              className={`text-[#535353] text-[28px] font-bold ${partner.descClass}`}
            >
              {partner.desc}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[#009ADE] text-[28px] font-bold">
                Learn more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#009ADE"
                viewBox="0 0 24 24"
                className="w-[26px] h-[26px]"
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

      {/* Navigation */}
      <div className="flex w-full px-[318px] mt-12 justify-end">
        <div className="flex items-center gap-4">
          <button
            className="w-[54px] h-[54px] rounded-full border border-[#81CDED] flex items-center justify-center group disabled:opacity-40"
            onClick={() => canGoLeft && setCurrentIndex(currentIndex - 3)}
            disabled={!canGoLeft}
          >
            <svg
              className="w-4 h-4 text-[#81CDED] group-hover:text-[#009ADE] transition"
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
            className="w-[54px] h-[54px] rounded-full border-2 border-[#009ADE] flex items-center justify-center group disabled:opacity-40"
            onClick={() => canGoRight && setCurrentIndex(currentIndex + 3)}
            disabled={!canGoRight}
          >
            <svg
              className="w-4 h-4 text-[#009ADE] group-hover:text-[#005F99] transition"
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
