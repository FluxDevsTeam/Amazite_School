import Application from './_application/Application';

const ApplicationDetails = ({ formData, handleInputChange }) => {
  return (
    <div>
      <header className=" w-full mb-4">
        <h1 className="font-semibold text-[#222222] text-2xl  md:text-4xl kanit">
          Application Details
        </h1>
      </header>
      <div className="">
        <Application formData={formData} handleInputChange={handleInputChange} />
      </div>
    </div>
  );
};
export default ApplicationDetails;
