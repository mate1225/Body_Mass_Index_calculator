import InputComponent from "./InputComponent";
function Imperial({ ftValue, inchValue, stValue, lbValue, handleChange }) {
  return (
    <>
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Height</p>
          <div className="grid grid-cols-2 gap-4">
            <InputComponent
              unit="ft"
              name="ft"
              value={ftValue}
              handleChange={handleChange}
            />
            <InputComponent
              unit="in"
              name="in"
              value={inchValue}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Weight</p>
          <div className="grid grid-cols-2 gap-4">
            <InputComponent
              unit="st"
              name="st"
              value={stValue}
              handleChange={handleChange}
            />
            <InputComponent
              unit="lbs"
              name="lbs"
              value={lbValue}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Imperial;
