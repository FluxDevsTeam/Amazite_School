import FileSelect from '../FileSelect';
import FormInput from '../FormInput';
import Header from '../Header';

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

const Application = () => {
  return (
    <div className="grid  md:grid-cols-2 gap-4">
      <FileSelect
        name="program_course"
        label="program / course"
        placeholder="Science"
        arr={options}
      />
      <FileSelect
        name="entry_level"
        label="entry level"
        placeholder="Freshman"
        arr={options}
      />
      <div className="">
        <Header header="Start Date" />
        <FormInput type="date" name="start_date" />
      </div>
      <FileSelect
        name="application_type"
        label="Application Type"
        placeholder="Re-Admission"
        arr={options}
      />
    </div>
  );
};
export default Application;
