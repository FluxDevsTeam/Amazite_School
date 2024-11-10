import FourthHeroReusable from './FourthHeroReusable';

const FourthHero = () => {
  return (
    <section className="border-[#2FCFDC] text-[#363F40] flex flex-col items-center gap-5  border-solid border-[0.5px] bg-[#F7FAFA] rounded-[16px] px-6 py-3">
      <FourthHeroReusable
        header="our mission"
        text="Our mission is to empower you to learn, grow, and succeed."
      />

      <FourthHeroReusable
        header="our vision"
        text="We envision a world where learning is accessible to all, where knowledge is shared freely, and where every individual has the opportunity to reach their full potential. we strive to create an inclusive community of learners and educators who support and inspire one another."
      />
    </section>
  );
};
export default FourthHero;
