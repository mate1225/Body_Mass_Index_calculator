import ManEating from "./images/image-man-eating.webp";
import Description from "./Description";
function ResultMeaningSection() {
  return (
    <>
      <section className="md:flex xl:ml-[8.75rem]">
        <img
          src={ManEating}
          alt="image-man-eating"
          className="mt-[4.5rem] md:ml-[-4rem] md:mr-[4.69rem]
           md:mt-[6rem] md:h-[25.69313rem] md:w-[22.55981rem] xl:h-[24.25rem] xl:w-[35.25rem]"
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
          customStyle="mt-[3rem] mb-[4.48rem]  md:mr-[2.69rem] md:mt-[8.19rem] xl:mt-[15.56rem] 
          xl:text-left xl:mr-[8.75rem] xl:max-w-[29.1rem]"
        />
      </section>
    </>
  );
}

export default ResultMeaningSection;
