import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CareersBanner() {
  const navigate = useNavigate();
  const location = useLocation();

  const submenus = [
    { name: "Why a Career in Recruitment", path: "WhyCareerInRecruitment" },
    { name: "Career with Us", path: "CareerWithUs" },
    { name: "Current Openings", path: "CurrentOpenings" },
  ];

  const [active, setActive] = useState("Why a Career in Recruitment");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const current = submenus.find((item) =>
      location.pathname.includes(item.path)
    );
    if (current) {
      setActive(current.name);
    } else {
      setActive("Why a Career in Recruitment");
    }
  }, [location.pathname]);

  const handleClick = (item) => {
    setActive(item.name);
    navigate(`/careers/${item.path}`);
    setIsOpen(false); 
  };

  return (
    <div className="bg-[#009ADE] w-full mt-20">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[clamp(40px,8vw,70px)] px-4">
        
        <div className="flex items-center">
          <span
            className="text-white font-medium"
            style={{ fontSize: "clamp(14px, 2vw, 15px)" }}
          >
            Careers
          </span>
        </div>

        
        <div className="hidden sm:flex h-full">
          {submenus.map((item) => (
            <div
              key={item.name}
              onClick={() => handleClick(item)}
              className={`flex items-center justify-center px-[clamp(8px,2vw,24px)] cursor-pointer h-full transition-colors ${
                active === item.name ? "bg-[#0056DE]" : ""
              }`}
            >
              <span
                className="font-medium text-white"
                style={{
                  fontSize: "clamp(14px, 2vw, 15px)",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>

      
        <div className="sm:hidden">
          <button
            className="p-2 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
            
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="sm:hidden bg-[#009ADE] border-t border-blue-300">
          {submenus.map((item) => (
            <div
              key={item.name}
              onClick={() => handleClick(item)}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                active === item.name ? "bg-[#0056DE]" : "hover:bg-[#0077d9]"
              }`}
            >
              <span className="text-white font-medium text-sm">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
