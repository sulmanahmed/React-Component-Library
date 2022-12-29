import React from "react";
import PropTypes from "prop-types";

function CustomButton({
  btnClass,
  text,
  handler,
  type,
  customHeight,
  customWidth,
  disabled,
}) {
  return (
    <button
      disabled={disabled ? disabled : false}
      type={type}
      className={`${btnClass}`}
      onClick={handler}
      style={{
        height: customHeight ? `${customHeight}` : "40px",
        width: customWidth ? `${customWidth}` : "126px",
      }}
    >
      {text ? text : "Save"}
    </button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string,
  btnClass: PropTypes.string,
  handler: PropTypes.func,
  type: PropTypes.string,
};

export default CustomButton;
