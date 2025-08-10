import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsSection from "./newsviewssection";

export default function NewsViews() {
  return (
    <div className="flex flex-col bg-white">
      <div className="items-start self-stretch bg-[#F7F7F7] min-h-screen">
        <Header />
        <NewsSection />
        <Footer />
      </div>
    </div>
  );
}
