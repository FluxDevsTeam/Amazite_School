import FormInput from './FormInput';
import Header from './Header';

const PersonalInfo = () => {
  return (
    <div className="flex flex-col">
      <Header header="Personal Information *" />
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput
          name="gauarding_first_name"
          type="text"
          placeholder="Enter your first name"
          label="First name"
          require={true}
        />
        <FormInput
          name="guarding_last_name"
          type="text"
          placeholder="Enter your last name"
          label="Last name"
          require={true}
        />
      </div>
    </div>
  );
};
export default PersonalInfo;
