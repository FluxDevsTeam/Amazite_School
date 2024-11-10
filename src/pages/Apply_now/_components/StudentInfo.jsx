import {
  StudentGender,
  PersonalInfo,
  DOB,
  ContactInfo,
  AddressInfo,
  Language,
} from '.';
const StudentInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <header className="text-left mb-4 w-full">
        <h1 className="font-semibold text-2xl md:text-4xl kanit">
          Student application form
        </h1>
      </header>
      <div className="flex flex-col gap-4">
        <PersonalInfo formData={formData} handleInputChange={handleInputChange} />
        <StudentGender formData={formData} handleInputChange={handleInputChange} />
        <DOB formData={formData} handleInputChange={handleInputChange} />
        <ContactInfo formData={formData} handleInputChange={handleInputChange} />
        <AddressInfo formData={formData} handleInputChange={handleInputChange} />
        <Language formData={formData} handleInputChange={handleInputChange} />
      </div>
    </div>
  );
};
export default StudentInfo;
