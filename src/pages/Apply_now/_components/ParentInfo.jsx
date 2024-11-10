import {
  ContactInfo,
  PersonalInfo,
  Occupation,
  Relationship,
  GuardianGender,
} from './guardianComp';
const ParentInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <header className=" w-full mb-4">
        <h1 className="font-semibold text-[#222222] text-2xl  md:text-4xl kanit">
          Parent/Guardian Information
        </h1>
      </header>
      <div className="flex flex-col gap-4">
        <PersonalInfo formData={formData} handleInputChange={handleInputChange} />
        <GuardianGender formData={formData} handleInputChange={handleInputChange} />
        <Relationship formData={formData} handleInputChange={handleInputChange} />
        <ContactInfo formData={formData} handleInputChange={handleInputChange} />
        <Occupation formData={formData} handleInputChange={handleInputChange} />
      </div>
    </div>
  );
};
export default ParentInfo;
