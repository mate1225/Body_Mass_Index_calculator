import { useState } from "react";
//jsx
import Metric from "./Metric";
import Imperial from "./Imperial";
import RadioButton from "./RadioButton";
import ResultCard from "./ResultCard";
import Welcome from "./Welcome";
function Card() {
  //inputState
  const [state, setState] = useState({
    radioButton: "Metric",
    kg: "",
    cm: "",
    st: "",
    lbs: "",
    ft: "",
    in: "",
  });
  const [error, setError] = useState({
    kg: false,
    cm: false,
    st: false,
    lbs: false,
    ft: false,
    in: false,
  });

  //display state status
  let active = false;
  if (
    state.radioButton === "Metric" &&
    state.cm !== "" &&
    state.kg !== "" &&
    error.cm === false &&
    error.kg === false
  ) {
    active = true;
  } else if (
    state.radioButton === "Imperial" &&
    state.st !== "" &&
    state.lbs !== "" &&
    state.ft !== "" &&
    state.in !== "" &&
    error.st === false &&
    error.lbs === false &&
    error.ft === false &&
    error.in === false
  ) {
    active = true;
  } else {
    active = false;
  }

  //calculations
  let bmi = 0;
  let lbs;
  let metricHeight = Math.pow(Number(state.cm) / 100, 2);
  let imperialHeight = Math.pow(Number(state.ft) * 12 + Number(state.in), 2);
  if (state.radioButton === "Metric") {
    bmi = Number(state.kg) / metricHeight;
    bmi = bmi.toFixed(2);
  } else if (state.radioButton === "Imperial") {
    lbs = Number(state.st) * 14;
    lbs = lbs + Number(state.lbs);
    bmi = (lbs / imperialHeight) * 703;
    bmi = bmi.toFixed(2);
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
    minimumIdealWeight = ((18.5 * imperialHeight) / 703).toFixed(1);
    maximumIdealWeight = ((24.9 * imperialHeight) / 703).toFixed(1);
    idealWeightValue = `${minimumIdealWeight}lbs - ${maximumIdealWeight}lbs`;
  }
  //inputState change handler
  function handleInputChange(e) {
    const { name, value } = e.target;
    // Check if the input contains only letters
    const containsOnlyLetters = /^[a-zA-Z]+$/.test(value);

    // Check if the input contains only numbers
    const containsOnlyNumbers = /^[0-9]+$/.test(value);

    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (
      containsOnlyLetters ||
      value.length > 6 ||
      Number(value) === 0 ||
      (!containsOnlyLetters && !containsOnlyNumbers)
    ) {
      setError((prev) => {
        return {
          ...prev,
          [name]: true,
        };
      });

      setState((prev) => {
        return {
          ...prev,
          [name]: "",
        };
      });
    } else if (containsOnlyNumbers) {
      setError((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
    }
  }
  //radio Button State change handler
  function handleRadioButtonChange(value) {
    setState(() => {
      return {
        radioButton: value,
        kg: "",
        cm: "",
        st: "",
        lbs: "",
        ft: "",
        in: "",
      };
    });
    setError({
      kg: false,
      cm: false,
      st: false,
      lbs: false,
      ft: false,
      in: false,
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
      <RadioButton
        btnValue={state.radioButton}
        handelChange={handleRadioButtonChange}
        label1="Metric"
        label2="Imperial"
      />
      {state.radioButton === "Metric" ? (
        <Metric
          kgValue={state.kg}
          cmValue={state.cm}
          handleChange={handleInputChange}
          kgError={error.kg}
          cmError={error.cm}
        />
      ) : (
        <Imperial
          ftValue={state.ft}
          inchValue={state.in}
          stValue={state.st}
          lbValue={state.lbs}
          handleChange={handleInputChange}
          ftError={error.ft}
          inchError={error.in}
          stError={error.st}
          lbError={error.lbs}
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
