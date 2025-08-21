import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import NewsViews from "./pages/NewsViews/NewsViews";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/news" element={<NewsViews />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Main services route */}
        <Route path="/services/*" element={<Services />} />

        {/* Catch-all route for debugging */}
        <Route path="*" element={
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
            <p>Current path: {window.location.pathname}</p>
          </div>
        } />
      </Routes>
    </div>
  );
}
