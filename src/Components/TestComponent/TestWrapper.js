import React, { useState } from "react";
import Button from "../../CommonComponents/Button/Button";
import PopupModal from "../../CommonComponents/PopupModal/PopupModal";
import TestComponent from "./TestComponent";
import {styles} from "../../CommonComponents/Styles/Styles";

function TestWrapper() {
  const [openModal, setOpenModal] = useState(false);
  const handleCancel = () => {
    setOpenModal(false);
    console.log("cancle");
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleSave = () => {
    console.log("Save Clicked");
  };

  const handleChange = (data) => {

  
    console.log("handleChange", data);
  };

  return (
    <div>
             <h2 style={styles.Header}>Welcome To Generic Components</h2>
      <Button
        btnClass="btn btn-primary"
        text="openPopup"
        handler={handleOpen}
      />
      {openModal? <PopupModal handleClose={handleCancel} title = "Create Profile" modalClass = "" show = {openModal} handleSave = {handleSave}>
        <TestComponent handleChange = {handleChange}/>
      </PopupModal>:""
      
    
    }
      
    </div>
  );
}

export default TestWrapper;
