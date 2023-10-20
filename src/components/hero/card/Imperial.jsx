import InputComponent from "./InputComponent";
function Imperial() {
  return (
    <>
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Height</p>
          <div className="grid grid-cols-2 gap-4">
            <InputComponent unit="ft" />
            <InputComponent unit="in" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[0.875rem] text-Labels">Weight</p>
          <div className="grid grid-cols-2 gap-4">
            <InputComponent unit="st" />
            <InputComponent unit="lbs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Imperial;
