
import { useState } from "react";
import SocialIcons from "../../components/SocialIcons";
import Articles from "./Articles";
import Events from "./Events";
import News from "./News";

//import Articles from './Articles';
//import Events from './Events';
//import News from './news';
// import Socials from './socials';
// import Datas from './data/data';
//import SocialIcons from '../../components/SocialIcons';
// import Articles from './Articles';
// import Events from './Events';
// import News from './news';


const Blog = () => {
  const [email, setEmail] = useState();
  const submitEmail = (event) => {
    event.preventDefault();
    setEmail("");
  };

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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          onClick={submitEmail}
          className="bg-teal-600 text-white p-1 my- px-2 rounded-md"
        >
          Enter
        </button>
      </div>
      <Articles />
      <Events />
      <News />
      {/* <Socials /> */}

      {/* <div className="text-8xl text-teal-600 flex items-center justify-center">
        Blog
      </div> */}

      <SocialIcons
        className="flex gap-5 text-[35px] mt-10 items-center justify-center"
        imgClassName="w-[35px] h-[35px]"
      />
    </div>
  );
};
export default Blog;
