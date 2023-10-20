function ResultCard({ resultWeight, idealWeight, currentHealthStatus, unit }) {
  return (
    <div className=" mb-8 mt-8 flex flex-col items-start justify-between rounded-2xl bg-gradient2 p-8  text-Pure_White md:flex-row md:items-center md:rounded-l-2xl md:rounded-r-[6rem]">
      <div>
        <h3 className="font-semibold">Your BMI is...</h3>
        <h2 className="  text-[3rem] font-semibold">{resultWeight}</h2>
      </div>
      <p className=" text-[0.875rem] font-normal md:ml-6">
        Your BMI suggests
        {currentHealthStatus === "healthy weight" ? " have a " : " you’re "}
        {currentHealthStatus}. Your ideal weight is between{" "}
        <span className="font-semibold">{idealWeight}.</span>
      </p>
    </div>
  );
}

export default ResultCard;
