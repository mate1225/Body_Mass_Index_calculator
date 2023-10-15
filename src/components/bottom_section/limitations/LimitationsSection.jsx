//jsx
import LimitationsCard from "./LimitationCard";
import CardWrapper from "./CardWrapper";
import Description from "../Description";
//images
import IconGender from "../../../images/icon-gender.svg";
import IconAge from "../../../images/icon-age.svg";
import IconMuscle from "../../../images/icon-muscle.svg";
import IconPregnancy from "../../../images/icon-pregnancy.svg";
import IconRace from "../../../images/icon-race.svg";
import CurvedLineRight from "../../../images/pattern-curved-line-right.svg";

function LimitationsSection() {
  return (
    <>
      <section className=" mb-[7.5rem] hidden items-end xl:mt-[7.5rem] xl:flex xl:flex-col">
        <div className=" xl:mr-[14.94rem] xl:flex">
          <Description
            title="Limitations of BMI"
            text=" Although BMI is often a practical indicator of healthy weight, 
      it is not suited for every person. Specific groups should carefully 
      consider their BMI outcomes, and in certain cases, 
      the measurement may not be beneficial to use."
            divStyle="xl:ml-[5rem] xl:mr-[8.25rem] xl:text-left "
          />
          <LimitationsCard
            image={IconGender}
            title="Gender"
            text="The development and body fat composition of girls 
and boys vary with age. Consequently, a child's 
age and gender are considered when evaluating their BMI."
          />
        </div>
        <div className=" mr-[8.75rem] mt-8 flex gap-8">
          <img src={CurvedLineRight} className=" mb-[4.69rem] mr-[8.69rem] " />
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
        </div>
        <div className=" mr-[21.9rem]  mt-6 flex gap-8">
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
        </div>
      </section>

      <div className="xl:hidden ">
        <Description
          title="Limitations of BMI"
          text=" Although BMI is often a practical indicator of healthy weight, 
        it is not suited for every person. Specific groups should carefully 
        consider their BMI outcomes, and in certain cases, 
        the measurement may not be beneficial to use."
          customStyle="mt-[4.5rem] text-center mb-[3.5rem] xl:mt-[7.5rem]"
          mainStyle=" text-center mt-[6rem]"
        />
        <section className="mb-[6rem] mt-[3.5rem] flex flex-col flex-wrap gap-4 md:flex-row md:justify-center md:gap-8 ">
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
      </div>
    </>
  );
}

export default LimitationsSection;
