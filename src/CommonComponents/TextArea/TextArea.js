import React from "react";
import PropTypes from "prop-types";

function TextArea({ inputClass, rows,handleChange}) {
  return <textarea className={inputClass} rows={rows} onChange= {handleChange}/>
}

TextArea.propTypes = {
  rows: PropTypes.string,
  inputClass: PropTypes.string,
  handleChange:PropTypes.func
};

export default TextArea;
