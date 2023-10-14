import React, { useState } from "react";
import "./App.css";
//jsx components
import Hero from "./components/hero/Hero";
import ResultMeaningSection from "./components/middle_section/ResultMeaningSection";
import AdvicesSection from "./components/middle_section/AdvicesSection";
import Description from "./components/bottom_section/Description";
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
            <Description
              title="Limitations of BMI"
              text=" Although BMI is often a practical indicator of healthy weight, 
        it is not suited for every person. Specific groups should carefully 
        consider their BMI outcomes, and in certain cases, 
        the measurement may not be beneficial to use."
              customStyle="mt-[4.5rem] text-center mb-[3.5rem] xl:mt-[7.5rem]"
            />
            <LimitationsSection />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
