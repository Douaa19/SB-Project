function Input({ className, placeHolder, rightIcon, classIcon }) {
  return (
    <>
      <input type="text" className={className} placeholder={placeHolder} />
      {rightIcon && (
        <>
          <img src={rightIcon} alt="" className={classIcon} />
        </>
      )}
    </>
  );
}

export default Input;
