import Datas, { Datas1, Datas2, Datas3, Datas4 } from "../Blog/data/data1";
const Course = () => {
  return (
    <div className="my-10 m-auto ">
      <p className="border-t-4 w-32 my-1 m-auto border-red-400"></p>
      <h2 className=" font-semibold m-auto  text-center">Course Overview</h2>
      <div className="bg-gray-200 my-6 rounded-md p-6 ">
        <div className="m-4">
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Kindergarten Courses
          </p>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {Datas.map((data) => (
              <div key={data.id}>
                <img src={data.img} alt="" />
                <p className="font-semibold text-sm py-2">{data.title}</p>
                <p className="text-xs">{data.blog}</p>
                <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
                  read more ➡
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Grade 1 Course
          </p>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {Datas1.map((data) => (
              <div key={data.id}>
                <img src={data.img1} alt="" />
                <p className="font-semibold text-sm py-2">{data.title1}</p>
                <p className="text-xs">{data.blog}</p>
                <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
                  read more ➡
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Grade 2 Courses
          </p>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {Datas2.map((data) => (
              <div key={data.id}>
                <img src={data.img2} alt="" />
                <p className="font-semibold text-sm py-2">{data.title2}</p>
                <p className="text-xs">{data.blog}</p>
                <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
                  read more ➡
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Grade 3 Courses
          </p>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {Datas3.map((data) => (
              <div key={data.id}>
                <img src={data.img3} alt="" />
                <p className="font-semibold text-sm py-2">{data.title3}</p>
                <p className="text-xs">{data.blog}</p>
                <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
                  read more ➡
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Grade 4 to 5 Courses
          </p>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {Datas4.map((data) => (
              <div key={data.id}>
                <img src={data.img4} alt="" />
                <p className="font-semibold text-sm py-2">{data.title4}</p>
                <p className="text-xs">{data.blog}</p>
                <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
                  read more ➡
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
          <p className="p-4 text-2xl font-semibold text-gray-900">
            Grade 4 to 5 Courses
          </p>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {Datas.map((data) => (
              <div key={data.id}>
                <img src={data.img} alt="" />
                <p className="font-semibold text-sm py-2">{data.title}</p>
                <p className="text-xs">{data.blog}</p>
                <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
                  read more ➡
                </button>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Course;
