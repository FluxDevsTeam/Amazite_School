import FormInput from './FormInput';
import Header from './Header';

const DOB = ({ formData, handleInputChange }) => {
  return (
    <div>
      <Header header="Date of Birth *" />
      <FormInput
        label="Date of birth"
        type="date"
        placeholder="02/05/06"
        name="studentDoB"
        value={formData.studentDoB}
        onChange={handleInputChange}
        require={true}
      />
    </div>
  );
};
export default DOB;
