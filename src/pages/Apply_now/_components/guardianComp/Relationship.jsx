import Header from '../Header';
import FormInput from '../FormInput';
const Relationship = ({ formData, handleInputChange }) => {
  return (
    <div>
      <Header header="Relationship to student *" />

      <FormInput
        // label="Relationship"
        type="text"
        name="relationship_to_student"
       value={formData.relationship_to_student}
       onChange={handleInputChange}
        placeholder="Mother"
      />
    </div>
  );
};
export default Relationship;
