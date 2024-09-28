import Datas from './data/data';

const News = () => {
  return (
    <div>
      <div className="text-4xl mt-20 my-6"> News and Stories </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {Datas.map((data) => (
          <div
            className="m-1 p-2 shadow-md transition hover:scale-105 duration-500 cursor-pointer"
            key={data.id}
          >
            <img src={data.img} alt="" />
            <p className="font-semibold text-sm py-2">{data.title}</p>
            <p className="text-xs">{data.blog}</p>
            <button className="bg-teal-500 rounded-md my-2 p-2 text-xs ">
              read more ➡
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
