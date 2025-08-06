import React from "react";
import { Link, useLocation } from "react-router-dom";
import fstoneLogo from "../assets/fstoneLogo.png";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <div className="flex justify-between items-center self-stretch bg-white py-[26px] pl-[77px] pr-[392px]">
      <Link to="/">
        <img
          src={fstoneLogo}
          className="w-[193px] h-[49px] object-fill"
          alt="Fstone Logo"
        />
      </Link>
      <div className="flex shrink-0 items-center pr-[3px]">
        <div className="relative mr-16">
          <Link to="/">
            <span className="text-[#1E1E1E] text-[24px] font-[550] font-urbanist">
              Home
            </span>
          </Link>
          {isActive("/") && (
            <div className="absolute bottom-[-31px] left-1/2 transform -translate-x-1/2 bg-[#009ADE] w-[130px] h-[5px]" />
          )}
        </div>

        <div className="relative mr-[63px]">
          <Link to="/about">
            <span className="text-[#1E1E1E] text-[24px] font-[550] font-urbanist">
              About us
            </span>
          </Link>
          {isActive("/about") && (
            <div className="absolute bottom-[-31px] left-1/2 transform -translate-x-1/2 bg-[#009ADE] w-[130px] h-[5px]" />
          )}
        </div>

        <div className="relative mr-[63px]">
          <Link to="/news">
            <span className="text-[#1E1E1E] text-[24px] font-[550] font-urbanist">
              News & Views
            </span>
          </Link>
          {isActive("/news") && (
            <div className="absolute bottom-[-31px] left-1/2 transform -translate-x-1/2 bg-[#009ADE] w-[130px] h-[5px]" />
          )}
        </div>

        <div className="flex shrink-0 items-center mr-[60px] gap-1">
          <span className="text-[#1E1E1E] text-[24px] font-[550] font-urbanist">
            Services
          </span>
          <svg
            className="w-5 h-5 fill-[#444]"
            viewBox="0 0 320 512"
          >
            <path d="M31.3 192h257.4c28.4 0 42.8 34.5 22.6 54.6l-128.7 128c-12.5 12.5-32.8 12.5-45.3 0l-128.7-128c-20.2-20.1-5.8-54.6 22.7-54.6z"/>
          </svg>
        </div>

        <div className="flex shrink-0 items-center px-[3px] mr-[60px] gap-1">
          <span className="text-[#1E1E1E] text-[24px] font-[550] font-urbanist">
            Careers
          </span>
          <svg
            className="w-5 h-5 fill-[#444]"
            viewBox="0 0 320 512"
          >
            <path d="M31.3 192h257.4c28.4 0 42.8 34.5 22.6 54.6l-128.7 128c-12.5 12.5-32.8 12.5-45.3 0l-128.7-128c-20.2-20.1-5.8-54.6 22.7-54.6z"/>
          </svg>
        </div>

        <div className="relative">
          <Link to="/contact">
            <span className="text-[#1E1E1E] text-[24px] font-[600] font-urbanist">
              Contact
            </span>
          </Link>
          {isActive("/contact") && (
            <div className="absolute bottom-[-31px] left-1/2 transform -translate-x-1/2 bg-[#009ADE] w-[130px] h-[5px]" />
          )}
        </div>
      </div>
    </div>
  );
}
