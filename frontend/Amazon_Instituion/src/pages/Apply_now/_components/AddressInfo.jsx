import FormInput from './FormInput';
import Header from './Header';

const AddressInfo = () => {
  return (
    <div>
      <Header header="Address Information *" />
      <div className="grid md:grid-cols-2 gap-4 ">
        <FormInput
          label="Street Address"
          type="text"
          name="street_address"
          placeholder="Bock 10, Lagos Nigeria"
        />

        <FormInput label="State" type="text" name="state" placeholder="Lagos" />
      </div>
    </div>
  );
};
export default AddressInfo;
