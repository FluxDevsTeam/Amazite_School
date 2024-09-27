import {
  About_us,
  Curriculum,
  FirstHero,
  EventAndAward,
  Testimony,
} from './_components';
const Landing = () => {
  return (
    <div className="">
      <FirstHero />
      <section className="max-w-[1083px] flex-col gap-10 flex items-center mx-auto px-4 lg:px-0 py-8">
        <Curriculum />
        <EventAndAward />
        <About_us />
        <Testimony />
      </section>
    </div>
  );
};
export default Landing;
