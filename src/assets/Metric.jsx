import React, { useState } from "react";
import ResultCard from "./ResultCard";
import Welcome from "./Welcome";
function Metric() {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 grid-rows-2 gap-3 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Height</p>
          <input
            type="text"
            className="rounded-xl border-2 border-solid border-Borders px-[1.5rem] py-[1.25rem] 
            text-[1.5rem] font-semibold text-Gunmetal outline-Blue "
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Weight</p>
          <input
            type="text"
            className="rounded-xl border-2 border-solid border-Borders px-[1.5rem] py-[1.25rem] text-[1.5rem] font-semibold text-Gunmetal outline-Blue"
          />
        </div>
      </div>
      {/* <Welcome /> */}
      <ResultCard resultWeight="23.4" idealWeight=" 63.3kgs-85.2kgs" />
    </>
  );
}

export default Metric;
