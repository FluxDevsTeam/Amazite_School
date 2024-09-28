import {
  About_us,
  Curriculum,
  FirstHero,
  EventAndAward,
  Testimony,
  Subscribe,
} from './_components';
const Landing = () => {
  return (
    <div className="flex flex-col gap-10">
      <FirstHero />
      <section className="px-10 flex flex-col gap-10">
        <Curriculum />
        <EventAndAward />
        <About_us />
        <Testimony />
        <Subscribe />
      </section>
    </div>
  );
};
export default Landing;
