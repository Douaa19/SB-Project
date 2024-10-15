import React from "react";

function Button({ className, rightIcon, type, text, onClick, textClass }) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        <span className={`${textClass ? textClass : ""}`}>{text}</span>
        {rightIcon ? rightIcon : ""}
      </button>
    </>
  );
}

export default Button;
