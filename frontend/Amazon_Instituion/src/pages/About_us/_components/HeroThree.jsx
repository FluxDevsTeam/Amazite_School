import group from '../../../assets/group.jpeg';
import Header from './Header';
const HeroThree = () => {
  return (
    <div className=" flex items-center flex-col gap-[35px]">
      <Header header="who we are" />

      <div className="flex flex-col md:flex-row gap-x-10 items-stretch  ">
        <div className="flex-1  border-[11px] border-solid border-[#2FCFDC] rounded-t-[16px] md:rounded-[16px]">
          <img src={group} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 bg-[#2FCFDC] -mt-1 py-3 px-4 lg:px-[23px] lg:py-[28px] rounded-b-[16px] md:rounded-[16px] ">
          <p className="text-sm lg:text-[20px] lg:leading-[36.5px] lg:tracking-[1.03125px]">
            We are a passionate team of educators, developers, and designers
            committed to making learning enjoyable and effective. With a diverse
            background in education, technology, and design, we’ve come together
            with a common goal: to create a platform that supports personalized
            learning experiences for everyone.
          </p>
        </div>
      </div>

      <div className="flex md:hidden"></div>
    </div>
  );
};
export default HeroThree;

{
  /* <div className="flex flex-wrap gap-10 items-stretch lg:items-center">
  <div className="flex-1 border-11 border-solid border-[#2FCFDC] rounded-[16px]">
    <img src={group} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1 bg-[#82D5DC] lg:px-[23px] lg:py-[28px] rounded-[16px]">
    <p className="text-lg lg:text-[20px] lg:leading-[36.5px] lg:tracking-[1.03125px]">
      We are a passionate team of educators, developers, and designers committed
      to making learning enjoyable and effective. With a diverse background in
      education, technology, and design, we’ve come together with a common goal:
      to create a platform that supports personalized learning experiences for
      everyone.
    </p>
  </div>
</div>; */
}
