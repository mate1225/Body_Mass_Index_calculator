import { useState, useContext } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";
import RadioButton from "./RadioButton";
import ResultCard from "./ResultCard";
import Welcome from "./Welcome";

function Card() {
  const [state, setState] = useState({
    radioButton: "Metric",
    kg: "",
    cm: "",
    st: "",
    lbs: "",
    ft: "",
    in: "",
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
  let lbs;
  let inch;
  let metricHeight = Math.pow(Number(state.cm) / 100, 2);
  inch = Number(state.ft) * 12;
  inch = inch + Number(state.in);
  let imperialHeight = Math.pow(inch, 2);
  console.log(inch);
  if (state.radioButton === "Metric") {
    bmi = Number(state.kg) / metricHeight;
    bmi = bmi.toFixed(2);
  } else if (state.radioButton === "Imperial") {
    lbs = Number(state.st) * 14;
    lbs = lbs + Number(state.lbs);

    /* inch = Number(state.ft) * 12;
    inch = inch + Number(state.in); */
    bmi = (lbs / imperialHeight) * 703;
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
    minimumIdealWeight = (18.5 * (imperialHeight * 2.54)).toFixed(1); //kg
    maximumIdealWeight = (24.9 * (imperialHeight * 2.54)).toFixed(1); //kg
    //ez még nem pontos
    idealWeightValue = `${minimumIdealWeight}lbs - ${maximumIdealWeight}lbs`;
  }
  function handleChange(e) {
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
          handelChange={handleChange}
          btnChecked={state.radioButton === "Metric"}
        />
        <RadioButton
          title="Imperial"
          btnName="radioButton"
          btnValue="Imperial"
          customStyle="ml-[1rem]"
          handelChange={handleChange}
          btnChecked={state.radioButton === "Imperial"}
        />
      </div>
      {state.radioButton === "Metric" ? (
        <Metric
          kgValue={state.kg}
          cmValue={state.cm}
          handleChange={handleChange}
        />
      ) : (
        <Imperial
          ftValue={state.ft}
          inchValue={state.in}
          stValue={state.st}
          lbValue={state.lbs}
          handleChange={handleChange}
        />
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
