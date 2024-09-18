const FourthHeroReusable = ({ header, text }) => {
  return (
    <div className=" flex flex-col items-center">
      <h3 className="capitalize text-2xl md:text-3xl lg:mb-2 text-[#363F40] font-medium roboto">
        {header}
      </h3>
      <p className="text-sm leading-[28.18px] md:text-lg lg:text-[20px] text-center lg:leading-[36.5px] lg:tracking-[1.03125px]">
        {text}
      </p>
    </div>
  );
};
export default FourthHeroReusable;
