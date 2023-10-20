import InputComponent from "./InputComponent";
function Metric({ kgValue, cmValue, handleChange }) {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 grid-rows-2  gap-3 md:grid-cols-2 md:grid-rows-1">
        <InputComponent
          title="Weight"
          unit="kg"
          name="kg"
          value={kgValue}
          handleChange={handleChange}
        />
        <InputComponent
          title="Height"
          unit="cm"
          name="cm"
          value={cmValue}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default Metric;
