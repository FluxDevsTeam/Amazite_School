import Datas, { Datas1, Datas2, Datas3, Datas4 } from "../Blog/data/data1";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const CourseCarousel = ({ courses }) => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);

  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex === Datas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex === 0 ? Datas.length - 1 : prevIndex - 1
    );
  };

  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex === Datas1.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex === 0 ? Datas1.length - 1 : prevIndex - 1
    );
  };

  const nextSlide3 = () => {
    setCurrentIndex3((prevIndex) =>
      prevIndex === Datas2.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide3 = () => {
    setCurrentIndex3((prevIndex) =>
      prevIndex === 0 ? Datas2.length - 1 : prevIndex - 1
    );
  };

  const nextSlide4 = () => {
    setCurrentIndex4((prevIndex) =>
      prevIndex === Datas3.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide4 = () => {
    setCurrentIndex4((prevIndex) =>
      prevIndex === 0 ? Datas3.length - 1 : prevIndex - 1
    );
  };

  const nextSlide5 = () => {
    setCurrentIndex5((prevIndex) =>
      prevIndex === Datas4.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide5 = () => {
    setCurrentIndex5((prevIndex) =>
      prevIndex === 0 ? Datas4.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
        >
          {Datas.map((course, index) => (
            <div
              key={course.id}
              className="md:w-2/6 m-auto w-full flex-shrink-0 p-6"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover shadow-md transition hover:scale-105 rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <p className="text-sm mb-4">{course.blog}</p>
              <button className="bg-teal-400 rounded-md py-2 px-4 text-sm text-white hover:bg-teal-500 transition-colors">
                Read more ➡
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide1}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide1}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="my-10 relative w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex2 * 100}%)` }}
        >
          {Datas1.map((course, index) => (
            <div
              key={course.id}
              className="md:w-2/6 m-auto w-full flex-shrink-0 p-6"
            >
              <img
                src={course.img1}
                alt={course.title}
                className="w-full h-48 object-cover shadow-md transition hover:scale-105 rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{course.title1}</h3>
              <p className="text-sm mb-4">{course.blog}</p>
              <button className="bg-teal-400 rounded-md py-2 px-4 text-sm text-white hover:bg-teal-500 transition-colors">
                Read more ➡
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide2}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide2}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex3 * 100}%)` }}
        >
          {Datas2.map((course, index) => (
            <div
              key={course.id}
              className="md:w-2/6 m-auto w-full flex-shrink-0 p-6"
            >
              <img
                src={course.img2}
                alt={course.title2}
                className="w-full h-48 object-cover shadow-md transition hover:scale-105 rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{course.title2}</h3>
              <p className="text-sm mb-4">{course.blog}</p>
              <button className="bg-teal-400 rounded-md py-2 px-4 text-sm text-white hover:bg-teal-500 transition-colors">
                Read more ➡
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide3}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide3}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative my-8 w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex4 * 100}%)` }}
        >
          {Datas3.map((course, index) => (
            <div
              key={course.id}
              className="md:w-2/6 m-auto w-full flex-shrink-0 p-6"
            >
              <img
                src={course.img3}
                alt={course.title3}
                className="w-full h-48 object-cover shadow-md transition hover:scale-105 rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{course.title3}</h3>
              <p className="text-sm mb-4">{course.blog}</p>
              <button className="bg-teal-400 rounded-md py-2 px-4 text-sm text-white hover:bg-teal-500 transition-colors">
                Read more ➡
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide4}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide4}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative my-8 w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex5 * 100}%)` }}
        >
          {Datas4.map((course, index) => (
            <div
              key={course.id}
              className="md:w-2/6 m-auto w-full flex-shrink-0 p-6"
            >
              <img
                src={course.img4}
                alt={course.title}
                className="w-full h-48 object-cover shadow-md transition hover:scale-105 rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{course.title4}</h3>
              <p className="text-sm mb-4">{course.blog}</p>
              <button className="bg-teal-400 rounded-md py-2 px-4 text-sm text-white hover:bg-teal-500 transition-colors">
                Read more ➡
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide5}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide5}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
};

const Course = () => {
  return (
    <div className="my-10 m-auto max-w-6xl">
      <p className="border-t-4 w-32 my-1 m-auto border-red-400"></p>
      <h2 className="font-semibold m-auto text-center text-2xl mb-6">
        Course Overview
      </h2>
      <div className="bg-gray-200 my-6 rounded-md p-6">
        <div className="m-4">
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Kindergarten Courses
          </p>
          <CourseCarousel courses={Datas} />
        </div>
      </div>
    </div>
  );
};

export default Course;

//         <div>
// //           <p className="p-4 text-2xl font-semibold text-gray-900">
// //             Grade 2 Courses
// //           </p>
// //           <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
// //             {Datas2.map((data) => (
//               <div key={data.id}>
//                 <img src={data.img2} alt="" />
//                 <p className="font-semibold text-sm py-2">{data.title2}</p>
//                 <p className="text-xs">{data.blog}</p>
//                 <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
//                   read more ➡
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <p className="p-4 text-2xl font-semibold text-gray-900">
//             Grade 3 Courses
//           </p>
//           <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
//             {Datas3.map((data) => (
//               <div key={data.id}>
//                 <img src={data.img3} alt="" />
//                 <p className="font-semibold text-sm py-2">{data.title3}</p>
//                 <p className="text-xs">{data.blog}</p>
//                 <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
//                   read more ➡
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <p className="p-4 text-2xl font-semibold text-gray-900">
//             Grade 4 to 5 Courses
//           </p>
//           <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
//             {Datas4.map((data) => (
//               <div key={data.id}>
//                 <img src={data.img4} alt="" />
//                 <p className="font-semibold text-sm py-2">{data.title4}</p>
//                 <p className="text-xs">{data.blog}</p>
//                 <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
//                   read more ➡
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <div>
//           <p className="p-4 text-2xl font-semibold text-gray-900">
//             Grade 4 to 5 Courses
//           </p>
//           <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
//             {Datas.map((data) => (
//               <div key={data.id}>
//                 <img src={data.img} alt="" />
//                 <p className="font-semibold text-sm py-2">{data.title}</p>
//                 <p className="text-xs">{data.blog}</p>
//                 <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
//                   read more ➡
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Course;
