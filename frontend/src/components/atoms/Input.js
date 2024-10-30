function Input(props) {
  return (
    <div
      className={`flex relative w-full flex-start ${
        props.error
          ? "flex-col"
          : `flex-row ${props.type === "radio" ? "w-max" : ""}`
      }`}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className={props.className}
        placeholder={props.placeHolder ? props.placeHolder : ""}
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
          <span className="text-red text-12 relative left-1">
            {props.error}
          </span>
        </>
      )}
    </div>
  );
}

export default Input;
