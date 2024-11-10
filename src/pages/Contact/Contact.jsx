import SocialIcons from "../../components/SocialIcons";

const Contact = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className='text-4xl text-teal-600 my-8'>Contact</h1>
      <h2 className="px-6">If you have any concerns or questions please fill this form below :</h2>
      <div className="md:w-[85%] w-full p-8 mx-auto flex flex-col md:mt-[6rem] mt-6 border border-neutral-300 space-y-6 font-inter">
              
              <p className="font-medium text-[23px] leading-[27px] md:pl-12 md:py-8  py-4">Contact form</p>

              <form className="flex flex-col md:px-12 " >
    <div className="flex flex-col space-y-2 md:pb-12 pb-6 ">
      <label htmlFor="name" className="font-semibold text-[16px] leading-[21px]">Full Name <span className='text-red-500'>*</span></label>
      <input
        type="text"
        id="name"
        className="  bg-white border rounded-lg   focus:outline-none md:h-[57px] md:text-[18px] md:w-[960px] text-[16px] p-4"
      />
      
    </div>

    <div className="flex flex-col space-y-2 md:pb-12 pb-6  w-full max-w-[500px]">
      <label htmlFor="email" className="font-semibold text-[16px] leading-[21px]">Email <span className='text-red-500'>*</span></label>
      <input
        type="email"
        id="email"
       
        className="bg-white border rounded-lg  md:w-[960px]  focus:outline-none md:h-[57px] md:text-[18px] text-[16px] p-4 "
      />

    </div>


    <div className="flex flex-col space-y-2 md:pb-12 pb-6 w-full max-w-[500px]">
      <label htmlFor="message" className="font-semibold text-[16px] leading-[21px]">Message <span className='text-red-500'>*</span></label>
      <textarea
   
        className="md:h-[250px] h-[150px] bg-white border rounded-lg   focus:outline-none md:h-[238px]  md:w-[960px] md:text-[18px] text-[16px] p-4"
      />
      
    </div>

    <button
      type="submit"
      className="mx-auto bg-[#ECB9BA] hover:bg-[#ecb9baea] text-black w-[200px] md:w-[300px] md:my-12 h-[64px] text-[20px] border-none rounded-lg p-2 "
    >
      Send
    </button>
  </form>            
          </div>
          <SocialIcons
        className="flex gap-5 text-[35px] my-10 items-center justify-center"
        imgClassName="w-[35px] h-[35px]"
      />
    </div>
  );
};
export default Contact;
