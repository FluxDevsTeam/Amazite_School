import logo from '../../../assets/kid.jpeg';
import FourthHeroReusable from './FourthHeroReusable';
const FifthHero = () => {
  return (
    <div className="">
      <div className="flex gap-x-10 items-stretch flex-col md:flex-row ">
        <div className="flex-1 rounded-t-[16px] md:rounded-[16px] border-[11px] border-solid border-[#F4CDCD]">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 py-3 px-4 -mt-1 lg:py-[28px]  lg:px-[23px]  bg-[#F4CDCD] rounded-b-[16px] md:rounded-[16px]">
          <FourthHeroReusable
            header="what we offer"
            text="AIA offers a wide range of courses,interactive lessons, and tools tailored to meet the needs of both beginners and advanced learners.By offering-led homeschooling program, AIA will enable stodents to achieve higher academic and personal growth outcomes compared to traditional homeschooling methods."
          />
        </div>
      </div>
    </div>
  );
};
export default FifthHero;
