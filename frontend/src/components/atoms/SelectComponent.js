import React, { useState } from "react";
import Select, { components } from "react-select";

function SelectComponent(props) {
  const [isFocused, setIsFocused] = useState(false);

  const customOptionRenderer = ({ data, ...rest }) => {
    return (
      <components.Option {...rest}>
        <div className="dropdown-select-inner__option-container">
          <span className="dropdown-select-inner__label">{data.label}</span>
        </div>
      </components.Option>
    );
  };

  const handleChange = (value) => {
    props.onChange(value.value);
  };

  const handleBlur = () => {
    const optionElements = document.querySelectorAll(
      ".dropdown-select-inner__option"
    );

    optionElements.forEach((option) => {
      option.classList.remove("dropdown-select-inner__option--is-focused");
    });
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div
      className={`mt-1 dropdown-select ${isFocused ? "dropdown-focused" : ""} ${
        props.error ? "input-error" : ""
      }`}>
      <Select
        options={props.data}
        components={{ Option: customOptionRenderer }}
        classNamePrefix="dropdown-select-inner"
        className={`flex relative w-full flex-start ${
          props.error ? "flex-col" : "flex-row"
        }`}
        placeholder=""
        onChange={handleChange}
        error={props.error}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {props.error && (
        <>
          <span className="text-red leading-[0px] md:text-12 ssm:text-10 relative left-1">
            {props.error}
          </span>
        </>
      )}
    </div>
  );
}

export default SelectComponent;
