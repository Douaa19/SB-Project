function Input({ className, placeHolder, rightIcon, classIcon }) {
  return (
    <div className="flex flex-row relative items-center">
      <input type="text" className={className} placeholder={placeHolder} />
      {rightIcon && (
        <>
          <img src={rightIcon} alt="" className={classIcon} />
        </>
      )}
    </div>
  );
}

export default Input;
