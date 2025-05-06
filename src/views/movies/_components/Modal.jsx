import React from 'react';

const Modal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-neutral-content p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-bold text-base-300 bold mb-4">Confirm reservation</h2>
        <p className='text-base-200' >Are you sure you want to reserv the selected seat(s)?</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="btn bg-error text-error-content border-none" onClick={onClose}>Cancel</button>
          <button className="btn bg-success text-success-content border-none" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
