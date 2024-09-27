import bgImage2 from '../../../assets/original.jpeg';
import logo from '../../../assets/teacher2.jpg';
import img from '../../../assets/stud4.jpg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const About_us = () => {
  const [backgroundImg, setBackgroundimg] = useState(1);
  const bgImage =
    backgroundImg === 1 ? bgImage2 : backgroundImg === 2 ? logo : img;
  return (
    <div className="">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-12 items-center">
          <h2 className="montaga  text-4xl  ">About Us</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-y-4 xl:gap-x-8">
          <div className="">
            <div className="relative rounded-[187px] md:rounded-t-[564px] md:h-[346px] md:w-[346px] h-[285px] w-[285px]">
              <img
                src={bgImage}
                alt=""
                className="h-full w-full rounded-t-[564px] transition-all ease-in-out duration-100 object-cover md:border-[11px] border-[4px] border-solid border-[#2FCFDC]"
              />
              <div className="bg-white flex gap-3 absolute bottom-1 md:bottom-2 left-[20%]">
                <button
                  type="button"
                  className="md:h-[61.35px]  md:w-[61.35px] h-[50.53px] w-[50.53px] border-[1.33px] md:border-[4px] border-[#2FCFDC] border-solid"
                  onClick={() => setBackgroundimg(1)}
                >
                  <img
                    src={bgImage2}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  className="md:h-[61.35px]  md:w-[61.35px] h-[50.53px]  w-[50.53px] border-[1.33px] md:border-[4px] border-[#2FCFDC] border-solid"
                  onClick={() => setBackgroundimg(2)}
                >
                  <img
                    src={logo}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  className="md:h-[61.35px]  md:w-[61.35px] h-[50.53px]  w-[50.53px] border-[1.33px] md:border-[4px] border-[#2FCFDC] border-solid"
                  onClick={() => setBackgroundimg(3)}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="text-[#363F40] w-full lg:w-[450px]  text-center lg:text-start ">
            <h4 className="text-lg md:text-xl lg:text-2xl">We are AIA</h4>
            <p className="text-sm md:text-lg ml-2">
              Amazite was founded on the belief that education should be
              accessible and enjoyable for everyone.Frustrated by the
              limitations of traditional learning methods, our founders set out
              to create a platform that embraces the flexibility and
              opportunities of the digital ag...{' '}
              <span className="text-[#ee5051] font-extrabold">
                <NavLink to="/about-us">Learn more</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About_us;
