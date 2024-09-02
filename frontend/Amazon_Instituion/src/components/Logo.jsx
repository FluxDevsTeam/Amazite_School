import logo from '../assets/school_logo.png';
const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={logo} alt="" />
      <div className="text-[#363F40]">
        <h2 className="font-bold text-[15.07px]  leading-[18.37px] capitalize">
          amazite
        </h2>
        <p className="text-[8.44px] leading-[10.29px] font-extrabold">
          international academy
        </p>
      </div>
    </div>
  );
};
export default Logo;
