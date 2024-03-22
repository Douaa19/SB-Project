function Input(props) {
  return (
    <div
      className={`flex relative w-full flex-start ${
        props.error ? "flex-col" : "flex-row"
      }`}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className={props.className}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        min={props.type === "number" && "0"}
        autoComplete="off"
      />
      {props.rightIcon && (
        <>
          <img
            src={props.rightIcon}
            alt="icon"
            className={props.classIcon}
            onClick={props.onIconClick}
          />
        </>
      )}
      {props.passwordIcon && (
        <button
          className={`${props.iconStyle ? props.iconStyle : ""}`}
          type="button"
          onClick={props.IconClickEvent ? props.IconClickEvent : () => {}}>
          <div className="">{props.passwordIcon}</div>
        </button>
      )}
      {props.error && (
        <>
          <span className="text-red md:text-12 ssm:text-10 relative left-3">
            {props.error}
          </span>
        </>
      )}
    </div>
  );
}

export default Input;
