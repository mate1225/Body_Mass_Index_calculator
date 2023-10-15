import DescriptionCard from "../bottom_section/DescriptionCard";
//images
import IconEating from "../../images/icon-eating.svg";
import IconExercise from "../../images/icon-exercise.svg";
import IconSleep from "../../images/icon-sleep.svg";

function AdvicesSection() {
  return (
    <section
      className="items-start bg-gradient1 pb-[3.5rem]
      pl-[1.2rem] pr-[1.81rem]  pt-4 md:mt-[6rem] md:flex md:flex-col xl:flex-row xl:rounded-[2.188rem]"
    >
      <DescriptionCard
        image={IconEating}
        title="Healthy eating"
        text="Healthy eating promotes weight control, 
          disease prevention, better digestion, immunity,
           mental clarity, and mood."
      />
      <DescriptionCard
        image={IconExercise}
        title="Regular exercise"
        text="Exercise improves fitness, aids 
          weight control, elevates mood, and reduces 
          disease risk, fostering wellness and longevity."
      />
      <DescriptionCard
        image={IconSleep}
        title="Adequate sleep"
        text="Sleep enhances mental clarity,
           emotional stability, and physical wellness,
            promoting overall restoration and rejuvenation."
      />
    </section>
  );
}

export default AdvicesSection;
