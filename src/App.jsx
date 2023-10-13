import React, { useState } from "react";
import "./App.css";
//jsx components
import Description from "./components/Description";
import Footer from "./components/Footer";
import LimitationsSection from "./components/LimitationsSection";
import ResultMeaningSection from "./components/ResultMeaningSection";
import Hero from "./components/Hero";
import AdvicesSection from "./components/AdvicesSection";

function App() {
  return (
    <div>
      <Hero />
      {/*  decorative line */}
      {/*  <div className="absolute right-0 mr-[10.4rem] mt-[0.81rem] hidden lg:flex lg:justify-end">
        <img src={CurvedLineLeft} alt="Curved Line Left" />
      </div> */}

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
  );
}

export default App;
