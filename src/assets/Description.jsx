import React from "react";

function Description(props) {
  let { title, text, customStyle } = props;
  return (
    <section className={customStyle}>
      <div className="mx-6">
        <h2 className=" text-[2rem] font-semibold tracking-[-0.1rem] text-Gunmetal">
          {title}
        </h2>
        <p className="mt-8 text-Dark_Electric_Blue">{text}</p>
      </div>
    </section>
  );
}

export default Description;
