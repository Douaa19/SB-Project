import React from "react";

function Button({ className, rightIcon, type, text, onClick, textClass }) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {textClass ? <span className={`${textClass}`}>{text}</span> : { text }}
        {rightIcon ? rightIcon : ""}
      </button>
    </>
  );
}

export default Button;
