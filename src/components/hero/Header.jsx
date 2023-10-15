import logo from "../../images/logo.svg";
function Header() {
  return (
    <header
      className="lx:mr-[16.8rem] lx:max-h-[46.1rem] lx:pb-[12.5rem]  lx:pl-[7.2rem] relative rounded-b-[2.19rem] 
    bg-gradient1 pb-[13.56rem] pl-6 pr-6 text-center md:pb-[20.38rem] xl:absolute xl:ml-6 xl:max-w-[61.125rem] "
    >
      <div className="lx:pt-[4.69rem] flex justify-center pb-6 pt-8 xl:justify-start xl:pb-[7.94rem]">
        <img src={logo} alt="logo" width="40px" height="40px" />
      </div>
      <h1
        className="mb-6 text-[3rem] font-semibold leading-[110%] tracking-[-0.15rem]
      text-Gunmetal md:flex md:flex-col md:text-center xl:mb-[2.19rem] xl:text-left xl:text-[4rem] "
      >
        Body Mass <span className>Index Calculator</span>
      </h1>
      <p className=" font-normal text-Dark_Electric_Blue  xl:mr-[22rem] xl:text-left">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </header>
  );
}
export default Header;
