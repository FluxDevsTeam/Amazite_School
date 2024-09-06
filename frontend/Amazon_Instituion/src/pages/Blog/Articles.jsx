const Articles = () => {
  return (
    <div className="flex justify-between items-center w-full m-auto my-10">
      <div className="mr-10 flex-1 ">
        <img className="" src="./img1.png" alt="" />
      </div>
      <div className="flex-1 ">
        <p className="text-xl pb-4">Most recent Article</p>
        <p className="text-red-400 text-xl pb-2">A Peek into AIA</p>
        <p>
          A closer look at the city of Paris's rich history, art, and visual
          culture, through Harvard University’s trove of resources.
        </p>
        <p className="text-red-400 text-xl py-2">A Peek into AIA</p>
        <p>
          A closer look at the city of Paris's rich history, art, and visual
          culture, through Harvard University’s trove of resources.
        </p>
      </div>
    </div>
  );
};

export default Articles;
