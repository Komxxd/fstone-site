import React from "react";
import clientservices from "../../assets/Home/clientservices.png";
import itstaff from "../../assets/Home/itstaff.png";
import techconsult from "../../assets/Home/techconsult.png";

export default function ServicesSection() {
  const cards = [
    {
      title: "Client Services",
      bgColor: "bg-[#EDEFEE]",
      headingColor: "text-black",
      textColor: "text-white",
      gradient: "bg-gradient-to-b from-[#EDEFEE]/90 to-[#0E1E35]/95",
      image: clientservices,
      description:
        "We've earned our reputation as an industry leader for our unparalleled ability to attract and retain great people that empower your success. Since our founding, we have invested in and evolved our core expertise in talent acquisition.",
    },
    {
      title: "IT Staff Augmentation",
      bgColor: "bg-[#0E1E35]",
      headingColor: "text-white",
      textColor: "text-white",
      gradient: "bg-gradient-to-b from-[#0E1E35]/90 to-[#000000]/95",
      image: itstaff,
      description:
        "FSTONE Technologies has the expertise and the resources to connect you to the industry's very best IT talent. We draw from our proprietary database of over 1 million qualified candidates to help you find IT professionals that fit seamlessly with your team and your goals.",
    },
    {
      title: "Technology Consulting",
      bgColor: "bg-[#C6D3D6]",
      headingColor: "text-black",
      textColor: "text-white",
      gradient: "bg-gradient-to-b from-[#C6D3D6]/90 to-[#707B81]/95",
      image: techconsult,
      description:
        "We, at FSTONE Technologies, facilitate you to attain and prolong your success by an end to end strategic, well-designed and transformational approach to ensure enhanced performance, augmented efficacy, and reduction in expenditure.",
    },
  ];

  return (
    <div className="self-stretch bg-black pt-[clamp(50px,8vw,99px)] pb-[clamp(60px,10vw,149px)]">
      
     
      <div className="flex items-center justify-between self-stretch mb-10 sm:mb-16 lg:mb-20 px-6 sm:px-12 lg:px-24 w-full">
        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Our Services
        </span>
        <div className="flex gap-[clamp(8px,1.5vw,16px)]">
          
          <button className="w-[clamp(36px,5vw,54px)] h-[clamp(36px,5vw,54px)] rounded-full border border-[#81CDED] flex items-center justify-center group">
            <svg
              className="w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] text-[#81CDED] group-hover:text-[#009ADE] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"a
              />
            </svg>
          </button>
          
          <button className="w-[clamp(36px,5vw,54px)] h-[clamp(36px,5vw,54px)] rounded-full border-2 border-[#009ADE] flex items-center justify-center group">
            <svg
              className="w-[clamp(12px,1.5vw,16px)] h-[clamp(12px,1.5vw,16px)] text-[#009ADE] group-hover:text-[#005F99] transition"
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

      
      <div className="flex flex-col md:flex-row items-stretch self-stretch px-[clamp(20px,10vw,316px)] gap-[clamp(12px,2vw,24px)]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex-1 flex flex-col overflow-hidden group"
            style={{ minHeight: "clamp(350px,60vw,540px)" }}
          >
          
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${card.bgColor} group-hover:opacity-0`}
            />
            
            <div
              className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${card.gradient} group-hover:opacity-100`}
            />
            <div className="relative z-10 flex flex-col h-full">
              
              <div className="w-full p-[clamp(12px,2vw,24px)]">
                <span
                  className={`text-[clamp(18px,2.5vw,26px)] font-medium ${card.headingColor}`}
                >
                  {card.title}
                </span>
              </div>
              
              <img
                src={card.image}
                className="w-full flex-1 object-cover transform transition-transform duration-500 group-hover:-translate-x-full"
              />
              
              <div
                className={`absolute top-0 left-0 w-full h-full px-[clamp(12px,2vw,24px)] pt-[clamp(60px,10vw,80px)] pb-[clamp(12px,2vw,24px)] opacity-0 transform translate-x-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 flex flex-col justify-between z-10`}
              >
                <p
                  className={`${card.textColor} text-[clamp(14px,1.5vw,22px)] leading-relaxed flex-1 font-normal`}
                >
                  {card.description}
                </p>
                <div className="flex items-center gap-[clamp(4px,1vw,8px)] self-end cursor-pointer mt-[clamp(8px,1vw,16px)]">
                  <span className="text-[#00AEEF] font-medium text-[clamp(12px,1.2vw,15px)]">
                    Read more
                  </span>
                  <svg
                    className="w-[clamp(12px,1.2vw,16px)] h-[clamp(12px,1.2vw,16px)] text-[#00AEEF]"
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
