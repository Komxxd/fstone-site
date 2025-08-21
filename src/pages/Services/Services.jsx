import React from "react";
import { Outlet, useLocation, useParams, Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesBanner from "./ServicesBanner";
import ClientServices from "./ClientServices";
import ITStaff from "./ITStaff";
import TechnologyConsulting from "./TechnologyConsulting";
import BusinessConsulting from "./BusinessConsulting";
import WorkforceSolutions from "./WorkforceSolutions";

export default function Services() {
  const location = useLocation();
  const params = useParams();
  
  console.log('Current path:', location.pathname);
  console.log('Route params:', params);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <ServicesBanner />
      
      <main className="flex-1">
        <Routes>
          <Route index element={<ClientServices />} />
          <Route path="ClientServices" element={<ClientServices />} />
          <Route path="ITStaff" element={<ITStaff />} />
          <Route path="TechnologyConsulting" element={<TechnologyConsulting />} />
          <Route path="BusinessConsulting" element={<BusinessConsulting />} />
          <Route path="WorkforceSolutions" element={<WorkforceSolutions />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}
