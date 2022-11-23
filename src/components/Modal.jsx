import React from "react";

function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
