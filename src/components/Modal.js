import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="searchModal">
      <div className="searchModal-content">
        <h2 className="searchModal-content-title">Please enter valid coordinates.</h2>
        <div className="searchModal-content-subtitle">Foe Example:</div>
        <div className="searchModal-content-inputExample">Latitude : 45.23</div>
        <div className="searchModal-content-inputExample">Longitude : 45.23</div>
        <div className="searchModal-content-btnWrpr">
          <button className="searchModal-content-closeBtn" onClick={() => closeModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
