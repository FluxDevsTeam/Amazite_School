import styled from 'styled-components';
import { curriculumHome } from '../constatnt/data-json';
import { FaArrowRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
const Curriculum = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-10 items-center">
        <div className="w-full text-center  flex justify-center">
          <h2 className="text-[#EE5051] header font-semibold text-4xl ">
            Curriculum
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-5">
          {curriculumHome.map((item, index) => {
            const { img, title } = item;
            return (
              <div
                key={index}
                className="w-[280px] hover:shadow-2xl rounded-[23px] h-[320px] hover:scale-105 duration-500 cursor-pointer"
              >
                <img
                  src={img}
                  alt="image"
                  className="h-[60%] w-full object-cover rounded-t-[23px]"
                />
                <div className="bg-white p-2 border-x-[#2FCFDC] h-[40%] justify-between flex flex-col rounded-b-[23px] border-b-[#2FCFDC] border-t-0 border-[2px] border-solid">
                  <h4 className="font-bold text-[#363F40] text-xl ">{title}</h4>
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
    </Wrapper>
  );
};
export default Curriculum;

const Wrapper = styled.div`
  .header:before {
    content: '';
    height: 7px;
    display: block;
    width: 269px;
    border-radius: 12px;
    background: #ee5051;

    margin-bottom: 18px;
  }
  .card-shadow {
    box-shadow: 0.9px 1.79px 3.68px 0px #00000040;
  }
`;
