import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ServicesBanner() {
  const navigate = useNavigate();
  const location = useLocation();

  const submenus = [
    { name: "Client Services", path: "ClientServices" },
    { name: "IT Staff", path: "ITStaff" },
    { name: "Technology Consulting", path: "TechnologyConsulting" },
    { name: "Business Consulting", path: "BusinessConsulting" },
    { name: "Workforce Solutions", path: "WorkforceSolutions" },
  ];

  const [active, setActive] = useState("Client Services");

  // Sync active tab with URL
  useEffect(() => {
    const current = submenus.find((item) =>
      location.pathname.includes(item.path)
    );
    if (current) {
      setActive(current.name);
    } else {
      setActive("Client Services"); // default
    }
  }, [location.pathname]);

  const handleClick = (item) => {
    setActive(item.name);
    navigate(`/services/${item.path}`);
  };

  return (
    <div className="bg-[#009ADE] w-full mt-20">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[clamp(40px,8vw,70px)]">
        {/* Main Title */}
        <div className="flex items-center px-[clamp(8px,2vw,32px)] h-full">
          <span
            className="text-white font-medium"
            style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
          >
            Services
          </span>
        </div>

        {/* Sub Navigation */}
        <div className="flex h-full">
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
                  fontSize: "clamp(14px, 2vw, 20px)",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
