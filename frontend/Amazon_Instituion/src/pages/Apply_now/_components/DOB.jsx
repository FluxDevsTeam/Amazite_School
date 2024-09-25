import FormInput from './FormInput';
import Header from './Header';

const DOB = () => {
  return (
    <div>
      <Header header="Date of Birth *" />
      <FormInput
        label="Date of birth"
        type="date"
        placeholder="02/05/06"
        name="date_of_birth"
        require={true}
      />
    </div>
  );
};
export default DOB;
