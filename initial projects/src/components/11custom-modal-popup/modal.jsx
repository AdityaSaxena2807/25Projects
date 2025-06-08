import React from "react";

function Modal({ id, body, header, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header">
          <span className="onClose" onClick={onClose}>&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Modal body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}

export default Modal;
