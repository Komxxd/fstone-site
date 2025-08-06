import React from "react";
import whychooseusimage from "../../assets/whychooseimage.png"

export default function WhyChooseSection() {
  return (
    <div className="flex justify-between items-start self-stretch bg-[#F7F7F7] pr-[422px]">
      <img
        src={
          whychooseusimage
        }
        className="w-[972px] h-[819px] object-fill"
        alt=""
      />
      <div className="flex flex-col shrink-0 items-start mt-[117px]">
        <span className="text-[#535353] text-5xl font-bold mb-11">
          Why choose FSTONE
        </span>
        <span className="text-neutral-500 text-[28px] w-[443px] mb-[54px]">
          To succeed in the complex world of technology, you need exceptional
          connections—to the right experts, the right opportunities, and the
          right answers.
        </span>
        <button
          className="group flex items-center bg-transparent text-left py-[29px] px-[89px] ml-[1px] gap-[11px] rounded-md border-[3px] border-solid border-[#009ADE]"
          onClick={() => alert("Pressed!")}
        >
          <span className="text-[#009ADE] text-xl font-bold">
            Learn more
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#009ADE"
            className="w-10 h-10"
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
