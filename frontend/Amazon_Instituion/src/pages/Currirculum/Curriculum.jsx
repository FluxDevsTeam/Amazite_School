import Bottom from "./bottom";
import Course from "./Course";

const Curriculum = () => {
  return (
    <div className="text-xl text-teal-600 my-10 w-11/12 m-auto">
      <div className="text-2xl font-semibold text-teal-600 my-6 text-center ">
        Welcome to Our Elementary School Curriculum!
      </div>
      <div className="md:flex flex-wrap md:col-span-2 justify-between items-center w-full m-auto my-2 ">
        <div className="mx-4 flex justify-center lg:flex-1 ">
          <img
            className="rounded-lg shadow-md relative"
            src="img14.png"
            alt=""
          />
          {/* <p className="absolute top-[300px] bg-blue-50 b">hhhhh</p> */}
        </div>
        <div className="flex-1 my-4 m-auto w-3/4 lg:text-4xl text-center md:text-left">
          <h4 className="text-red-400">At Amazite Int' Academy</h4>
          <p className="text-lg lg:text-4xl ">
            Our Curriculum for Kindergarten through Grade % covers a diverse
            range of subjects build a solid foundation and prepare for the
            future academic success
          </p>
        </div>
      </div>
      <Course />
      <Bottom />
    </div>
  );
};
export default Curriculum;
