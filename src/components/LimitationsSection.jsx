//jsx
import LimitationsCard from "./LimitationCard";
import CardWrapper from "./CardWrapper";
//images
import IconGender from "./images/icon-gender.svg";
import IconAge from "./images/icon-age.svg";
import IconMuscle from "./images/icon-muscle.svg";
import IconPregnancy from "./images/icon-pregnancy.svg";
import IconRace from "./images/icon-race.svg";
import CurvedLineLeft from "./images/pattern-curved-line-left.svg";
import CurvedLineRight from "./images/pattern-curved-line-right.svg";
function LimitationsSection() {
  return (
    <>
      <section className="mb-[6rem] flex flex-col flex-wrap gap-4 md:flex-row md:justify-center md:gap-8 xl:mt-[7.5rem] xl:hidden xl:flex-none ">
        <LimitationsCard
          image={IconGender}
          title="Gender"
          text="The development and body fat composition of girls 
  and boys vary with age. Consequently, a child's 
  age and gender are considered when evaluating their BMI."
        />

        <LimitationsCard
          image={IconAge}
          title="Age"
          text="In aging individuals, increased body fat and 
      muscle loss may cause BMI to underestimate body fat content."
        />
        <LimitationsCard
          image={IconMuscle}
          title="Muscle"
          text="BMI may misclassify muscular individuals as 
      overweight or obese, as it doesn't differentiate muscle from fat."
        />

        <LimitationsCard
          image={IconPregnancy}
          title="Pregnancy"
          text="Expectant mothers experience weight gain due 
      to their growing baby. Maintaining a healthy pre-pregnancy 
      BMI is advisable to minimise health risks for both mother and child."
        />
        <LimitationsCard
          image={IconRace}
          title="Race"
          text="Certain health concerns may affect individuals of 
      some Black and Asian origins at lower BMIs than others. 
      To learn more, it is advised to discuss this with your 
      GP or practice nurse."
        />
      </section>
      {/* határ */}
      <CardWrapper>
        <LimitationsCard
          image={IconGender}
          title="Gender"
          text="The development and body fat composition of girls 
  and boys vary with age. Consequently, a child's 
  age and gender are considered when evaluating their BMI."
        />
      </CardWrapper>
      <CardWrapper>
        <LimitationsCard
          image={IconAge}
          title="Age"
          text="In aging individuals, increased body fat and 
      muscle loss may cause BMI to underestimate body fat content."
        />
        <LimitationsCard
          image={IconMuscle}
          title="Muscle"
          text="BMI may misclassify muscular individuals as 
      overweight or obese, as it doesn't differentiate muscle from fat."
        />
      </CardWrapper>

      <CardWrapper>
        <LimitationsCard
          image={IconPregnancy}
          title="Pregnancy"
          text="Expectant mothers experience weight gain due 
      to their growing baby. Maintaining a healthy pre-pregnancy 
      BMI is advisable to minimise health risks for both mother and child."
        />
        <LimitationsCard
          image={IconRace}
          title="Race"
          text="Certain health concerns may affect individuals of 
      some Black and Asian origins at lower BMIs than others. 
      To learn more, it is advised to discuss this with your 
      GP or practice nurse."
        />
      </CardWrapper>
    </>
  );
}

export default LimitationsSection;
