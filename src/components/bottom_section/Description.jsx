function Description({ title, text, customStyle }) {
  return (
    <section className={customStyle}>
      <div className="mx-5 xl:ml-[5rem] xl:mr-[8.25rem] xl:text-left">
        <h2 className=" text-[2rem] font-semibold tracking-[-0.1rem] text-Gunmetal ">
          {title}
        </h2>
        <p className=" mt-8 text-Dark_Electric_Blue ">{text}</p>
      </div>
    </section>
  );
}

export default Description;
