import Datas, { Datas1, Datas2, Datas3, Datas4 } from '../Blog/data/data1';
import React, { useState } from 'react';

import CurriculumSlider from './CurriculumSlider';

const Course = () => {
  return (
    <div className="my-10 ">
      <p className="border-t-4 w-32 rounded-full my-1 m-auto border-red-400"></p>
      <h2 className="font-semibold m-auto text-center text-2xl mb-6">
        Course Overview
      </h2>
      <div className="bg-gray-200 my-6 rounded-md px-2 md:px-4 lg:px-6">
        <div className="flex flex-col gap-4">
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Kindergarten Courses
          </p>
          <CurriculumSlider data={Datas} />
          <CurriculumSlider data={Datas1} />
          <CurriculumSlider data={Datas2} />
          <CurriculumSlider data={Datas3} />
          <CurriculumSlider data={Datas4} />
        </div>
      </div>
    </div>
  );
};

export default Course;
