import logo from '../../../assets/teacher2.jpg';
import random from '../../../assets/teacher.jpg';
import img from '../../../assets/stud4.jpg';
import { useState } from 'react';
import Header from './Header';
import SocialIcons from '../../../components/SocialIcons';
import FourthHeroReusable from './FourthHeroReusable';
const SeventhHero = () => {
  const [backgroundImg, setBackgroundimg] = useState(0);
  const bgImage =
    backgroundImg === 1 ? random : backgroundImg === 2 ? logo : img;

  return (
    <div className="max-w-[953px] mx-auto flex flex-col gap-12">
      <div className=" flex flex-col gap-4 items-center">
        <Header header="our story" />
        <div className="relative rounded-[187px] md:rounded-t-[564px] md:h-[564px] h-[187px] w-[187px] md:w-[564px]">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full rounded-t-[564px] transition-all ease-in-out duration-100 object-cover md:border-[11px] border-[4px] border-solid border-[#2FCFDC]"
          />
          <div className="bg-white flex gap-3 absolute bottom-1 md:bottom-2 left-[20%]">
            <button
              type="button"
              className="md:h-[95px] h-[33.22px] md:w-[95px] w-[33.5px] border-[1.33px] md:border-[4px] border-[#2FCFDC] border-solid"
              onClick={() => setBackgroundimg(1)}
            >
              <img src={random} alt="" className="h-full w-full object-cover" />
            </button>
            <button
              type="button"
              className="md:h-[95px] h-[33.22px] md:w-[95px] w-[33.5px] border-[1.33px] md:border-[4px] border-[#2FCFDC] border-solid"
              onClick={() => setBackgroundimg(2)}
            >
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </button>
            <button
              type="button"
              className="md:h-[95px] h-[33.22px] md:w-[95px] w-[33.5px] border-[1.33px] md:border-[4px] border-[#2FCFDC] border-solid"
              onClick={() => setBackgroundimg(3)}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          </div>
        </div>
        <p className="text-sm max-w-[564px] w-full leading-[28.18px] md:text-lg lg:text-[20px] text-center lg:leading-[36.5px] lg:tracking-[1.03125px]">
          Amazite was founded on the belief that education should be accessible
          and enjoyable for everyone. Frustrated by the limitations of
          traditional learning methods, our founders set out to create a
          platform that embraces the flexibility and opportunities of the
          digital age. Since our launch, we’ve grown into a global community of
          learners and educators who share a passion for knowledge and personal
          growth.
        </p>
      </div>

      <FourthHeroReusable
        header="Join Us on Our Journey"
        text="We invite you explore our courses, connect with our community, and start your learning journey with Amazite. Together, let’s unlock your potential and achieve your goals"
      />
      <SocialIcons
        className="flex gap-5 text-[35px] items-center justify-center"
        imgClassName="w-[35px] h-[35px]"
      />
    </div>
  );
};
export default SeventhHero;
