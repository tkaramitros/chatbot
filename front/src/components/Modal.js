import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        
        <div className="body-form">
        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="defaultForm-email" class="form-control validate"/>
          <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
        </div>
        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="password" id="defaultForm-pass" class="form-control validate"/>
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
        </div>
        </div>
        <div className="footer-form">
          
          <button className="loginbtn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;