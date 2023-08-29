import React, { useState } from "react";
import ResultCard from "./ResultCard";
function Imperial() {
  return (
    <>
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Height</p>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="rounded-xl border-2 border-solid border-Borders 
              px-[1.5rem] py-[1.25rem] text-[1.5rem] font-semibold text-Gunmetal "
            />
            <input
              type="text"
              className="rounded-xl border-2 border-solid border-Borders 
              px-[1.5rem] py-[1.25rem] text-[1.5rem] font-semibold text-Gunmetal "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Weight</p>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="rounded-xl border-2 border-solid border-Borders 
              px-[1.5rem] py-[1.25rem] text-[1.5rem] font-semibold text-Gunmetal "
            />
            <input
              type="text"
              className="rounded-xl border-2 border-solid border-Borders 
              px-[1.5rem] py-[1.25rem] text-[1.5rem] font-semibold text-Gunmetal "
            />
          </div>
        </div>
      </div>
      <ResultCard resultWeight="22.0" idealWeight=" 9st 6lbs - 12st 10lbs." />
    </>
  );
}

export default Imperial;
