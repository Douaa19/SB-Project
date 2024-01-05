import React from "react";

function TextArea({ name, id, rows, className, value, onChange, text, error }) {
  return (
    <div className={`w-full relative ${error ? "text-red" : "text-dark"}`}>
      <textarea
        name={name}
        id={id}
        rows={rows}
        onChange={onChange}
        className={className}
        placeholder={text}
        value={value}
      />
      {error && (
        <>
          <span className="md:text-12 ssm:text-10 absolute md:top-10 ssm:top-9 left-3">
            {error}
          </span>
        </>
      )}
    </div>
  );
}

export default TextArea;
