import {
  About_us,
  Curriculum,
  FirstHero,
  EventAndAward,
  Testimony,
} from './_components';
const Landing = () => {
  return (
    <section className="text-8xl text-teal-600 flex items-center justify-center">
      <FirstHero />
      <About_us />
      <Curriculum />
      <EventAndAward />
      <Testimony />
    </section>
  );
};
export default Landing;
