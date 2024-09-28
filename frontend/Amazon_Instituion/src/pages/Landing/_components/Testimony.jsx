import { testimony } from '../constatnt/data-json';
import Stars from './Stars';
const Testimony = () => {
  return (
    <div className="flex flex-col items-center gap-10 ">
      <h2 className="montaga text-4xl ">Testimony</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {testimony.map((item, index) => {
          const { img, word, name } = item;
          return (
            <div className="flex gap-4 h-[180px] w-full max-w-[450px] ">
              <div className="w-[34%] text-center">
                <img
                  src={img}
                  alt="image"
                  className="h-[60%] object-cover w-full rounded-t-[11px]"
                />
                <p className="font-bold text-sm md:text-lg xl:text-xl text-[#363F40]">
                  {name}
                </p>
              </div>
              <div className="w-[60%] flex flex-col gap-5">
                <h5 className="text-sm md:text-lg  text-gray-500">{word}</h5>
                <Stars stars={index + 1 + 1.5} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Testimony;
