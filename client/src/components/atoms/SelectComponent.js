import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";

function SelectComponent(props) {
  const handleChange = (value) => {
    console.log(value);
    props.onChange(value.value);
  };

  return (
    <>
      <Select
        options={props.data}
        classNamePrefix="dropdown-select"
        className={`${
          props.error ? "input-error dropdown-select" : "dropdown-select"
        }`}
        placeholder="city"
        onChange={handleChange}
        error={props.error}
      />
    </>
  );
}

export default SelectComponent;
