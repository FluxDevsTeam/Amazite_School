// import Select from 'react-select';
import { useState } from 'react';

const FileSelect = ({ arr, name, label, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      borderRadius: '10px',
      padding: '4px 4px',
    }),
    menu: (base, state) => ({
      ...base,
      zIndex: '1000',
      // Transition: 'all 2s linear',
    }),

    option: (base, state) => ({
      ...base,
      '&:hover': {
        backgroundColor: '#ccfbf19b',
        color: '#2FCFB7',
      },

      backgroundColor: state.isSelected ? '#ccfbf134' : 'inherit', // Style selected option
      color: state.isSelected ? '#82D5DC' : 'inherit',
    }),
    placeholder: (base, state) => ({
      ...base,

      fontSize: '14px',
    }),
  };

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
          onChange={setSelectedOption}
          options={arr}
          styles={customStyles}
          placeholder={placeholder}
          name={name}
          required
        />
      </div>
    </div>
  );
};
export default FileSelect;
