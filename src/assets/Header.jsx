import React, { useState } from "react";
import logo from "./images/logo.svg";
function Header() {
  return (
    <header className="relative rounded-b-[2.19rem] bg-gradient1  pb-[13.56rem] pl-6 pr-6 text-center md:pb-[20.38rem]">
      <div className="flex justify-center pb-6 pt-8">
        <img src={logo} alt="logo" width="40px" height="40px" />
      </div>
      <h1
        className="mb-6 text-[3rem] font-semibold leading-[110%]
      tracking-[-0.15rem] text-Gunmetal md:flex md:flex-col md:text-center"
      >
        Body Mass <span className>Index Calculator</span>
      </h1>
      <p className=" font-normal text-Dark_Electric_Blue">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </header>
  );
}
export default Header;
