import FormInput from './FormInput';
import Header from './Header';

const Language = ({ formData, handleInputChange }) => {
  return (
    <div>
      <Header header="Language" />
      <FormInput type="text" placeholder="English" label="Language" 
      name="language_of_student"
      value={formData.language_of_student}
      onChange={handleInputChange}/>
    </div>
  );
};
export default Language;
