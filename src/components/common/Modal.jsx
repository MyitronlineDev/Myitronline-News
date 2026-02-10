import React from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-4 max-w-3xl w-full shadow-xl relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          className="absolute top-3 right-3 text-xl font-bold text-gray-700 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
