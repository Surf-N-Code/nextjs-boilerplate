const FormInput = ({
  handleChange,
  placeholder,
  value,
  type,
  name,
  children,
}) => (
  <div className="flex items-center border-2 border-grey-200 rounded-2xl">
    <div className="z-20">{children}</div>
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full py-4 rounded-xl pl-[60px] -ml-[60px] z-10"
      placeholder={placeholder}
    />
  </div>
);

export default FormInput;
