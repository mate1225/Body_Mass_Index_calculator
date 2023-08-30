import React, { useState } from "react";
import "./App.css";
//jsx components
import Header from "./assets/Header";
import Card from "./assets/Card";
import Description from "./assets/Description";
import DescriptionCard from "./assets/DescriptionCard";
import LimitationsCard from "./assets/LimitationCard";

//images
import IconEating from "./assets/images/icon-eating.svg";
import IconExercise from "./assets/images/icon-exercise.svg";
import IconSleep from "./assets/images/icon-sleep.svg";
import ManEating from "./assets/images/image-man-eating.webp";
import IconGender from "./assets/images/icon-gender.svg";
import IconAge from "./assets/images/icon-age.svg";
import IconMuscle from "./assets/images/icon-muscle.svg";
import IconPregnancy from "./assets/images/icon-pregnancy.svg";
import IconRace from "./assets/images/icon-race.svg";
//meg kell még csinálni a tailwind css-nek a prettier setup-ját!!!!

function App() {
  return (
    <div>
      <Header />
      <Card />
      <div className="md:flex ">
        <img
          src={ManEating}
          alt="image-man-eating"
          className="mt-[4.5rem] md:ml-[-4rem] md:mr-[4.69rem]
           md:mt-[6rem] md:h-[25.69313rem] md:w-[22.55981rem]"
        />
        <Description
          title="What your BMI result means"
          text=" A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' 
      Maintaining a healthy weight may lower your chances of experiencing
      health issues later on, such as obesity and type 2 diabetes. Aim for
      a nutritious diet with reduced fat and sugar content, incorporating
      ample fruits and vegetables. Additionally, strive for regular
      physical activity, ideally about 30 minutes daily for five days a
      week."
          customStyle="mt-[3rem] mb-[4.48rem]  md:mr-[2.69rem] md:mt-[8.19rem]"
        />
      </div>
      <section
        className="bg-gradient1 pb-[3.5rem] 
      pl-[1.2rem] pr-[1.81rem] pt-4"
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
      <Description
        title="Limitations of BMI"
        text=" Although BMI is often a practical indicator of healthy weight, 
        it is not suited for every person. Specific groups should carefully 
        consider their BMI outcomes, and in certain cases, 
        the measurement may not be beneficial to use."
        customStyle="mt-[4.5rem] text-center mb-[3.5rem]"
      />
      <section
        className="mb-[6rem] flex flex-col 
      gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-8 "
      >
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
  );
}

export default App;
