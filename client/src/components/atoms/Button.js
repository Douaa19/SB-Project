import React from "react";

function Button({ className, rightIcon, type, text, onClick }) {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}>
        {text}
        {rightIcon ? rightIcon : ""}
      </button>
    </>
  );
}

export default Button;
