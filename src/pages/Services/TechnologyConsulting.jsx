import React from "react";
import { useNavigate } from "react-router-dom";
import techconsulthero from "../../assets/Services/technologyconsulthero.png";
import techinfo from "../../assets/Services/techinfoimg.png";

export default function TechnologyConsulting() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white w-full">
      <div className="flex flex-col items-start w-full bg-white min-h-screen">
        <div className="relative w-full">
          <img
            src={techconsulthero}
            alt="Technology Consulting Hero"
            className="w-full object-cover"
            style={{ 
              aspectRatio: "1874/624",
              height: "clamp(300px, 60vh, 800px)"
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center"
               style={{
                 padding: "clamp(30px, 6vw, 100px) clamp(20px, 5vw, 120px)"
               }}>
            <h1 className="text-white font-bold leading-tight"
                style={{
                  fontSize: "clamp(28px, 4.5vw, 64px)",
                  maxWidth: "clamp(280px, 80vw, 600px)"
                }}>
              Technology Consulting
            </h1>
            <p className="text-white font-bold leading-relaxed"
               style={{
                 fontSize: "clamp(16px, 1.8vw, 20px)",
                 maxWidth: "clamp(300px, 85vw, 700px)",
                 marginTop: "clamp(12px, 2vw, 22px)"
               }}>
              We help you achieve lasting success through a strategic,
              well-designed approach that boosts performance, enhances
              efficiency, reduces costs, and improves flexibility.
            </p>
            <button
              className="group flex items-center justify-center bg-transparent hover:bg-[#009ADE] text-center rounded-md border-solid border-[#009ADE] relative z-10 transition-all duration-300"
              style={{
                width: "clamp(160px, 22vw, 320px)",
                height: "clamp(48px, 6vw, 90px)",
                gap: "clamp(8px, 1vw, 11px)",
                borderWidth: "clamp(1.5px, 0.3vw, 3px)",
                marginTop: "clamp(24px, 3vw, 40px)"
              }}
              onClick={() => navigate("/contact")}
            >
              <span className="text-white font-bold transform transition-transform duration-300 group-hover:-translate-x-2"
                    style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}>
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

        <div className="flex flex-col xl:flex-row items-center w-full"
             style={{
               gap: "clamp(30px, 4vw, 80px)",
               padding: "clamp(40px, 6vw, 100px) clamp(20px, 5vw, 120px)"
             }}>
          <img
            src={techinfo}
            alt="Technology Consulting Illustration"
            className="w-full xl:w-1/2 object-cover rounded-lg"
            style={{ 
              aspectRatio: "948/549",
              height: "clamp(200px, 35vh, 500px)"
            }}
          />
          <p className="text-[#535353] font-bold leading-relaxed"
             style={{
               fontSize: "clamp(16px, 1.8vw, 20px)",
               maxWidth: "clamp(300px, 85vw, 700px)"
             }}>
            Our IT consulting services focus on understanding the current
            situation of your business. We go out of our way to enhance your
            business performance and provide reliable advisory services that
            help you transcend success to a higher level through our innovative
            IT consulting strategies.
          </p>
        </div>
      </div>
    </div>
  );
}