import React, { useState } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";

function Card() {
  return (
    <section
      className="z-2  relative ml-6 mr-6 mt-[-180px] rounded-2xl bg-Pure_White
    p-6 shadow-cardShadow md:ml-[2.44rem] md:mr-[2.69rem] md:mt-[-17.5rem] xl:max-w-[31.3rem]"
    >
      <h2 className="text-[1.5rem] font-semibold text-Gunmetal ">
        Enter your details below
      </h2>

      <div className="mt-6 flex items-center  justify-between md:justify-start">
        <div className="flex items-center">
          <input
            type="radio"
            className=" h-[31px] w-[31px] accent-Blue "
            name="radioButton"
            value="Metric"
          />
          <p className="ml-[1.12rem] text-[1rem] font-semibold">Metric</p>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            className=" h-[31px] w-[31px] accent-Blue "
            name="radioButton"
            value="Imperial"
          />
          <p className="ml-[1.12rem] text-[1rem] font-semibold">Imperial</p>
        </div>
      </div>
      <Metric />
      {/* <Imperial /> */}
    </section>
  );
}

export default Card;
