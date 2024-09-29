import Datas from './data/data';

const Events = () => {
  return (
    <div>
      <div className="text-4xl my-6"> Events and Award </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
        {Datas.map((data) => (
          <div
            className="m-1 shadow-lg transition hover:scale-105 duration-500 cursor-pointer"
            key={data.id}
          >
            <img src={data.img} alt="" />
            <div className="p-2">
              <p className="font-semibold text-sm py-2">{data.title}</p>
              <p className="text-xs">{data.blog}</p>
              <button className="bg-teal-400 rounded-md my-2 p-2 text-xs ">
                Read more ➡
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
