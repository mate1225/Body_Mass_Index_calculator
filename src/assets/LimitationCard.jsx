import React from "react";
function LimitationCard(props) {
  let { image, title, text } = props;
  return (
    <div className="ml-[1.2rem] mr-[1.81rem] rounded-2xl bg-Pure_White p-6 shadow-cardShadow">
      <div className="flex items-center gap-4">
        <img src={image} alt="image" className=" h-[32px] w-[32px]" />
        <h3
          className="text-[1.25rem] font-semibold
       tracking-[-0.0625rem] text-Gunmetal"
        >
          {title}
        </h3>
      </div>

      <p className="pt-4 text-Dark_Electric_Blue">{text}</p>
    </div>
  );
}

export default LimitationCard;
