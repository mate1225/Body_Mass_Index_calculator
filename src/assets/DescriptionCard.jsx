import React from "react";
function DescriptionCard(props) {
  let { image, title, text } = props;
  return (
    <div
      className="pt-[2.5rem] md:ml-[2.44rem] md:flex md:items-center 
    md:justify-center md:gap-[2.5rem]"
    >
      <img src={image} alt="image" className=" h-[64px] w-[64px]" />
      <div>
        <h3 className="pt-8 text-[1.5rem] font-semibold tracking-[-0.075rem] text-Gunmetal md:pt-0">
          {title}
        </h3>
        <p className="pt-6 text-Dark_Electric_Blue">{text}</p>
      </div>
    </div>
  );
}

export default DescriptionCard;
