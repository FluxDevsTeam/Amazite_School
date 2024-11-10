import { eventAndAward } from '../constatnt/data-json';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const EventAndAward = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 lg:items-center ">
        <div className="text-center">
          <h2 className="montaga text-4xl ">Events and Award</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-5 ">
          {eventAndAward.map((item, index) => {
            const { img, title, desc } = item;
            return (
              <div
                key={index}
                className=" hover:scale-105 duration-500 cursor-pointer hover:shadow-xl"
              >
                <img
                  src={img}
                  alt="image"
                  className="h-[60%] w-full object-cover rounded-t-[23px]"
                />
                <div className="bg-white p-4 border-x-[#2FCFDC] h-[40%]  justify-between flex flex-col rounded-b-[23px]">
                  <h4 className="font-bold text-[#363F40] text-lg ">{title}</h4>
                  <p className="text-gray-500 text-xs font-medium">{desc}</p>
                  <NavLink
                    to="/curriculum"
                    className="px-2 bg-[#2FCFDC] w-fit flex items-center gap-3 hover:bg-[#2fcedcc9] py-2 duration-500  rounded-[7px] text-[#363F40] text-sm "
                  >
                    Read more
                    <FaArrowRight />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default EventAndAward;
