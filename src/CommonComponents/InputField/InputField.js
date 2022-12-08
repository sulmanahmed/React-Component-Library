import React from "react";
import PropTypes from "prop-types";

function InputField({ type, inputClass, placeHolder, handleChange, name }) {
  return (
    <input
      type={type}
      className={inputClass}
      placeholder={placeHolder}
      name={name}
      onChange={handleChange}
    />
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  inputClass: PropTypes.string,
  placeHolder: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
};

export default InputField;
