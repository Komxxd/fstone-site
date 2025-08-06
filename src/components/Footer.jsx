import React from "react";
import fstoneLogo from "../assets/fstoneLogo.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-start self-stretch bg-white pt-[158px] pb-[115px]">
      <div className="flex items-start mb-[22px] ml-[157px]">
        
        <div className="flex flex-col shrink-0 items-start mr-[158px]">
          <img
            src={fstoneLogo}
            className="w-[380px] h-24 mb-[41px] object-fill"
            alt="Fstone Logo"
          />
          <span className="text-neutral-500 text-2xl w-[433px] mb-[59px] mx-2">
            To succeed in the complex world of technology, you need exceptional
            connections—to the right experts, the right opportunities and the
            right answers
          </span>
          <span className="text-[#009ADE] text-3xl font-bold ml-2">
            Follow Us on
          </span>
        </div>

        
        <div className="flex flex-col shrink-0 items-start mt-10 mr-[50px] gap-[25px]">
          <span className="text-neutral-500 text-[26px] font-bold">Home</span>
          <div className="flex flex-col items-start gap-[26px]">
            <span className="text-neutral-500 text-2xl font-bold">Service</span>
            <span className="text-neutral-500 text-2xl font-bold">About Us</span>
            <span className="text-neutral-500 text-2xl font-bold">News & Views</span>
            <span className="text-neutral-500 text-2xl font-bold">Career with us</span>
            <span className="text-neutral-500 text-2xl font-bold">
              Why a career in Recruitment
            </span>
          </div>
        </div>

        
        <div className="flex flex-col shrink-0 items-start mt-10">
          <span className="text-[#009ADE] text-[26px] font-bold mb-[21px]">
            Have a question?
          </span>
          <div className="flex flex-col items-start py-[15px] pl-7 pr-[298px] mb-[30px] border border-solid border-[#73737394]">
            <span className="text-neutral-500 text-2xl font-bold">Write to us</span>
          </div>
          <div className="flex flex-col items-end self-stretch">
            <div className="flex flex-col items-start bg-[#009ADE] py-[15px] px-[69px]">
              <span className="text-white text-2xl font-bold">Send</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex items-center mb-[41px] ml-[165px] gap-[23px]">
        {/* Instagram */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#009ADE"
          viewBox="0 0 24 24"
          className="w-[41px] h-[41px]"
        >
          <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
        </svg>

        {/* LinkedIn */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#009ADE"
          viewBox="0 0 24 24"
          className="w-[43px] h-[43px]"
        >
          <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.75v1.71h.05c.52-.98 1.79-2.01 3.7-2.01 3.95 0 4.68 2.6 4.68 5.98V21h-4v-5.64c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21H9z" />
        </svg>

        {/* Twitter */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#009ADE"
          viewBox="0 0 24 24"
          className="w-[43px] h-[43px]"
        >
          <path d="M8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.34 8.34 0 0022 5.92a8.19 8.19 0 01-2.36.65A4.13 4.13 0 0021.45 4a8.27 8.27 0 01-2.6.99 4.1 4.1 0 00-6.99 3.73A11.65 11.65 0 013 5.15a4.1 4.1 0 001.27 5.47A4.07 4.07 0 012.8 10v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.24 8.24 0 012 18.58 11.6 11.6 0 008.29 20" />
        </svg>
      </div>

      {/* Email */}
      <div className="flex items-center pr-0.5 mb-[162px] ml-[165px] gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 24 24"
          className="w-12 h-12"
        >
          <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.2l-10 6.25L2 6.2V6zm0 2.58v9.42a2 2 0 002 2h16a2 2 0 002-2V8.58l-9.24 5.77a1 1 0 01-1.04 0L2 8.58z" />
        </svg>
        <span className="text-black text-2xl font-bold">
          www.fstonetech@gmail.com
        </span>
      </div>

      
      <div className="flex flex-col items-end self-stretch">
        <span className="text-neutral-500 text-2xl font-bold mr-[321px]">
          Copyright 2018 by Fstone Technologies
        </span>
      </div>
    </div>
  );
}
