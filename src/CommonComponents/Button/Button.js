import React from "react";
import PropTypes from "prop-types";

function Button({ btnClass, text, handler, type }) {
  return (
    <button type={type} className={`${btnClass}`} onClick={handler}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  btnClass: PropTypes.string,
  handler: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
