import { useState } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";
import RadioButton from "./RadioButton";
import ResultCard from "./ResultCard";
import Welcome from "./Welcome";

function Card() {
  const [state, setState] = useState({
    radioButton: "Metric",
    /* kg: 82,
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
  let bmi = 0;
  if (state.radioButton === "Metric") {
    let weight = Math.sqrt(state.kg);
    bmi = state.cm / weight;
    bmi = bmi.toFixed(2);
  } else if (state.radioButton === "Imperial") {
    //nincs kész
    const ft = state.ft * 0.0328;
    const inc = state.in * 0.0833333333 * 0.0328;
    const height = ft + inc;

    const Weight = Math.sqrt(state.kg);
    bmi = height / Weight;
    bmi = bmi.toFixed(2);
  } else {
  }
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
        <ResultCard resultWeight={bmi} idealWeight=" 9st 6lbs - 12st 10lbs." />
      ) : (
        <Welcome />
      )}
    </section>
  );
}

export default Card;
