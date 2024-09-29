import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const CurriculumSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const slider = (prevIndex + 1) % data.length;
      console.log(slider);
      return slider;
    });
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const slider = (prevIndex - 1 + data.length) % data.length;
      console.log(slider);
      return slider;
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-lg ">
      <div
        className="flex gap-4 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((course, index) => (
          <div
            key={index}
            className="md:w-2/6 m-auto w-full cursor-pointer flex-shrink-0 rounded-t-md  hover:shadow-2xl duration-500  transition hover:scale-105"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-md "
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <p className="text-sm mb-4">{course.blog}</p>
              <button className="bg-teal-400 rounded-md py-2 px-4 text-sm text-white hover:bg-teal-500 transition-colors">
                Read more ➡
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
export default CurriculumSlider;
