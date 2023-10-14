function InputComponent({ name, value, handleChange, unit, title }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[0.875rem] text-Labels">{title}</p>

      <input
        type="text"
        className="  rounded-xl border-2 border-solid border-Borders px-[1.5rem] py-[1.25rem] text-[1.5rem] font-semibold text-Gunmetal outline-Blue"
        name={name}
        value={value}
        onChange={handleChange}
      />

      {/* <p className=" absolute left-[87%] top-[48%] text-[1.5rem] font-semibold text-blue-500">
          {unit}
        </p> */}
    </div>
  );
}

export default InputComponent;
