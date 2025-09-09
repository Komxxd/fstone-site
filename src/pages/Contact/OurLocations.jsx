import React from "react";
import gurgaon from "../../assets/Contact/gurgaon.png"
import newjersey from "../../assets/Contact/newjersey.png"
import bangalore from "../../assets/Contact/bangalore.png"
import doylestown from "../../assets/Contact/doylestown.png"
import jaipur from "../../assets/Contact/jaipur.png"

export default function OurLocations() {
  const cards = [
    {
      title: "Gurgaon, India",
      subtitle: "Corporate Headquarter",
      details: `Unit No. 911-B, Tower B, 9th Floor, Spaze I - Tech Park, Sohna Road, Sector 49, 
      Gurgoan - 122018, Haryana. 
      Phone: +91-0124-2213605
      Email: info@fstontechnologies.com`,
      image: gurgaon,
    },
    {
      title: "New Jersey, USA",
      subtitle: "Corporate Headquarter",
      details: `3048, Congressional Office Park, Route - 27, Suite #3, Kendall Park, New Jersey - 08824 
      Phone: +1-267-222-1410
      Email: info@fstontechnologies.com`,
      image: newjersey,
    },
    {
      title: "Bangalore, India",
      details: `Unit No. 107, Ground Floor, Oxford Towers, Old Airport Road, Banglore 560008, India. 
      Phone: +91-080-41644-664
      Email: info@fstontechnologies.com`,
      image: bangalore,
    },
    {
      title: "Doylestown, PA",
      details: `2003 S Easton Rd, Suite 308, I, Doylestown, Pennsylvania - 18901, USA 
      Phone: +1-267-222-1410
      Email: info@fstontechnologies.com`,
      image: doylestown,
    },
    {
      title: "Jaipur, India",
      details: `Suite # 412, 4th Floor, City Plaza, Bani Park, Jaipur, Rajasthan - 302016, India 
      Phone: +91-014104024183
      Email: info@fstontechnologies.com`,
      image: jaipur,
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      <div className="w-full py-16 px-[clamp(16px,5vw,80px)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            <span className="text-[#1E1E1E] text-[clamp(28px,6vw,68px)] font-bold">
              Find our Locations
            </span>

            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search for locations..."
                className="flex-1 text-neutral-500 text-[clamp(16px,2vw,20px)] px-4 h-[56px] border border-[#73737394] border-r-0 focus:outline-none"
              />
              <button className="flex items-center justify-center bg-[#009ADE] h-[56px] px-6 hover:bg-[#007bb8] transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
                <span className="text-white text-[clamp(14px,2vw,18px)] font-bold ml-2">
                  Search
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden group rounded-lg shadow-md w-full h-[500px] flex flex-col"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:-translate-x-full"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#009ADE]/50 to-[#005f80]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 p-6">
                  <h3 className="text-white text-xl font-bold">{card.title}</h3>
                  {card.subtitle && (
                    <p className="text-white text-sm">{card.subtitle}</p>
                  )}
                </div>

                <div className="absolute inset-0 px-6 pb-8 pt-28 flex flex-col justify-start opacity-0 translate-x-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 z-10">
                  <p className="text-white text-base leading-relaxed whitespace-pre-line">
                    {card.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-[clamp(60px,10vw,113px)] px-[clamp(16px,5vw,80px)]">
        <div className="max-w-6xl mx-auto">
          <span className="block text-white text-[clamp(28px,6vw,68px)] font-bold mb-[clamp(40px,8vw,94px)]">
            Let's get in touch
          </span>

          <div className="mb-[clamp(30px,6vw,45px)] space-y-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 bg-transparent border-b border-[#009ADE] text-[#BFBFBF] focus:outline-none placeholder:text-[#BFBFBF] text-[clamp(16px,2vw,20px)] pb-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 bg-transparent border-b border-[#009ADE] text-[#BFBFBF] focus:outline-none placeholder:text-[#BFBFBF] text-[clamp(16px,2vw,20px)] pb-2"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent border-b border-[#009ADE] text-[#BFBFBF] focus:outline-none placeholder:text-[#BFBFBF] text-[clamp(16px,2vw,20px)] pb-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 bg-transparent border-b border-[#009ADE] text-[#BFBFBF] focus:outline-none placeholder:text-[#BFBFBF] text-[clamp(16px,2vw,20px)] pb-2"
              />
            </div>

            <input
              type="text"
              placeholder="Organization"
              className="w-full bg-transparent border-b border-[#009ADE] text-[#BFBFBF] focus:outline-none placeholder:text-[#BFBFBF] text-[clamp(16px,2vw,20px)] pb-2"
            />

            <input
              type="text"
              placeholder="Country"
              className="w-full bg-transparent border-b border-[#009ADE] text-[#BFBFBF] focus:outline-none placeholder:text-[#BFBFBF] text-[clamp(16px,2vw,20px)] pb-2"
            />

            <textarea
              rows={6}
              placeholder="How can we help you?"
              className="w-full bg-transparent border border-[#009ADE] text-[#BFBFBF] focus:outline-none placeholder:text-[#BFBFBF] text-[clamp(16px,2vw,20px)] p-4 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#009ADE] py-3 px-10 hover:bg-[#007bb8] transition">
              <span className="text-white text-[clamp(16px,2vw,20px)] font-bold">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
