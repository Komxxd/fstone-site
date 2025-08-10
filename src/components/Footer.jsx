import React from "react";
import fstoneLogo from "../assets/fstoneLogo.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-white pt-[8vw] pb-[6vw] px-[4vw] md:px-[8vw]">
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-start max-w-[1800px]">
        
        
        <div className="w-full md:w-[45%] lg:w-[35%] xl:w-[30%] flex flex-col items-start mb-[6vw] md:mb-0">
          <img
            src={fstoneLogo}
            className="w-[40vw] md:w-[25vw] lg:w-[20vw] xl:w-[15vw] max-w-[380px] h-auto mb-[4vw] md:mb-[2vw] object-contain"
            alt="Fstone Logo"
          />
          <p className="text-neutral-500 text-[3vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1.2vw] w-full mb-[5vw] md:mb-[3vw] leading-relaxed">
            To succeed in the complex world of technology, you need exceptional
            connections—to the right experts, the right opportunities and the
            right answers
          </p>
          <h3 className="text-[#009ADE] text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-bold mb-[3vw] md:mb-[1.5vw]">
            Follow Us on
          </h3>
          <div className="flex items-center gap-[1.2vw] mb-[2vw]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#009ADE" viewBox="0 0 24 24" className="w-[4vw] sm:w-[3.5vw] md:w-[2.8vw] lg:w-[2.2vw] xl:w-[1.8vw] h-auto">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#009ADE" viewBox="0 0 24 24" className="w-[4.2vw] sm:w-[3.7vw] md:w-[3vw] lg:w-[2.4vw] xl:w-[2vw] h-auto">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.75v1.71h.05c.52-.98 1.79-2.01 3.7-2.01 3.95 0 4.68 2.6 4.68 5.98V21h-4v-5.64c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21H9z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#009ADE" viewBox="0 0 24 24" className="w-[4.2vw] sm:w-[3.7vw] md:w-[3vw] lg:w-[2.4vw] xl:w-[2vw] h-auto">
                <path d="M8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.34 8.34 0 0022 5.92a8.19 8.19 0 01-2.36.65A4.13 4.13 0 0021.45 4a8.27 8.27 0 01-2.6.99 4.1 4.1 0 00-6.99 3.73A11.65 11.65 0 013 5.15a4.1 4.1 0 001.27 5.47A4.07 4.07 0 012.8 10v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.24 8.24 0 012 18.58 11.6 11.6 0 008.29 20" />
              </svg>
            </a>
          </div>
          
         
          <div className="flex items-center gap-[0.8vw] w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className="w-[3vw] sm:w-[2.8vw] md:w-[2.2vw] lg:w-[1.8vw] xl:w-[1.5vw] h-auto">
              <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.2l-10 6.25L2 6.2V6zm0 2.58v9.42a2 2 0 002 2h16a2 2 0 002-2V8.58l-9.24 5.77a1 1 0 01-1.04 0L2 8.58z" />
            </svg>
            <a href="mailto:www.fstonetech@gmail.com" className="!text-[#737373] hover:!text-[#009ADE] text-[3vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-medium transition-colors duration-300">
              www.fstonetech@gmail.com
            </a>
          </div>
        </div>

        
        <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[25%] flex flex-col items-start mb-[6vw] md:mb-0 pt-[5.5vw] md:pt-[3.5vw] lg:pt-[2.5vw] xl:pt-[2vw]">
          <div className="flex flex-col items-start gap-[2vw] md:gap-[1.5vw] lg:gap-[1.2vw] xl:gap-[1vw]">
            <a href="/" className="!text-[#737373] text-[3.5vw] sm:text-[2.8vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-medium hover:!text-[#009ADE] transition-colors duration-300">
              Home
            </a>
            <a href="/services" className="!text-[#737373] text-[3.5vw] sm:text-[2.8vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-medium hover:!text-[#009ADE] transition-colors duration-300">
              Services
            </a>
            <a href="/about" className="!text-[#737373] text-[3.5vw] sm:text-[2.8vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-medium hover:!text-[#009ADE] transition-colors duration-300">
              About Us
            </a>
            <a href="/news" className="!text-[#737373] text-[3.5vw] sm:text-[2.8vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-medium hover:!text-[#009ADE] transition-colors duration-300">
              News & Views
            </a>
            <a href="/careers" className="!text-[#737373] text-[3.5vw] sm:text-[2.8vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-medium hover:!text-[#009ADE] transition-colors duration-300">
              Careers with us
            </a>
            <a href="/why-recruitment" className="!text-[#737373] text-[3.5vw] sm:text-[2.8vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-medium hover:!text-[#009ADE] transition-colors duration-300">
              Why a career in Recruitment
            </a>
          </div>
        </div>

       
        <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[25%] flex flex-col items-start">
          <h4 className="text-[#009ADE] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.35vw] font-bold mb-[3vw] md:mb-[1.5vw]">
            Have a question?
          </h4>
          <div className="w-full flex flex-col items-start mb-[3vw] md:mb-[1.5vw]">
            <input 
              type="text" 
              placeholder="Write to us" 
              className="w-full py-[2vw] md:py-[1.5vw] lg:py-[1vw] px-[3vw] md:px-[2vw] text-[3.5vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] text-[#333333] border border-solid border-[#73737394] rounded-none focus:outline-none focus:ring-2 focus:ring-[#009ADE]"
            />
          </div>
          <button className="bg-[#009ADE] hover:bg-[#0082c4] text-white py-[2vw] md:py-[1.5vw] lg:py-[1vw] px-[6vw] md:px-[4vw] lg:px-[3vw] xl:px-[2.5vw] text-[3.5vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-bold transition-colors duration-300">
            Send
          </button>
        </div>
      </div>



      
      <div className="w-full max-w-[1800px] px-[4vw] md:px-[8vw] mt-[4vw] md:mt-[2vw]">
        <div className="flex justify-end">
          <span className="text-neutral-500 text-[3vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.1vw] font-bold">
            Copyright 2018 by Fstone Technologies
          </span>
        </div>
      </div>
    </div>
  );
}
