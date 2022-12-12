import React, { useState } from "react";
import InputField from "../../CommonComponents/InputField/InputField";
import TextArea from "../../CommonComponents/TextArea/TextArea";
import PropTypes from "prop-types";
import "./TestComponent.css"

function TestComponent({handleChange}) {

  return (
    <>
      <div>
        <InputField
          type="text"
          inputClass="form-control m-2"
          placeHolder="Enter Name"
          handleChange={handleChange}
          name="name"
        />

        <TextArea inputClass="form-control m-2" rows="3" handleChange={handleChange} />
        <div className="App-Section"> hello how are you</div>
      </div>
    </>
  );
}

TestComponent.propTypes = {
    handleChange: PropTypes.func,

  };
  

export default TestComponent;
