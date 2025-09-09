import React from "react";
import { Outlet, useLocation, useParams, Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CareersBanner from "./CareersBanner";
import WhyCareerInRecruitment from "./WhyCareerInRecruitment";
import CareerWithUs from "./CareerWithUs";
import CurrentOpenings from "./CurrentOpenings";

export default function Careers() {
  const location = useLocation();
  const params = useParams();
  
  console.log('Current path:', location.pathname);
  console.log('Route params:', params);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <CareersBanner />
      
      <main className="flex-1">
        <Routes>
          <Route index element={<WhyCareerInRecruitment />} />
          <Route path="WhyCareerInRecruitment" element={<WhyCareerInRecruitment />} />
          <Route path="CareerWithUs" element={<CareerWithUs />} />
          <Route path="CurrentOpenings" element={<CurrentOpenings />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}
