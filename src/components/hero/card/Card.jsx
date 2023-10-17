import { useState } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";
import RadioButton from "./RadioButton";
import ResultCard from "./ResultCard";
import Welcome from "./Welcome";

function Card() {
  const [state, setState] = useState({
    radioButton: "Metric",
    kg: 82,
    cm: 175,
    st: 12,
    lbs: 4.8,
    ft: 5,
    in: 8.9,
    /* kg: 0,
    cm: 0,
    st: 0,
    lbs: 0,
    ft: 0,
    in: 0, */
  });
  //display state
  let active = false;
  if (state.radioButton === "Metric" && state.cm > 0 && state.kg > 0) {
    active = true;
  } else if (
    state.radioButton === "Imperial" &&
    state.st &&
    state.lbs &&
    state.ft &&
    state.in
  ) {
    active = true;
  } else {
    active = false;
  }
  function handelChange(e) {
    const { name, value } = e.target;

    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  //calculations
  let bmi = 0;
  let metricHeight = Math.pow(state.cm / 100, 2);
  if (state.radioButton === "Metric") {
    bmi = state.kg / metricHeight;
    bmi = bmi.toFixed(2);
  } else if (state.radioButton === "Imperial") {
    //nincs kész
  } else {
  }

  //current Health Status
  let currentHealthStatus = "";
  if (bmi <= 18.5) {
    currentHealthStatus = "Underweight";
  } else if (bmi <= 24.9) {
    currentHealthStatus = "healthy weight";
  } else if (bmi <= 29.9) {
    currentHealthStatus = "Overweight";
  } else if (bmi >= 30) {
    currentHealthStatus = "Obesity";
  }
  //ideal weight
  let minimumIdealWeight = (18.5 * metricHeight).toFixed(1);
  let maximumIdealWeight = (24.9 * metricHeight).toFixed(1);
  let idealWeightValue = `${minimumIdealWeight}kg - ${maximumIdealWeight}kg`;
  return (
    <section
      className="z-2 lx:max-w-[31.3rem] relative ml-6 mr-6 mt-[-180px] rounded-2xl
    bg-Pure_White p-6 shadow-cardShadow md:ml-[2.44rem] md:mr-[2.69rem] md:mt-[-17.5rem] xl:ml-[46rem] xl:mt-[10.44rem] xl:max-h-[37.9rem]"
    >
      <h2 className="text-[1.5rem] font-semibold tracking-[-0.075rem] text-Gunmetal ">
        Enter your details below
      </h2>

      <div className=" mt-6 grid grid-cols-2 grid-rows-1">
        <RadioButton
          title="Metric"
          btnName="radioButton"
          btnValue="Metric"
          handelChange={handelChange}
          btnChecked={state.radioButton === "Metric"}
        />
        <RadioButton
          title="Imperial"
          btnName="radioButton"
          btnValue="Imperial"
          customStyle="ml-[1rem]"
          handelChange={handelChange}
          btnChecked={state.radioButton === "Imperial"}
        />
      </div>
      {state.radioButton === "Metric" ? <Metric /> : <Imperial />}
      {active ? (
        <ResultCard
          resultWeight={bmi}
          idealWeight={idealWeightValue}
          currentHealthStatus={currentHealthStatus}
          unit={state.radioButton === "Metric" ? " kg" : " lbs"}
        />
      ) : (
        <Welcome />
      )}
    </section>
  );
}

export default Card;
