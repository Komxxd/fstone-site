import React from "react";
import clientservices1 from "../../assets/Services/clientservices1.png";
import clientservices2 from "../../assets/Services/clientservices2.png";

export default function ClientServices() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col items-center w-full bg-white">
        <div className="w-full max-w-[1920px] px-[clamp(16px,5vw,80px)] mt-[clamp(50px,8vw,100px)] mb-[clamp(40px,6vw,73px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[clamp(20px,4vw,80px)]">
            <div className="relative pb-12 lg:pb-0">
              <h1 className="text-[#535353] text-[clamp(36px,5vw,68px)] font-bold leading-tight mb-[clamp(16px,2vw,22px)]">
                Client Services
              </h1>
              <p className="text-[#7B848F] text-[clamp(18px,2vw,24px)] font-bold mb-[clamp(40px,6vw,77px)]">
                We're a leader in attracting and retaining top talent, delivering
                comprehensive solutions for diverse workforce needs.
              </p>
              <div className="space-y-[clamp(16px,2vw,19px)]">
                <h3 className="text-[#009ADE] text-[clamp(20px,2.5vw,28px)] font-bold">
                  Talent Advisory Services
                </h3>
                <p className="text-[#535353] text-[clamp(16px,1.8vw,20px)] font-bold">
                  With deep talent management expertise, we offer insights and
                  advice to help you attract and retain a high-performing workforce.
                </p>
              </div>
              <div className="lg:hidden w-full h-px bg-[#73737394] my-8" />
            </div>

            <div className="relative pb-12 lg:pb-0">
              <div className="lg:pl-[clamp(20px,4vw,40px)] lg:border-l border-[#73737394] h-full">
                <div className="space-y-[clamp(16px,2vw,19px)] mb-[clamp(60px,10vw,141px)]">
                  <h3 className="text-[#009ADE] text-[clamp(20px,2.5vw,28px)] font-bold">
                    Staffing & Recruiting Services
                  </h3>
                  <p className="text-[#535353] text-[clamp(16px,1.8vw,20px)] font-bold">
                    We offer contract and permanent staffing solutions to secure top
                    talent for any business need.
                  </p>
                </div>
                <div className="space-y-[clamp(16px,2vw,19px)]">
                  <h3 className="text-[#009ADE] text-[clamp(20px,2.5vw,28px)] font-bold">
                    Managed Delivery Services
                  </h3>
                  <p className="text-[#535353] text-[clamp(16px,1.8vw,20px)] font-bold">
                    We deliver managed, project-based, and outsourced services in IT,
                    engineering, clinical, and sales & marketing, driving measurable
                    business results.
                  </p>
                </div>
              </div>
              <div className="lg:hidden w-full h-px bg-[#73737394] my-8" />
            </div>

            <div className="relative">
              <div className="lg:pl-[clamp(20px,4vw,40px)] lg:border-l border-[#73737394] h-full">
                <div className="space-y-[clamp(16px,2vw,19px)] mb-[clamp(60px,10vw,113px)]">
                  <h3 className="text-[#009ADE] text-[clamp(20px,2.5vw,28px)] font-bold">
                    Search Services
                  </h3>
                  <p className="text-[#535353] text-[clamp(16px,1.8vw,20px)] font-bold">
                    We deliver search and executive placement services to secure the
                    right leaders for your business growth.
                  </p>
                </div>
                <div className="space-y-[clamp(16px,2vw,19px)]">
                  <h3 className="text-[#009ADE] text-[clamp(20px,2.5vw,28px)] font-bold">
                    Workforce Management Services
                  </h3>
                  <p className="text-[#535353] text-[clamp(16px,1.8vw,20px)] font-bold">
                    We deliver end-to-end workforce solutions—from RPO and MSP to VMS
                    implementation—to optimise your human capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center self-stretch bg-black py-[clamp(80px,12vw,148px)]">
          <div className="w-full max-w-[clamp(800px,80vw,1280px)] px-[clamp(16px,2vw,0px)]">
            <div className="self-stretch mb-[clamp(35px,5.5vw,70px)]">
              <div className="self-stretch mb-[clamp(35px,5.5vw,70px)]">
                <div className="flex flex-col lg:flex-row items-start self-stretch mb-[clamp(35px,5.5vw,70px)] gap-[clamp(17px,2.7vw,34px)]">
                  <div className="flex flex-1 flex-col items-start bg-[#202020] py-[clamp(31px,4.8vw,62px)] gap-[clamp(18px,2.9vw,37px)]">
                    <div className="bg-[#009ADE] w-[clamp(45px,7vw,90px)] h-[clamp(1.5px,0.23vw,3px)] ml-[clamp(15px,2.4vw,31px)]" />
                    <div className="flex flex-col items-start self-stretch mx-[clamp(15px,2.4vw,31px)] gap-[clamp(25px,4vw,51px)]">
                      <div className="flex flex-col items-start self-stretch gap-[clamp(14px,1.4vw,28px)]">
                        <span className="text-white text-[clamp(16px,2.2vw,28px)] font-bold">
                          WHAT SETS US APART
                        </span>
                        <span className="text-[#798598] text-[clamp(14px,1.6vw,20px)]">
                          At Fstone Technologies, we put people first,
                          leveraging our specialised network and proven process
                          to attract and retain top talent that drives
                          organisational success.
                        </span>
                      </div>
                      <div className="flex items-center gap-[clamp(14px,1.4vw,28px)]">
                        <span className="text-[#009ADE] text-[clamp(16px,2.2vw,28px)] font-bold">
                          Learn more
                        </span>
                        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[clamp(20px,2vw,32px)] h-[clamp(20px,2vw,32px)] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col items-start bg-[#202020] py-[clamp(31px,4.8vw,62px)] gap-[clamp(18px,2.9vw,37px)]">
                    <div className="bg-[#009ADE] w-[clamp(45px,7vw,90px)] h-[clamp(1.5px,0.23vw,3px)] ml-[clamp(15px,2.4vw,31px)]" />
                    <div className="flex flex-col items-start self-stretch mx-[clamp(15px,2.4vw,31px)] gap-[clamp(25px,4vw,51px)]">
                      <div className="flex flex-col items-start self-stretch gap-[clamp(14px,1.4vw,28px)]">
                        <span className="text-white text-[clamp(16px,2.2vw,28px)] font-bold">
                          WE UNDERSTAND THE LABOUR MARKET
                        </span>
                        <span className="text-[#798598] text-[clamp(14px,1.6vw,20px)]">
                          With deep talent management expertise, we offer
                          insights and advice to help you attract and retain a
                          high-performing workforce.
                        </span>
                      </div>
                      <div className="flex items-center gap-[clamp(14px,1.4vw,28px)]">
                        <span className="text-[#009ADE] text-[clamp(16px,2.2vw,28px)] font-bold">
                          Learn more
                        </span>
                        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[clamp(20px,2vw,32px)] h-[clamp(20px,2vw,32px)] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="self-stretch bg-cover bg-center pt-[clamp(173px,27vw,347px)]"
                  style={{ backgroundImage: `url(${clientservices1})` }}
                >
                  <div className="flex flex-col items-start self-stretch bg-[#00000000] pt-[clamp(48px,7.5vw,96px)]">
                    <div className="bg-[#009ADE] w-[clamp(45px,7vw,90px)] h-[clamp(1.5px,0.23vw,3px)] mb-[clamp(18px,2.9vw,37px)] ml-[clamp(43px,6.7vw,86px)]" />
                    <span className="text-white text-[clamp(16px,2.2vw,28px)] font-bold mb-[clamp(14px,1.4vw,28px)] ml-[clamp(43px,6.7vw,86px)]">
                      WE KNOW OUR CUSTOMERS
                    </span>
                    <span className="text-[#D6D6D6] text-[clamp(14px,1.6vw,20px)] mb-[clamp(25px,4vw,51px)] mx-[clamp(43px,6.7vw,86px)]">
                      We take a holistic approach and invest the time to
                      understand your business and culture. This enables us to
                      consultatively assess your service requirements and
                      collaboratively develop an employee value proposition to
                      attract top talent.
                    </span>
                    <div className="flex items-center ml-[clamp(43px,6.7vw,86px)] gap-[clamp(14px,1.4vw,28px)]">
                      <span className="text-[#009ADE] text-[clamp(16px,2.2vw,28px)] font-bold">
                        Learn more
                      </span>
                      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[clamp(20px,2vw,32px)] h-[clamp(20px,2vw,32px)] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start self-stretch gap-[clamp(17px,2.7vw,34px)]">
                <div className="flex flex-1 flex-col items-start bg-[#202020] py-[clamp(31px,4.8vw,62px)] gap-[clamp(18px,2.9vw,37px)]">
                  <div className="bg-[#009ADE] w-[clamp(45px,7vw,90px)] h-[clamp(1.5px,0.23vw,3px)] ml-[clamp(15px,2.4vw,31px)]" />
                  <div className="flex flex-col items-start self-stretch mx-[clamp(15px,2.4vw,31px)] gap-[clamp(25px,4vw,51px)]">
                    <div className="flex flex-col items-start self-stretch gap-[clamp(14px,1.4vw,28px)]">
                      <span className="text-white text-[clamp(16px,2.2vw,28px)] font-bold">
                        WE STRATEGICALLY SOURCE TALENT
                      </span>
                      <span className="text-[#798598] text-[clamp(14px,1.6vw,20px)]">
                        We use our extensive candidate network and referral-based
                        sourcing to quickly and effectively deliver top talent
                        for your needs.
                      </span>
                    </div>
                    <div className="flex items-center gap-[clamp(14px,1.4vw,28px)]">
                      <span className="text-[#009ADE] text-[clamp(16px,2.2vw,28px)] font-bold">
                        Learn more
                      </span>
                      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[clamp(20px,2vw,32px)] h-[clamp(20px,2vw,32px)] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-start bg-[#202020] py-[clamp(31px,4.8vw,62px)] gap-[clamp(18px,2.9vw,37px)]">
                  <div className="bg-[#009ADE] w-[clamp(45px,7vw,90px)] h-[clamp(1.5px,0.23vw,3px)] ml-[clamp(15px,2.4vw,31px)]" />
                  <div className="flex flex-col items-start self-stretch mx-[clamp(15px,2.4vw,31px)] gap-[clamp(25px,4vw,51px)]">
                    <div className="flex flex-col items-start self-stretch gap-[clamp(14px,1.4vw,28px)]">
                      <span className="text-white text-[clamp(16px,2.2vw,28px)] font-bold">
                        WE TCS CANDIDATE
                      </span>
                      <span className="text-[#798598] text-[clamp(14px,1.6vw,20px)]">
                        We rigorously screen candidates for technical, business,
                        and cultural fit, with optional certification,
                        background, and reference checks as requested.
                      </span>
                    </div>
                    <div className="flex items-center gap-[clamp(14px,1.4vw,28px)]">
                      <span className="text-[#009ADE] text-[clamp(16px,2.2vw,28px)] font-bold">
                        Learn more
                      </span>
                      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[clamp(20px,2vw,32px)] h-[clamp(20px,2vw,32px)] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="self-stretch bg-cover bg-center pt-[clamp(173px,27vw,347px)]"
              style={{ backgroundImage: `url(${clientservices2})` }}
            >
              <div className="flex flex-col items-start self-stretch bg-[#00000000] pt-[clamp(48px,7.5vw,96px)] pl-[clamp(43px,6.7vw,86px)] pr-[clamp(36px,5.6vw,72px)] gap-[clamp(18px,2.9vw,37px)]">
                <div className="bg-[#009ADE] w-[clamp(45px,7vw,90px)] h-[clamp(1.5px,0.23vw,3px)]" />
                <div className="flex flex-col items-start self-stretch gap-[clamp(25px,4vw,51px)]">
                  <div className="flex flex-col items-start self-stretch gap-[clamp(14px,1.4vw,28px)]">
                    <span className="text-white text-[clamp(16px,2.2vw,28px)] font-bold">
                      WE PROVIDE ONBOARDING & RETENTION SUPPORT
                    </span>
                    <span className="text-[#D6D6D6] text-[clamp(14px,1.6vw,20px)]">
                      We speed the time to productivity for our placements by
                      facilitating a smooth onboarding program. For contract
                      positions we also remain in close contact with the client
                      and our consultant, proactively facilitating employee
                      engagement, performance, and retention throughout each
                      assignment.
                    </span>
                  </div>
                  <div className="flex items-center gap-[clamp(14px,1.4vw,28px)]">
                    <span className="text-[#009ADE] text-[clamp(16px,2.2vw,28px)] font-bold">
                      Learn more
                    </span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[clamp(20px,2vw,32px)] h-[clamp(20px,2vw,32px)] fill-[#009ADE] group-hover:fill-white transition-colors duration-300"
                    >
                  <path
                  fillRule="evenodd"
                  d="M4.5 12a.75.75 0 01.75-.75h11.69l-4.72-4.72a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H5.25A.75.75 0 014.5 12z"
                  clipRule="evenodd"
                    />
          
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}