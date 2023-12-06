import React from "react";

function Button({ className, rightIcon, type, text }) {
  return (
    <div>
      <button type={type} className="">
        {text}
        {rightIcon}
      </button>
    </div>
  );
}

export default Button;
