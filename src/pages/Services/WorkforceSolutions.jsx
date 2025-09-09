import React from "react";
import workforcesol from "../../assets/Services/workforcesol.png"; 

export default function WorkforceSolutions() {
  return (
    <div className="relative w-full bg-white">
      
      <img
        src={workforcesol}
        alt="Workforce Solutions Hero"
        className="w-full object-cover"
        style={{
          aspectRatio: "1874/624",
          height: "clamp(300px, 60vh, 800px)" 
        }}
      />

    
      <div
        className="absolute inset-0 flex flex-col justify-center items-start"
        style={{
          padding: "clamp(30px, 6vw, 100px) clamp(20px, 5vw, 120px)" 
        }}
      >
        <h1
          className="text-white font-bold leading-tight"
          style={{
            fontSize: "clamp(28px, 4.5vw, 64px)", 
            maxWidth: "clamp(400px, 90vw, 800px)" 
          }}
        >
          Workforce Solutions
        </h1>

        <p
          className="text-white font-bold leading-relaxed mt-[clamp(12px,2vw,22px)]"
          style={{
            fontSize: "clamp(16px, 1.8vw, 20px)",
            maxWidth: "clamp(400px, 90vw, 900px)"
          }}
        >
          To help businesses navigate technological challenges, we provide IT staffing solutions. 
          We first understand your business goals and current workforce to identify talent gaps. 
          Then, we create a strategic staffing plan to provide you with the right people and 
          skills needed for your success.
        </p>

        
        <button
          className="group flex items-center justify-center bg-transparent hover:bg-[#009ADE] text-center rounded-md border-solid border-[#009ADE] transition-all duration-300 mt-[clamp(24px,3vw,40px)] min-w-[160px] min-h-[48px]"
          style={{
            width: "clamp(160px, 25vw, 360px)", 
            height: "clamp(48px, 6vw, 90px)",
            gap: "clamp(8px, 1vw, 11px)",
            borderWidth: "clamp(1.5px, 0.3vw, 3px)"
          }}
          onClick={() => alert("Pressed!")}
        >
          <span
            className="text-white font-bold transform transition-transform duration-300 group-hover:-translate-x-2"
            style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }} 
          >
            Let's Connect
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white transform transition-transform duration-300 group-hover:-rotate-12"
            style={{
              width: "clamp(18px, 2.5vw, 32px)",
              height: "clamp(18px, 2.5vw, 32px)"
            }}
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
