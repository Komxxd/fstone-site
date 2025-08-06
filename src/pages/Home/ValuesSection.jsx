import React from "react";
import ourvalues1 from "../../assets/ourvalues1.png"
import ourvalues2 from "../../assets/ourvalues2.png"
import ourvalues3 from "../../assets/ourvalues3.png"
import ourvalues4 from "../../assets/ourvalues4.png"
import ourvalues5 from "../../assets/ourvalues5.png"

export default function ValuesSection() {
  const gridItems = [
    {
      type: "image",
      src: ourvalues1,
    },
    {
      type: "text",
      bg: "#341D55",
      text: "Act with uncompromising honesty and integrity",
    },
    {
      type: "image",
      src: ourvalues2,
    },
    {
      type: "text",
      bg: "#2F8FD0",
      text: "Safety our customer with innovative, superior quality of service.",
    },
    {
      type: "image",
      src: ourvalues3,
    },
    {
      type: "text",
      bg: "#746FA8",
      text: "Value and develop our employees' talents, initiative and leadership",
    },
    {
      type: "image",
      src: ourvalues4,
    },
    {
      type: "text",
      bg: "#096289",
      text: "Earn the admiration of all who are associated with ventures unlimited Inc.",
    },
    {
      type: "image",
      src: ourvalues5,
    },
  ];

  return (
    <div className="self-stretch mb-[3px] bg-white">
      <div className="grid grid-cols-3">
        {gridItems.map((item, index) => (
          <div key={index} className="w-full h-[630px]">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`grid-${index}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center px-8"
                style={{ backgroundColor: item.bg }}
              >
                <span className="text-white text-[56px] font-normal text-left leading-snug p-4">
                  {item.text}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
