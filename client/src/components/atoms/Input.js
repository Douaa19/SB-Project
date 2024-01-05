function Input({
  className,
  placeHolder,
  rightIcon,
  classIcon,
  name,
  onIconClick,
  value,
  onChange,
  type,
  error,
}) {
  return (
    <div
      className={`flex relative w-full ${
        error ? "text-red" : "flex-row items-center"
      }`}>
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        placeholder={placeHolder}
        onChange={onChange}
      />
      {rightIcon && (
        <>
          <img
            src={rightIcon}
            alt="icon"
            className={classIcon}
            onClick={onIconClick}
          />
        </>
      )}
      {error && (
        <>
          <span className="md:text-12 ssm:text-10 absolute md:top-10 ssm:top-9 left-3">
            {error}
          </span>
        </>
      )}
    </div>
  );
}

export default Input;
