import React from "react";
import { useNavigate } from "react-router-dom";
import outsourceservices from "../../assets/Services/outsourceservices.png"; 
import resumeIcon from "../../assets/Services/resume.png";
import interviewIcon from "../../assets/Services/interview.png";
import offerIcon from "../../assets/Services/offer.png";
import postInterviewIcon from "../../assets/Services/postinterview.png";

export default function OutSourcingServices() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white">
      <div className="relative w-full">
        <img
          src={outsourceservices}
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
            Outsourcing Services
          </h1>

          <p
            className="text-white font-bold leading-relaxed mt-[clamp(12px,2vw,22px)]"
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              maxWidth: "clamp(400px, 90vw, 900px)"
            }}
          >
            FSTONE is a premier recruitment firm specializing in permanent 
            placement across a variety of industries, including IT, Executive, 
            Accounting & Finance, Engineering, Human Resources, Medical Devices, 
            and Administrative.
          </p>

          <button
            className="group flex items-center justify-center bg-transparent hover:bg-[#009ADE] text-center rounded-md border-solid border-[#009ADE] transition-all duration-300 mt-[clamp(24px,3vw,40px)] min-w-[160px] min-h-[48px]"
            style={{
              width: "clamp(160px, 25vw, 360px)",
              height: "clamp(48px, 6vw, 90px)",
              gap: "clamp(8px, 1vw, 11px)",
              borderWidth: "clamp(1.5px, 0.3vw, 3px)"
            }}
            onClick={() => navigate("/contact")}
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

      
      <div
        className="w-full bg-black flex justify-center items-center"
        style={{
          padding: "clamp(20px, 4vw, 60px) clamp(20px, 5vw, 120px)"
        }}
      >
        <p
          className="text-white font-bold text-center"
          style={{
            fontSize: "clamp(16px, 2vw, 28px)",
            maxWidth: "clamp(300px, 85vw, 1000px)"
          }}
        >
          Our approach is built on confidentiality and trust, ensuring your success is our top priority.
        </p>
      </div>

      <div className="w-full bg-[#009ADE] py-[clamp(40px,5vw,80px)] px-[clamp(20px,5vw,120px)]">
      <h2
        className="text-white font-bold text-center mb-[clamp(30px,4vw,50px)]"
        style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
      >
        FSTONE Candidate Services
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-[clamp(20px,4vw,60px)] justify-items-center"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={resumeIcon}
            alt="Resume Critique"
            className="w-[clamp(50px,6vw,100px)] h-[clamp(50px,6vw,100px)] mb-[clamp(12px,2vw,20px)]"
          />
          <p className="text-white font-bold" style={{ fontSize: "clamp(14px,1.5vw,18px)" }}>
            Resume Critique
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={interviewIcon}
            alt="Interview Preparation"
            className="w-[clamp(50px,6vw,100px)] h-[clamp(50px,6vw,100px)] mb-[clamp(12px,2vw,20px)]"
          />
          <p className="text-white font-bold" style={{ fontSize: "clamp(14px,1.5vw,18px)" }}>
            Interview Preparation
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={offerIcon}
            alt="Offer and Resignation Assistance"
            className="w-[clamp(50px,6vw,100px)] h-[clamp(50px,6vw,100px)] mb-[clamp(12px,2vw,20px)]"
          />
          <p className="text-white font-bold" style={{ fontSize: "clamp(14px,1.5vw,18px)" }}>
            Offer and Resignation Assistance
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={postInterviewIcon}
            alt="Post-Interview Debrief"
            className="w-[clamp(50px,6vw,100px)] h-[clamp(50px,6vw,100px)] mb-[clamp(12px,2vw,20px)]"
          />
          <p className="text-white font-bold" style={{ fontSize: "clamp(14px,1.5vw,18px)" }}>
            Post-Interview Debrief
          </p>
        </div>
      </div>
    </div>
    </div>

    
  );
}
