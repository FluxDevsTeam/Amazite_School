import FileSelect from './FileSelect';

const options = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];
const StudentGender = () => {
  return (
    <div>
      <FileSelect
        label="gender *"
        arr={options}
        name="student_gender"
        defaultVal={options[0]}
        placeholder="Select your gender"
      />
    </div>
  );
};
export default StudentGender;
