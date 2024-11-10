import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Events = () => {
  const [datas, setDatas] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://amaziteacademy.pythonanywhere.com/api/event-list/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Fetched data:", data); 
      setDatas(data);  
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch data:', err); 
      setError('Failed to fetch data');
      setLoading(false);
    }
  };
  const navigate = useNavigate();
  const eventDetails = (id) => {
    navigate(`/Eventspage/${id}`);
  }

  return (
    <div>
      <div className="text-4xl my-6">Events and Awards</div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {datas && datas.data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {datas.data.map((data) => (
            <div
              className="m-1 shadow-lg transition hover:scale-105 duration-500 cursor-pointer"
              key={data.id}
              onClick={() => eventDetails(data.id)}
            >
              <img src={data.image_url} alt="" />
              <div className="p-2">
                <p className="font-semibold text-sm py-2">{data.title}</p>
                <p className="text-xs">{data.body}</p>
                <button className="bg-teal-400 rounded-md my-2 p-2 text-xs"   >
                  Read more ➡
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!datas && !loading && !error && (
        <p>No data available at the moment.</p>
      )}
    </div>
  );
};

export default Events;
