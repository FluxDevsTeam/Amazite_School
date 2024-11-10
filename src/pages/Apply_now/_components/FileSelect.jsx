import Select from 'react-select';

const FileSelect = ({ arr, name, label, placeholder, value, onChange }) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      borderRadius: '10px',
      padding: '4px 4px',
    }),
    menu: (base) => ({
      ...base,
      zIndex: '1000',
    }),
    option: (base, state) => ({
      ...base,
      '&:hover': {
        backgroundColor: '#ccfbf19b',
        color: '#2FCFB7',
      },
      backgroundColor: state.isSelected ? '#ccfbf134' : 'inherit',
      color: state.isSelected ? '#82D5DC' : 'inherit',
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: '14px',
    }),
  };

  // Handle the change event for react-select
  const handleSelectChange = (selectedOption) => {
    // Call the onChange function passed from the parent (StudentGender)
    onChange({
      target: {
        name: name,
        value: selectedOption ? selectedOption.value : '', // Update with selected value or empty string
      },
    });
  };

  // Find the selected option in the arr array to pass as the value for react-select
  const selectedOption = arr.find((option) => option.value === value);

  return (
    <div className="flex flex-col max-w-[464px] w-full gap-3">
      <label
        htmlFor={name}
        className="capitalize font-semibold text-lg text-[#222222]"
      >
        {label}
      </label>
      <div className="md:border-[0.5px] border-0 border-b focus-within:border-[#82D5DC] border-solid border-[#00000080] rounded-[10px]">
        <Select
          name={name}
          value={selectedOption} // Pass the selected option object
          onChange={handleSelectChange} // Handle the select change
          options={arr}
          styles={customStyles}
          placeholder={placeholder}
          isClearable
          required
        />
      </div>
    </div>
  );
};

export default FileSelect;
