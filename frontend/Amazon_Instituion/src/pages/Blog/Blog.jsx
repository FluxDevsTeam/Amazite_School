import Articles from "./Articles";
import Events from "./Events";
import News from "./news";
import Socials from "./socials";
import Datas from "./data/data";
const Blog = () => {
  return (
    <div className="w-10/12 m-auto my-10">
      <div className="text-center tracking-wide leading-10">
        <div className="text-xl text-teal-600 ">
          {" "}
          Blog: User stories and student perfomance{" "}
        </div>
        <p>subscribe to our news letter to see latest news</p>
      </div>
      <div className="text-center w">
        <input
          className="p-2 mr-2 mb-2  rounded-lg border"
          type="email"
          placeholder="Enter email address"
        />
        <button className="bg-teal-600 text-white p-1 my- px-2 rounded-md">
          Enter
        </button>
      </div>
      <Articles />
      <Events />
      <News />
      <Socials />

      {/* <div className="text-8xl text-teal-600 flex items-center justify-center">
        Blog
      </div> */}
    </div>
  );
};
export default Blog;
