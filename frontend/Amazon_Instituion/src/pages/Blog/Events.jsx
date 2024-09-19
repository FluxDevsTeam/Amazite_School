import Datas from "./data/data";

const Events = () => {
  return (
    <div>
      <div className="text-4xl my-6"> Events and Award </div>
      <div className="grid grid-cols-3 gap-4 ">
        {Datas.map((data) => (
          <div className="m-1 p-2 shadow-lg" key={data.id}>
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
  );
};

export default Events;
