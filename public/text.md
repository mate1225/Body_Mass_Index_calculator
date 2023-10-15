import Metric from "./Metric";
import Imperial from "./Imperial";
import RadioButton from "./RadioButton";
import ResultCard from "./ResultCard";
import Welcome from "./Welcome";

function Card() {
//idéglenes
const renderValue = true;
const RVAlue = true;
return (
<section
      className="z-2 lx:mt-[10.44rem] lx:max-h-[37.9rem] lx:max-w-[31.3rem] relative ml-6 mr-6
    mt-[-180px] rounded-2xl bg-Pure_White p-6 shadow-cardShadow  md:ml-[2.44rem] md:mr-[2.69rem] md:mt-[-17.5rem] xl:ml-[46rem]"
    >
<h2 className="text-[1.5rem] font-semibold tracking-[-0.075rem] text-Gunmetal ">
Enter your details below
</h2>

      <div className=" mt-6 grid grid-cols-2 grid-rows-1">
        <RadioButton title="Metric" btnName="radioButton" btnValue="Metric" />
        <RadioButton
          title="Imperial"
          btnName="radioButton"
          btnValue="Imperial"
          customStyle="ml-[1rem]"
        />
      </div>
      {renderValue ? <Metric /> : <Imperial />}
      {RVAlue ? (
        <ResultCard resultWeight="22.0" idealWeight=" 9st 6lbs - 12st 10lbs." />
      ) : (
        <Welcome />
      )}
    </section>

);
}

export default Card;

//imperial
{
/\*_/
//metric
/_ <ResultCard resultWeight="23.4" idealWeight=" 63.3kgs-85.2kgs" /> \*/
}
