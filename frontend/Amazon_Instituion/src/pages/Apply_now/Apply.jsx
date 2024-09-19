import { ApplicationDetails, ParentInfo, StudentInfo } from './_components';

const Apply = () => {
  return (
    <section className="w-full px-2 py-2  md:px-5 lg:px-12 md:py-10 ">
      <form
        className="bg-[#FFFFFF61] rounded-xl px-6 py-8 flex flex-col gap-14"
        style={{ boxShadow: '0px 2.86px 2.86px 0px #00000040' }}
      >
        <StudentInfo />
        <ParentInfo />
        <ApplicationDetails />
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="bg-[#ECB9BA] w-full max-w-[300px] hover:bg-[#ecb9bab6] duration-500 text-[#363F40]  rounded-[10px] roboto text-sm md:text-lg py-2 font-medium px-4"
            style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          >
            Submit Form
          </button>
        </div>
      </form>
    </section>
  );
};
export default Apply;
