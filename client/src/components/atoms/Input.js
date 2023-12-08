function Input({
  className,
  placeHolder,
  rightIcon,
  classIcon,
  name,
  onIconClick,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-row relative items-center">
      <input
        type="text"
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
    </div>
  );
}

export default Input;
