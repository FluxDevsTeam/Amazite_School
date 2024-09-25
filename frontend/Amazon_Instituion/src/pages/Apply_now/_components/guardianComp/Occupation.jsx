import Header from '../Header';
import FormInput from '../FormInput';
const Occupation = () => {
  return (
    <div>
      <Header header="Occupation" />

      <FormInput
        // label="Relationship"
        type="text"
        name="relationship_to_student"
        placeholder="Doctor"
      />
    </div>
  );
};
export default Occupation;
