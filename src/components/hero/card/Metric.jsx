import InputComponent from "./InputComponent";
function Metric({}) {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 grid-rows-2  gap-3 md:grid-cols-2 md:grid-rows-1">
        <InputComponent title="Weight" unit="kg" />
        <InputComponent title="Height" unit="cm" />
      </div>
    </>
  );
}

export default Metric;
