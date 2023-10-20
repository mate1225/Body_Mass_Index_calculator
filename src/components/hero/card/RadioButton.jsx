function RadioButton({
  btnValue,
  btnName,
  btnChecked,
  title,
  handelChange,
  customStyle,
}) {
  return (
    <>
      <div className={`flex items-center ${customStyle}`}>
        <input
          type="radio"
          className=" h-[31px] w-[31px] border-2 border-solid border-red-500 outline-none hover:border-Blue"
          name={btnName}
          value={btnValue}
          onChange={() =>
            handelChange({ target: { name: btnName, value: btnValue } })
          }
          checked={btnChecked}
        />
        <p className="ml-[1.12rem] text-[1rem] font-semibold">{title}</p>
      </div>
    </>
  );
}

export default RadioButton;

// focus:border-[#345ff626]
