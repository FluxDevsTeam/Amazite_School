import Header from '../Header';
import FormInput from '../FormInput';
const Occupation = ({ formData, handleInputChange }) => {
  return (
    <div>
      <Header header="Occupation" />

      <FormInput
        // label="Relationship"
        type="text"
        name="occupation_of_parent"
        value={formData.occupation_of_parent}
         onChange={handleInputChange}
        placeholder="Doctor"
      />
    </div>
  );
};
export default Occupation;
