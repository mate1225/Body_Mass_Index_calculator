/* eslint-disable prettier/prettier */
function ResultCard({ resultWeight, idealWeight, currentHealthStatus, unit }) {
  return (
    <div className=" mt-6 items-baseline rounded-2xl bg-gradient2 p-8 text-Pure_White md:flex md:gap-[6.25rem] md:rounded-r-[10rem] lg:max-h-[10.375rem]">
      <div>
        <h3 className="font-semibold">Your BMI is...</h3>
        <h2 className=" mt-2 text-[3rem] font-semibold">{resultWeight}</h2>
      </div>
      <p className=" mt-6 text-[0.875rem] font-normal md:mt-0 md:flex md:flex-col">
        Your BMI suggests
        {currentHealthStatus === "healthy weight" ? " have a " : " you’re "}
        {currentHealthStatus}. Your ideal weight is between
        <span className="font-semibold">
          {idealWeight} {unit}.
        </span>
      </p>
    </div>
  );
}

export default ResultCard;
