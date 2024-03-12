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
      className={`flex relative w-full flex-start ${
        error ? "flex-col" : "flex-row"
      }`}>
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        placeholder={placeHolder}
        onChange={onChange}
        min={type === "number" && "0"}
        autoComplete="off"
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
          <span className="text-red md:text-12 ssm:text-10 relative left-3">
            {error}
          </span>
        </>
      )}
    </div>
  );
}

export default Input;
