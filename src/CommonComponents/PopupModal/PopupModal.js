import React from "react";
import PropTypes from "prop-types";
import CustomButton from "../CustomButton/CustomButton";
function PopupModal({ children, handleClose, title, show, handleSave,modalClass }) {
  return (
    <div className={show ? "modal d-block" : "modal"} tabindex="-1">
      <div className= {show ? `${modalClass} modal-dialog` : `${modalClass} modal-dialog`} >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button> */}

            <div>
              <CustomButton
                type="button"
                text=  "Save"
                handler={handleSave}
                btnClass="btn btn-success"
              />{" "}
            </div>
            <div>
              <CustomButton
                type="button"
                text="Cancel"
                handler={handleClose}
                btnClass="btn btn-secondary"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PopupModal.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  show: PropTypes.bool,
  handleSave: PropTypes.func,
  modalClass:PropTypes.string
};

export default PopupModal;
