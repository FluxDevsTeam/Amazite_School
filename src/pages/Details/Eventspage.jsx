import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SocialIcons from '../../components/SocialIcons';

export default function Eventspage(){
    const { id } = useParams();
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://amaziteacademy.pythonanywhere.com/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched data:", data); 
        setData(data);  
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch data:', err); 
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchData();
    }, [id]);

    return (
        <div className='w-full h-full   mt-16'>
          <div className='flex flex-col items-center justify-center'>
          <h1 className='md:text-[55px] text-[24px] md:leading-[67px] leading-[30px] font-semibold text-gray-600'>Students Performance</h1>
          <div className='flex space-x-8 p-8 text-[12px] md:text-[20px]'><img src={data.image_url} alt={data.title || "Image"} className='w-[56px] h-[56px] border rounded-full '/><p className='pt-4 '>John Birmigham</p><p className='pt-4'>24th March 2020</p></div>
          </div>
          <div>
          
  {data ? (
    

        <div key={data.id} className='flex flex-col items-center justify-center'>
          <img src={data.image_url} alt={data.title || "Image"} className='w-[900px] h-[450px] m-6  md:border md:rounded-lg'/>
          <div className='md:w-[50%] mx-auto m-12 md:border md:rounded-lg p-6'>{data.body}
         <div className='flex space-x-6  my-6'> <img src={data.image_url} alt={data.title || "Image"} className='w-[56px] h-[56px] border rounded-full'/>  
         <div className='pt-2 space-y-2'>
          <p className='md:text-[26px] text-[14px] '>John Birmingham</p>
          <p className='md:text-[15px] text-[14px] '>Principal at AIA</p>
         </div>
         </div>
          </div>
          <div className='md:my-8 space-y-4'><h1>Join the conversation</h1>
          <div className='flex space-x-8  '><img src={data.image_url} alt={data.title || "Image"} className='w-[56px] h-[56px] border rounded-full'/> 
           <textarea placeholder='comment....'   className='md:w-[623px] md:h-[130px] border border-gray-500 p-4'/>
          </div>
          </div>
        </div>
      
   ) : (
        <p>No data available</p> 
      )}

</div>
<SocialIcons
        className="flex gap-5 text-[35px] my-10 items-center justify-center"
        imgClassName="w-[35px] h-[35px]"
      />
        </div>
    )
}