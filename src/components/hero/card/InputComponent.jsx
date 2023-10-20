function InputComponent({ name, value, handleChange, unit, title }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[0.875rem] text-Labels">{title}</p>
      <div className=" relative flex flex-col">
        <input
          type="text"
          className=" rounded-xl border-2 border-solid border-Borders px-[1.5rem] py-[1.25rem] text-[1.5rem] font-semibold text-Gunmetal outline-none focus:border-2 focus:border-solid focus:border-Blue"
          name={name}
          value={value}
          onChange={handleChange}
        />
        <p className="absolute right-0 top-0 mr-6 mt-5 flex items-center pr-3 text-[1.5rem] font-semibold text-blue-500">
          {unit}
        </p>
      </div>
    </div>
  );
}

export default InputComponent;
