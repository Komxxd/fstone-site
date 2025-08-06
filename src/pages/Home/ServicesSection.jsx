import React from "react";
import clientservices from "../../assets/clientservices.png"
import itstaff from "../../assets/itstaff.png"
import techconsult from "../../assets/techconsult.png"

export default function ServicesSection() {
  const cards = [
    {
      title: "Client Services",
      bgColor: "bg-[#EDEFEE]",
      headingColor: "text-black",
      textColor: "text-white", 
      gradient: "bg-gradient-to-b from-[#EDEFEE]/90 to-[#0E1E35]/95",
      image:
        clientservices,
      description:
        "We've earned our reputation as an industry leader for our unparalleled ability to attract and retain great people that empower your success. Since our founding, we have invested in and evolved our core expertise in talent acquisition.",
    },
    {
      title: "IT Staff Augmentation",
      bgColor: "bg-[#0E1E35]",
      headingColor: "text-white",
      textColor: "text-white",  
      gradient: "bg-gradient-to-b from-[#0E1E35]/90 to-[#000000]/95",
      image:
        itstaff,
      description:
        "FSTONE Technologies has the expertise and the resources to connect you to the industry's very best IT talent. We draw from our proprietary database of over 1 million qualified candidates to help you find IT professionals that fit seamlessly with your team and your goals.",
    },
    {
      title: "Technology Consulting",
      bgColor: "bg-[#C6D3D6]",
      headingColor: "text-black",
      textColor: "text-white",  
      gradient: "bg-gradient-to-b from-[#C6D3D6]/90 to-[#707B81]/95",
      image:
        techconsult,
      description:
        "We, at FSTONE Technologies, facilitate you to attain and prolong your success by an end to end strategic, well-designed and transformational approach to ensure enhanced performance, augmented efficacy, and reduction in expenditure.",
    },
  ];

  return (
    <div className="self-stretch bg-black pt-[99px] pb-[149px]">
      <div className="flex items-start self-stretch mb-[89px] mx-[314px]">
        <span className="text-white text-5xl font-bold mr-auto">
          Our Services
        </span>
        <div className="flex gap-4 mt-[22px]">
          
          <button className="w-[54px] h-[54px] rounded-full border border-[#81CDED] flex items-center justify-center group">
            <svg
              className="w-4 h-4 text-[#81CDED] group-hover:text-[#009ADE] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          
          <button className="w-[54px] h-[54px] rounded-full border-2 border-[#009ADE] flex items-center justify-center group">
            <svg
              className="w-4 h-4 text-[#009ADE] group-hover:text-[#005F99] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-stretch self-stretch mx-[316px] gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex-1 flex flex-col overflow-hidden group"
            style={{ minHeight: "540px" }}
          >
            
            <div className={`absolute inset-0 transition-opacity duration-500 ${card.bgColor} group-hover:opacity-0`} />

            
            <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${card.gradient} group-hover:opacity-100`} />

            
            <div className="relative z-10 flex flex-col h-full">
              
              <div className="w-full p-6">
                <span className={`text-[26px] font-medium ${card.headingColor}`}>
                  {card.title}
                </span>
              </div>

             
              <img
                src={card.image}
                className="w-full flex-1 object-cover transform transition-transform duration-500 group-hover:-translate-x-full"
              />

              
              <div
                className={`absolute top-0 left-0 w-full h-full px-6 pt-20 pb-6 opacity-0 transform translate-x-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 flex flex-col justify-between z-10`}
              >
                <p className={`${card.textColor} text-[22px] leading-relaxed flex-1 font-normal`}>
                  {card.description}
                </p>
                <div className="flex items-center gap-2 self-end cursor-pointer mt-4">
                  <span className="text-[#00AEEF] font-medium text-[15px]">
                    Read more
                  </span>
                  <svg
                    className="w-4 h-4 text-[#00AEEF]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
