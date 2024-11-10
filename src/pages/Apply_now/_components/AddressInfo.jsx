import FormInput from './FormInput';
import Header from './Header';

const AddressInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <Header header="Address Information *" />
      <div className="grid md:grid-cols-2 gap-4 ">
        <FormInput
          label="Street Address"
          type="text"
          name="address_of_student"
          value={formData.address_of_student}
          onChange={handleInputChange}
          placeholder="Bock 10, Lagos Nigeria"
        />

        <FormInput label="State" type="text" name="studentState" placeholder="Lagos"
         value={formData.studentState} onChange={handleInputChange}/>
      </div>
    </div>
  );
};
export default AddressInfo;
