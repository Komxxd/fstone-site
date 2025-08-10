import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutBanner from "./AboutBanner";
import AboutIntro from "./AboutIntro";
import AboutServicesSection from "./AboutServicesSection";
import AwardsSection from "./AwardsSection";

export default function AboutUs() {
  return (
    <div className="flex flex-col bg-white">
      <div className="items-start self-stretch bg-[#F7F7F7] min-h-screen">
        <Header />
        <AboutBanner />
        <AboutIntro />
        <AboutServicesSection />
        <AwardsSection />
        
        
        <Footer />
      </div>
    </div>
  );
}
