import React from "react";
import { useNavigate } from "react-router-dom";
import itstaff1 from "../../assets/Services/itstaff1.png";
import itstaff2 from "../../assets/Services/itstaff2.png";

export default function ITStaff() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col bg-white w-full">
			<div className="flex flex-col items-start w-full bg-white min-h-screen">
				<div className="flex flex-col xl:flex-row items-start w-full px-[clamp(16px,5vw,80px)] pt-[clamp(50px,8vw,100px)] pb-[clamp(50px,6vw,116px)] gap-[clamp(30px,5vw,80px)] relative">
					<div className="flex flex-col w-full xl:w-[40%] max-w-[506px] mt-[clamp(20px,4vw,53px)]">
						<h1 className="text-[#535353] text-[clamp(36px,5vw,68px)] font-bold leading-tight">
							IT Staff<br />Augmentation
						</h1>
						<p className="text-[#7B848F] text-[clamp(16px,1.8vw,24px)] font-bold mt-[clamp(10px,2vw,22px)]">
							FSTONE Technologies uses its expertise, resources, and a database of 1M+ candidates to quickly connect you with top IT talent that fits your team and goals.
						</p>
					</div>

					<div className="w-full xl:w-auto mt-[clamp(20px,4vw,0)] xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:max-w-[60%] xl:max-h-[90%] xl:pr-0">
						<img
							src={itstaff1}
							alt="IT Staff Augmentation"
							className="w-full h-full max-h-[60vh] x:max-h-none object-cover xl:rounded-l-lg"
							style={{ aspectRatio: '976/478' }}
						/>
					</div>
				</div>

				<div 
					className="flex flex-col w-full bg-cover bg-center py-[clamp(40px,8vw,90px)] px-[clamp(16px,5vw,80px)] gap-[clamp(20px,4vw,46px)] mt-[clamp(30px,6vw,80px)]"
					style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${itstaff2})` }}
				>
					<span className="text-white text-[clamp(20px,3vw,34px)] font-bold max-w-[600px] leading-tight">
						For more information on our IT Staff Augmentation service contact us today
					</span>
					
					<button
						className="group flex items-center justify-center bg-transparent hover:bg-[#009ADE] text-center w-[clamp(160px,25vw,336px)] h-[clamp(50px,8vw,94px)] gap-[clamp(6px,1vw,11px)] rounded-md border-[clamp(1.5px,0.4vw,3px)] border-solid border-[#009ADE] relative z-10 transition-all duration-300"
						onClick={() => navigate("/contact")}
					>
						<span className="text-white text-[clamp(14px,1.8vw,20px)] font-bold transform transition-transform duration-300 group-hover:-translate-x-2">
							Let's Connect
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-[clamp(18px,3vw,40px)] h-[clamp(18px,3vw,40px)] text-white transform transition-transform duration-300 group-hover:-rotate-12"
						>
							<path
								fillRule="evenodd"
								d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

