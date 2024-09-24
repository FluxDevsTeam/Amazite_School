import logo from '../../../assets/laptop.png';
const FirstHero = () => {
  return (
    <section className="bg-[#E4DFDF] flex gap-2 md:pl-2 lg:pl-24 flex-col md:flex-row items-center py-6">
      <div className="flex flex-col items-center gap-10">
        <div className="text-center flex flex-col gap-5 px-2">
          <h1 className="roboto text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-medium text-[#363F40]">
            Welcome To Amazite
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-[39.5px] text-[#363F40]">
            "Empowering you to learn, grow, and <br /> succeed <br /> meet the
            minds behind our app."
          </p>
        </div>
        <button
          type="button"
          className="bg-[#ECB9BA] hidden md:block rounded-[16px] py-2 font-medium px-4"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
        >
          Explore Our Courses
        </button>
      </div>
      <div className="">
        <img src={logo} alt="" className="pl-10 md:pl-0" />
      </div>
      <button
        type="button"
        className="bg-[#ECB9BA] md:hidden block rounded-[16px] py-2 font-medium px-4"
        style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
      >
        Explore Our Courses
      </button>
    </section>
  );
};
export default FirstHero;
