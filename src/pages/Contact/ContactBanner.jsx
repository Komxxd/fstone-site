import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ContactBanner() {
  const navigate = useNavigate();
  const location = useLocation();

  const submenus = [{ name: "Our Locations", path: "OurLocations" }];

  const [active, setActive] = useState("Our Locations");

  useEffect(() => {
    const current = submenus.find((item) =>
      location.pathname.includes(item.path)
    );
    if (current) {
      setActive(current.name);
    } else {
      setActive("Our Locations"); 
    }
  }, [location.pathname]);

  const handleClick = (item) => {
    setActive(item.name);
    navigate(`/contacts/${item.path}`);
  };

  return (
    <div className="bg-[#009ADE] w-full mt-20">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[clamp(40px,8vw,70px)]">
        <div className="flex items-center px-[clamp(8px,2vw,32px)] h-full">
          <span
            className="text-white font-medium"
            style={{ fontSize: "clamp(14px, 2vw, 15px)" }}
          >
            Contacts
          </span>
        </div>

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
                  fontSize: "clamp(14px, 2vw, 15px)",
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
