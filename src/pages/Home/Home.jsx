import React from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import QuoteSection from "./QuoteSection";
import WhyChooseSection from "./WhyChooseSection";
import ValuesSection from "./ValuesSection";
import TechnologiesSection from "./TechnologiesSection";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuoteSection />
      <WhyChooseSection />
      <ValuesSection />
      <TechnologiesSection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
