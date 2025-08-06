import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import NewsViews from "./pages/NewsViews/NewsViews";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/news" element={<NewsViews />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
