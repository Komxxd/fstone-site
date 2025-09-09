import React from "react";
import ourvalues1 from "../../assets/Home/ourvalues1.png"
import ourvalues2 from "../../assets/Home/ourvalues2.png"
import ourvalues3 from "../../assets/Home/ourvalues3.png"
import ourvalues4 from "../../assets/Home/ourvalues4.png"
import ourvalues5 from "../../assets/Home/ourvalues5.png"

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
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {gridItems.map((item, index) => (
          <div key={index} className="w-full aspect-square sm:aspect-auto sm:h-[50vw] lg:h-[40vw] xl:h-[35vw] 2xl:h-[630px]">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`grid-${index}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center p-[5vw] sm:p-[3vw] lg:p-[2vw]"
                style={{ backgroundColor: item.bg }}
              >
                <span className="text-white text-[5vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] 2xl:text-[56px] font-normal text-left leading-tight sm:leading-snug p-[2vw] sm:p-4">
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
