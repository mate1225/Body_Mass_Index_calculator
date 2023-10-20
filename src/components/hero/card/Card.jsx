import { useState, useContext } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";
import RadioButton from "./RadioButton";
import ResultCard from "./ResultCard";
import Welcome from "./Welcome";

function Card() {
  const [state, setState] = useState({
    radioButton: "Metric",
    /*   kg: 82,
    cm: 175,
    st: 12,
    lbs: 4.8,
    ft: 5,
    in: 8.9, */
    kg: 0,
    cm: 0,
    st: 0,
    lbs: 0,
    ft: 0,
    in: 0,
  });
  const inputObject = useContext(" bg-red-500");
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
  let ImperialHeight = Math.pow(0, 2);
  if (state.radioButton === "Metric") {
    bmi = state.kg / metricHeight;
    bmi = bmi.toFixed(2);
  } else if (state.radioButton === "Imperial") {
    //pontatlanok a számítások ezért át alakítás szükséges
    //Imperial to Metric
    let kg = state.st * 6.35;
    kg = kg + state.lbs * 0.453;
    let m = state.ft * 0.3048;
    m = m + state.in * 0.0254;
    console.log(m);
    //calculation in Metric
    metricHeight = 0;
    metricHeight = Math.pow(m, 2);
    bmi = kg / metricHeight;
    bmi = bmi.toFixed(2);
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
  let minimumIdealWeight = 0;
  let maximumIdealWeight = 0;
  let idealWeightValue = 0;
  if (state.radioButton === "Metric") {
    minimumIdealWeight = (18.5 * metricHeight).toFixed(1);
    maximumIdealWeight = (24.9 * metricHeight).toFixed(1);
    idealWeightValue = `${minimumIdealWeight}kg - ${maximumIdealWeight}kg`;
  } else if (state.radioButton === "Imperial") {
    //ide kerül majd az imperial számítások
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
  return (
    <section
      className="z-2 relative ml-6 mr-6 mt-[-180px] rounded-2xl
    bg-Pure_White p-6 shadow-cardShadow md:ml-[2.44rem] md:mr-[2.69rem] md:mt-[-17.5rem] xl:ml-[46rem] xl:mt-[10.44rem] "
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
      {state.radioButton === "Metric" ? (
        <Metric
          kgValue={state.kg}
          cmValue={state.cm}
          handleChange={handelChange}
        />
      ) : (
        <Imperial />
      )}
      {active ? (
        <ResultCard
          resultWeight={bmi}
          idealWeight={idealWeightValue}
          currentHealthStatus={currentHealthStatus}
        />
      ) : (
        <Welcome />
      )}
    </section>
  );
}

export default Card;
