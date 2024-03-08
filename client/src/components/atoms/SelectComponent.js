import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";

function SelectComponent(props) {
  const { location, onChange } = props;
  const [placeholder, setPlacehoder] = useState("");
  const [subLocation, setSubLocation] = useState(location);

  const handleChange = (value) => {
    setPlacehoder(value?.label || "");
    setSubLocation(value?.value || "");
    onChange(value?.value || "");
  };

  useEffect(() => {
    if (placeholder === "") {
      setSubLocation("");
    }

    if (props.defaultValue) {
      setSubLocation(props.defaultValue.value);
      setPlacehoder(props.defaultValue.label);
    }
  }, []);

  return (
    <>
      <Select
        options={props.cities}
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
