import React from "react";
import CareerHero from "../../assets/Careers/careerhero.png"
import careerimg1 from "../../assets/Careers/careerimg1.png"
import careerimg2 from "../../assets/Careers/careerimg2.png"
import careerimg3 from "../../assets/Careers/careerimg3.png"
import careerimg4 from "../../assets/Careers/careerimg4.png"
import dayinlife from "../../assets/Careers/dayinlife.png"

export default function WhyCareerInRecruitment() {
  return (
    <div className="w-full">
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[clamp(20px,5vw,100px)] px-[clamp(16px,5vw,80px)] py-[clamp(40px,8vw,120px)] max-w-[1400px] mx-auto">
        <img
          src={CareerHero}
          className="w-[clamp(280px,40vw,540px)] h-auto object-cover"
          alt="Business team"
        />

        <div className="flex flex-col items-start max-w-[clamp(300px,50%,650px)]">
          <span
            className="text-[#535353] font-bold leading-tight mb-[clamp(16px,3vw,33px)]"
            style={{ fontSize: "clamp(24px,4vw,68px)" }}
          >
            Here, we turn possibilities into reality.
          </span>

          <span
            className="text-neutral-500 font-medium mb-[clamp(20px,4vw,69px)]"
            style={{ fontSize: "clamp(16px,1.5vw,20px)" }}
          >
            Join a fast-paced, supportive team committed to your success. We
            provide the tools and leadership for you to build a rewarding,
            long-term career with uncapped earning potential.
          </span>

          <button
            className="group flex items-center justify-center lg:justify-start bg-transparent text-center lg:text-left py-[3vw] sm:py-[2.5vw] md:py-[2vw] lg:py-[1.5vw] xl:py-[1.2vw] 2xl:py-[1vw] px-[10vw] sm:px-[8vw] md:px-[6vw] lg:px-[4vw] xl:px-[3vw] 2xl:px-[2.5vw] gap-[2vw] lg:gap-[1vw] rounded-md border-[0.3vw] sm:border-[0.25vw] md:border-[0.2vw] lg:border-[0.15vw] xl:border-[0.12vw] 2xl:border-[3px] border-solid border-[#009ADE] hover:bg-[#009ADE] transition-all duration-300"
            onClick={() => alert("Pressed!")}
          >
            <span className="text-[#009ADE] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw] font-bold group-hover:text-white transition-colors duration-300">
              Let's Connect
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3.5vw] md:h-[3.5vw] lg:w-[2.5vw] lg:h-[2.5vw] xl:w-[2vw] xl:h-[2vw] 2xl:w-[1.5vw] 2xl:h-[1.5vw] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
            >
              <path
                fillRule="evenodd"
                d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

     
<div className="bg-white w-full grid grid-cols-3">
  <div className="aspect-square relative bg-black flex items-center justify-center p-[clamp(16px,3vw,40px)]">
    <div className="flex flex-col text-left">
      <h3
        className="text-white font-bold leading-tight"
        style={{ fontSize: "clamp(18px,3vw,40px)" }}
      >
        What do we do:
      </h3>
      <h3
        className="text-white font-bold leading-tight"
        style={{ fontSize: "clamp(24px,4vw,40px)" }}
      >
        The Recruiter's
      </h3>
      <h3
        className="text-white font-bold leading-tight"
        style={{ fontSize: "clamp(24px,4vw,40px)" }}
      >
        Role
      </h3>
    </div>
  </div>

  <div className="col-span-2 aspect-[2/1] relative">
    <img
      src={careerimg1}
      alt="rectangle-1"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-[clamp(16px,3vw,24px)]">
      <h3
        className="text-white font-bold mb-[clamp(8px,1.5vw,16px)] drop-shadow-lg"
        style={{ fontSize: "clamp(18px,3vw,32px)" }}
      >
        Building Relationships
      </h3>
      <p
        className="text-white opacity-90 drop-shadow-lg"
        style={{ fontSize: "clamp(12px,1.5vw,16px)" }}
      >
        We cultivate strong, long-term relationships with both job seekers and companies.
      </p>
    </div>
  </div>


        <div className="aspect-square relative">
          <img
            src={careerimg2}
            alt="square-2"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-[clamp(12px,2.5vw,16px)]">
            <h3 
              className="text-white font-bold mb-[clamp(4px,1vw,8px)] drop-shadow-lg"
              style={{ fontSize: "clamp(14px,2.5vw,20px)" }}
            >
              Business Development
            </h3>
            <p 
              className="text-white opacity-90 drop-shadow-lg"
              style={{ fontSize: "clamp(10px,1.2vw,14px)" }}
            >
              We actively develop new business and build a pipeline of opportunities.
            </p>
          </div>
        </div>
        <div className="aspect-square relative">
          <img
            src={careerimg3}
            alt="square-3"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-[clamp(12px,2.5vw,16px)]">
            <h3 
              className="text-white font-bold mb-[clamp(4px,1vw,8px)] drop-shadow-lg"
              style={{ fontSize: "clamp(14px,2.5vw,20px)" }}
            >
              Strategic Matching
            </h3>
            <p 
              className="text-white opacity-90 drop-shadow-lg"
              style={{ fontSize: "clamp(10px,1.2vw,14px)" }}
            >
              We align a candidate's skills and career goals with the right job, ensuring a perfect fit.
            </p>
          </div>
        </div>
        <div className="aspect-square relative">
          <img
            src={careerimg4}
            alt="square-4"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-[clamp(12px,2.5vw,16px)]">
            <h3 
              className="text-white font-bold mb-[clamp(4px,1vw,8px)] drop-shadow-lg"
              style={{ fontSize: "clamp(14px,2.5vw,20px)" }}
            >
              Client Consultation
            </h3>
            <p 
              className="text-white opacity-90 drop-shadow-lg"
              style={{ fontSize: "clamp(10px,1.2vw,14px)" }}
            >
              We deeply understand our clients' needs to provide them with the best-qualified talent.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white w-full py-[clamp(40px,8vw,120px)] px-[clamp(16px,5vw,80px)] flex flex-col lg:flex-row items-start gap-[clamp(20px,5vw,100px)]">
        <div className="max-w-[700px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            More than just a match!
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90">
            At FSTONE, we're passionate about solving business problems with the right people. We go beyond simply placing candidates by deeply understanding our clients' needs and our candidates' career aspirations. Our unique, research-backed methodology ensures we make the perfect match every time.
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div className="flex flex-col lg:flex-row items-start self-stretch bg-black py-[clamp(40px,8vw,120px)] px-[clamp(16px,5vw,80px)] gap-[clamp(20px,5vw,100px)]">
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <img
              src={dayinlife}
              className="w-full lg:w-[clamp(400px,50vw,839px)] h-auto object-cover"
              alt="Consultants at work"
            />
          </div>
          
          <div className="flex flex-col items-start w-full lg:w-auto">
            <span 
              className="text-white font-bold mb-[clamp(25px,5vw,50px)] leading-tight"
              style={{ fontSize: "clamp(20px,4vw,32px)" }}
            >
              A day in the life of our consultants involves:
            </span>

            <div className="flex flex-col items-start mb-[clamp(25px,5vw,50px)] gap-[clamp(15px,3vw,25px)]">
              {[
                "Understanding Job Requirements",
                "Sourcing and Screening",
                "Client Consulting",
              ].map((title, index) => (
                <div key={index} className="flex items-center gap-[clamp(15px,3vw,29px)]">
                  <div className="w-[clamp(32px,4vw,40px)] h-[clamp(32px,4vw,40px)] flex items-center justify-center bg-[#009ADE] rounded flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[clamp(16px,2.5vw,24px)] h-[clamp(16px,2.5vw,24px)] text-white"
                      fill="currentColor"
                    >
                      <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.193 9.214-4.242-4.243a1 1 0 00-1.414 1.414l4.949 4.95a1 1 0 001.414 0l9.9-9.917z" />
                    </svg>
                  </div>
                  <span 
                    className="text-white font-bold"
                    style={{ fontSize: "clamp(16px,2.5vw,24px)" }}
                  >
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <span 
              className="text-[#D9D9D9] font-bold mb-[clamp(32px,6vw,64px)] leading-tight"
              style={{ fontSize: "clamp(18px,3.5vw,32px)" }}
            >
              To succeed with us, you need to be a resourceful problem-solver with a passion for helping both clients and candidates achieve their goals.
            </span>

            <button
              className="group flex items-center justify-center lg:justify-start bg-transparent text-center lg:text-left py-[3vw] sm:py-[2.5vw] md:py-[2vw] lg:py-[1.5vw] xl:py-[1.2vw] 2xl:py-[1vw] px-[10vw] sm:px-[8vw] md:px-[6vw] lg:px-[4vw] xl:px-[3vw] 2xl:px-[2.5vw] gap-[2vw] lg:gap-[1vw] rounded-md border-[0.3vw] sm:border-[0.25vw] md:border-[0.2vw] lg:border-[0.15vw] xl:border-[0.12vw] 2xl:border-[3px] border-solid border-[#009ADE] hover:bg-[#009ADE] transition-all duration-300"
              onClick={() => alert("Pressed!")}
            >
              <span className="text-[#009ADE] text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw] font-bold group-hover:text-white transition-colors duration-300">
                Join Us Now
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[3.5vw] md:h-[3.5vw] lg:w-[2.5vw] lg:h-[2.5vw] xl:w-[2vw] xl:h-[2vw] 2xl:w-[1.5vw] 2xl:h-[1.5vw] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}