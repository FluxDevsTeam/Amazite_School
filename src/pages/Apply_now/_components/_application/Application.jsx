import FileSelect from '../FileSelect';
import FormInput from '../FormInput';
import Header from '../Header';

const programOptions = [
  { value: 'Science', label: 'Science' },
  { value: 'Arts', label: 'Arts' },
  { value: 'Business', label: 'Business' },
];

const levelOptions = [
  { value: 'Freshman', label: 'Freshman' },
  { value: 'Sophomore', label: 'Sophomore' },
  { value: 'Junior', label: 'Junior' },
  { value: 'Senior', label: 'Senior' },
];

const applicationTypeOptions = [
  { value: 'Re-Admission', label: 'Re-Admission' },
  { value: 'First-Timer', label: 'First-Timer' },
];

const Application = ({ formData, handleInputChange }) => {
  return (
    <div className="grid  md:grid-cols-2 gap-4">
      <FileSelect
        name="program"
        value={formData.program}
        onChange={handleInputChange}
        label="Program / Course"
        placeholder="Select a program"
        arr={programOptions} 
      />
      <FileSelect
        name="entry_level"
        value={formData.entry_level}
        onChange={handleInputChange}
        label="Entry Level"
        placeholder="Select your level"
        arr={levelOptions} 
      />
      <div className="">
        <Header header="Start Date" />
        <FormInput
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange} 
        />
      </div>
      <FileSelect
        name="application_type"
        value={formData.application_type}
        onChange={handleInputChange}
        label="Application Type"
        placeholder="Select application type"
        arr={applicationTypeOptions} 
      />
    </div>
  );
};

export default Application;
