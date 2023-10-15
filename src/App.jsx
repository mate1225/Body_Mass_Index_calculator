import React, { useState } from "react";
import "./App.css";
//jsx components
import Hero from "./components/hero/Hero";
import ResultMeaningSection from "./components/middle_section/ResultMeaningSection";
import AdvicesSection from "./components/middle_section/AdvicesSection";
import LimitationsSection from "./components/bottom_section/limitations/LimitationsSection";
import Footer from "./components/bottom_section/Footer";

function App() {
  return (
    <>
      <div className=" xl:flex xl:items-center xl:justify-center">
        <div className="max-w-[1440px]">
          <Hero />
          <ResultMeaningSection />
          <AdvicesSection />
          <div className=" flex flex-col xl:flex-row">
            <LimitationsSection />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
