import imgAnim from '../constatnt/data-json';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
const FirstHero = () => {
  const duration = (index) => {
    return index === 0 ? 5 : index === 1 ? 4 : index === 2 ? 7 : 3;
  };
  return (
    <div className="min-h-[28vh] md:min-h-[38vh] gap-4 md:gap-10 xl:gap-10 lg:min-h-[80vh] gradient flex flex-col items-center py-6 px-4 xl:py-10">
      <div className="flex">
        {imgAnim.map((item, index) => {
          const xRange = [0, 20 + (index + 4), -20 - (index + 10)];
          return (
            <motion.img
              animate={{
                x: [0, 20, -20], // Moves right and left
                transition: {
                  duration: duration(index),
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                },
              }}
              src={item}
              key={index}
              alt="image"
              className={clsx(
                `h-[90px] w-[90px] object-cover border-[6px] border-solid rounded-full`,
                index + 1 === 1 || index + 1 === 4
                  ? 'border-[#2FCFDC]'
                  : index + 1 === 2
                  ? 'border-[#EE5051]'
                  : 'border-[#ECB9BA]',
                index !== 0 && '-ml-14'
              )}
            />
          );
        })}
      </div>

      <div className="max-w-[1003px] w-full text-center">
        <h1 className="montaga text-xl md:text-4xl xl:text-5xl text-white ">
          Inspire a passion for learning that brings real, noticeable progress.
        </h1>
      </div>
      <div className="max-w-[840px]  w-full text-center">
        <p className="text-white text-sm md:text-xl ">
          Find out why we've been trusted with countless teaching moments for
          over 4 years and still going strong..
        </p>
      </div>

      <div className="flex gap-6">
        <NavLink
          to="/apply-now"
          className="px-3 bg-[#ECB9BA] hover:bg-[#ecb9bac2] py-2 duration-500 md:py-4 rounded-[16px] text-[#363F40] text-sm md:text-xl font-medium"
        >
          Apply Now
        </NavLink>
        <NavLink
          to="/curriculum"
          className="px-3 bg-[#ECB9BA] hover:bg-[#ecb9bac2] duration-500 py-2 md:py-4 rounded-[16px] text-[#363F40] text-sm md:text-xl font-medium"
        >
          Curriculum
        </NavLink>
      </div>
    </div>
  );
};
export default FirstHero;
