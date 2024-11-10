import {
  FirstHero,
  HeroTwo,
  HeroThree,
  FifthHero,
  SixthHero,
  SeventhHero,
} from './_components';
import FourthHero from './_components/FourthHero';
import FourthHeroReusable from './_components/FourthHeroReusable';

const About_us = () => {
  return (
    <div className="flex flex-col gap-6">
      <FirstHero />
      <section className="max-w-[1083px] flex-col gap-10 flex items-center mx-auto px-4 lg:px-0 py-8">
        <HeroTwo />
        <HeroThree />
        <FourthHero />
        <FifthHero />
        <SixthHero />
      </section>
      <div className="w-full bg-[#F7FAFA] flex-col gap-5 flex py-4 px-4">
        <SeventhHero />
      </div>
    </div>
  );
};
export default About_us;
