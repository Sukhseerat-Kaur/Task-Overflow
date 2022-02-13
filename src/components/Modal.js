import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="modal-bg fixed top-0 left-0 h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
      onClick={(e) => (onClose ? onClose() : "")}
    >
      <div
        className="modal bg-yellow-100 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
