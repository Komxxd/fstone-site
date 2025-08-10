import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fstoneLogo from "../assets/fstoneLogo.png";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.includes(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/news", label: "News & Views" },
    { path: "#", label: "Services", hasDropdown: true },
    { path: "#", label: "Careers", hasDropdown: true },
    { path: "/contact", label: "Contact" },
  ];

  
  const renderNavItem = (item, isMobile = false) => (
    <div key={item.label} className={`relative group ${isMobile ? "w-full" : ""}`}>
      <Link
        to={item.path}
        className={`block ${isMobile ? "py-3 px-4" : "px-3 py-6"}`}
      >
        <div className="flex items-center">
          <span
            className={`font-medium text-gray-800 hover:text-[#009ADE] transition-colors duration-200 ${
              isMobile ? "text-lg" : "text-lg xl:text-[20px] font-semibold"
            }`}
          >
            {item.label}
          </span>
          {item.hasDropdown && (
            <svg
              className="w-3 h-3 ml-1 fill-current text-gray-600 group-hover:text-[#009ADE] transition-colors duration-200"
              viewBox="0 0 8 6"
            >
              <path d="M4 6L0 0h8L4 6z" />
            </svg>
          )}
        </div>
        {!isMobile && isActive(item.path) && (
          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#009ADE]" />
        )}
      </Link>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="flex-shrink-0">
            <img src={fstoneLogo} className="h-10 w-auto" alt="Fstone Logo" />
          </Link>

          
          <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-10">
              {navItems.map((item) => renderNavItem(item))}
            </div>
          </nav>

          
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#009ADE] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => renderNavItem(item, true))}
          </div>
        </div>
      )}
    </header>
  );
}
