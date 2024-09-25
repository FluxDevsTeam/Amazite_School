import Header from '../Header';
import FormInput from '../FormInput';
const Relationship = () => {
  return (
    <div>
      <Header header="Relationship to student *" />

      <FormInput
        // label="Relationship"
        type="text"
        name="relationship_to_student"
        placeholder="Mother"
      />
    </div>
  );
};
export default Relationship;
