const Articles = () => {
  return (
    <div className="md:flex flex-wrap md:col-span-2 justify-between items-start w-full m-auto my-2">
      <div className="mr-10 flex-1 ">
        <img src="./img1.png" alt="" className="rounded-xl" />
      </div>
      <div className="flex-1 m-4 text-center md:text-left ">
        <p className="text-xl pb-4">Most recent Article </p>
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
