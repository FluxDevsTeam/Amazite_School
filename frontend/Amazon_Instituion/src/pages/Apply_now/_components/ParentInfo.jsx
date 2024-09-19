import {
  ContactInfo,
  PersonalInfo,
  Occupation,
  Relationship,
  GuardianGender,
} from './guardianComp';
const ParentInfo = () => {
  return (
    <div>
      <header className=" w-full mb-4">
        <h1 className="font-semibold text-[#222222] text-2xl  md:text-4xl kanit">
          Parent/Guardian Information
        </h1>
      </header>
      <div className="flex flex-col gap-4">
        <PersonalInfo />
        <GuardianGender />
        <Relationship />
        <ContactInfo />
        <Occupation />
      </div>
    </div>
  );
};
export default ParentInfo;
