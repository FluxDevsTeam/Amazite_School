const FormInput = ({ label, type, name, require, placeholder }) => {
  return (
    <div className="flex flex-col max-w-[464px] w-full gap-3">
      <label htmlFor={name} className=" text-lg text-[#222222]">
        {label}
      </label>
      <div className="md:border-[0.5px] border-0 border-b focus-within:border-[#82D5DC] border-solid border-[#00000080] rounded-[10px]">
        <input
          type={type}
          name={name}
          id={name}
          className="outline-none px-2 py-3 bg-transparent w-full text-sm text-[#444444f1]"
          placeholder={placeholder}
          required={require}
        />
      </div>
    </div>
  );
};
export default FormInput;
