function Description({ title, text, mainStyle, divStyle }) {
  return (
    <section className={mainStyle}>
      <div className={`mx-5  ${divStyle}`}>
        <h2 className=" text-[2rem] font-semibold tracking-[-0.1rem] text-Gunmetal xl:text-[3rem] xl:leading-[3.3rem] ">
          {title}
        </h2>
        <p className=" mt-8 text-Dark_Electric_Blue ">{text}</p>
      </div>
    </section>
  );
}

export default Description;
