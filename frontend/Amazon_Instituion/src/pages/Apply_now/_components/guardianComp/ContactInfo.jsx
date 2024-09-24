import FormInput from '../FormInput';
import Header from '../Header';

const ContactInfo = () => {
  return (
    <div>
      <Header header="Contact Information *" />
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput
          type="text"
          label="Phone Number"
          placeholder="+234 903 657 8466"
          name="phone_number"
          require={true}
        />

        <FormInput
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          type="email"
          require={true}
        />
      </div>
    </div>
  );
};
export default ContactInfo;
