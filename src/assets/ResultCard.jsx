import React, { useState } from "react";
function ResultCard(props) {
  let { resultWeight, idealWeight } = props;
  return (
    <div className=" mt-6 rounded-2xl bg-gradient2 p-8 text-Pure_White md:flex md:gap-[12rem] md:rounded-r-[10rem]">
      <div>
        <h3 className="font-semibold">Your BMI is...</h3>
        <h2 className=" mt-2 text-[3rem] font-semibold">{resultWeight}</h2>
      </div>
      <p className=" mt-6 text-[0.875rem] md:flex md:flex-col">
        Your BMI suggests you’re a healthy weight. Your ideal weight is between
        <span className="font-semibold">{idealWeight}.</span>
      </p>
    </div>
  );
}

export default ResultCard;
