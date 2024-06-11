

import React, { useRef } from 'react';

const Modal = ({ isOpen, onClose }) => {
 
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={onClose}>Close</button>
            <h2>Modal Title</h2>
            <p  >This is the content of the modal.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
