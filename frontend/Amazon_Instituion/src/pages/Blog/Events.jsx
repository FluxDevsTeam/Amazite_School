import Datas from "./data/data";

const Events = () => {
  return (
    <div>
      <div className="text-4xl my-6"> Events and Award </div>
      <div className="grid grid-cols-3 gap-4 ">
        {Datas.map((data) => (
          <div className="m-1" key={data.id}>
            <img src={data.img} alt="" />
            <p className="font-semibold text-sm py-2">{data.title}</p>
            <p className="text-xs">{data.blog}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
