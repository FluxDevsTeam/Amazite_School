import FileSelect from '../FileSelect';

const options = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];

const GuardianGender = ({ formData, handleInputChange }) => {
  return (
    <div>
      <FileSelect
        label="Gender *"
        arr={options}
        name="gender_of_parent"
        value={formData.gender_of_parent}
        onChange={handleInputChange}
        placeholder="Select your gender"
      />
    </div>
  );
};
export default GuardianGender;
