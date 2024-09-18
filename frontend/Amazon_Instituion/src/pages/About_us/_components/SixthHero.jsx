import sixthHeroData from '../data-json';
import clsx from 'clsx';
const SixthHero = () => {
  return (
    <div className="flex flex-wrap gap-3 items-start border-[0.64px] border-solid border-[#ECB9BA] bg-[#FFF3F3] rounded-xl py-4 px-3">
      {sixthHeroData.map((item, index) => {
        return (
          <div className="flex gap-3 items-start" key={index}>
            <h1
              className={clsx(
                `text-xl  md:text-2xl md:mt-[6px]`,
                (index + 1) % 2 === 0 ? 'text-[#2FCFDC]' : 'text-[#FD3032]'
              )}
            >
              *
            </h1>
            <p className="md:text-[20px] text-sm  md:leading-[36.5px] tracking-[1.03125px]">
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default SixthHero;
