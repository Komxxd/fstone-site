import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NewsViews() {
  return (
    <div className="flex flex-col bg-white">
      <div className="items-start self-stretch bg-[#F7F7F7] min-h-screen">
        <Header />

        <div className="flex flex-col items-center justify-center min-h-[80vh] px-8">
          <h1 className="text-5xl font-bold text-[#535353] mb-8">News & Views</h1>
          <p className="text-xl text-neutral-600 max-w-2xl text-center leading-relaxed">
            Welcome to FSTONE Technologies. We are a leading technology company focused on delivering innovative solutions 
            to help businesses succeed in the digital age. Our team of experts is dedicated to providing exceptional 
            service and cutting-edge technology solutions.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
} 