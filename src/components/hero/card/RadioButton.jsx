import * as RadioGroup from "@radix-ui/react-radio-group";

function RadioButton({ btnValue, handelChange, label1, label2 }) {
  return (
    <>
      <RadioGroup.Root
        className="mt-6 grid  grid-cols-2 grid-rows-1 "
        aria-label="View density"
        onValueChange={handelChange}
        value={btnValue}
      >
        <div className="flex items-center ">
          <RadioGroup.Item
            className={`h-[1.9375rem] w-[1.9375rem] rounded-full border-2 border-solid border-Borders  hover:border-Blue  ${
              btnValue === "Metric"
                ? "border-transparent bg-bgColor"
                : "bg-white"
            }`}
            value="Metric"
            id="r1"
          >
            <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[15px] after:w-[15px]  after:rounded-[50%] after:bg-Blue after:content-[''] " />
          </RadioGroup.Item>
          <label
            className="cursor-pointer pl-[1.12rem] text-[1rem] text-Gunmetal"
            htmlFor="r1"
          >
            {label1}
          </label>
        </div>
        <div className="flex items-center">
          <RadioGroup.Item
            className={`ml-[0.5rem] h-[1.9375rem] w-[1.9375rem] rounded-full border-2 border-solid border-Borders hover:border-Blue ${
              btnValue === "Imperial"
                ? "border-transparent bg-bgColor"
                : "bg-white"
            }`}
            value="Imperial"
            id="r2"
          >
            <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-Blue after:content-['']" />
          </RadioGroup.Item>
          <label
            className="cursor-pointer pl-[1.12rem] text-[1rem] text-Gunmetal"
            htmlFor="r2"
          >
            {label2}
          </label>
        </div>
      </RadioGroup.Root>
    </>
  );
}

export default RadioButton;
