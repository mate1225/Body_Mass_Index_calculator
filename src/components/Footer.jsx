function Footer() {
  return (
    <>
      <footer className="flex flex-wrap items-center  justify-center gap-5 bg-bgColor p-4 xl:text-lg">
        <div className="flex ">
          <p className="text-Dark_Electric_Blue">Challenge by:</p>
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className=" cursor-pointer  text-Blue"
          >
            Frontend Mentor
          </a>
        </div>
        <div className="flex">
          <p className=" text-Dark_Electric_Blue">Coded by:</p>
          <a
            href="https://github.com/mate1225/mate1225.github.io"
            target="_blank"
            className=" cursor-pointer  text-Blue"
          >
            Mészáros Máté
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
