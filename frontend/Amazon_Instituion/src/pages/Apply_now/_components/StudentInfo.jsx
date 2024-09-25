import {
  StudentGender,
  PersonalInfo,
  DOB,
  ContactInfo,
  AddressInfo,
  Language,
} from '.';
const StudentInfo = () => {
  return (
    <div>
      <header className="text-left mb-4 w-full">
        <h1 className="font-semibold text-2xl md:text-4xl kanit">
          Student application form
        </h1>
      </header>
      <div className="flex flex-col gap-4">
        <PersonalInfo />
        <StudentGender />
        <DOB />
        <ContactInfo />
        <AddressInfo />
        <Language />
      </div>
    </div>
  );
};
export default StudentInfo;
