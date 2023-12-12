import React from 'react';
import Modal from 'react-modal';

export function PopUp({ isOpen, onClose, content }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Add box-shadow
            transition: 'all 0.3s ease-in-out'
        },
    }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup"
      style={customStyles}
    >
      <div>
        <button id="review-quit" aria-label="Close" onClick={onClose}>
            <i className="fa fa-times"></i>
        </button>
        {content}
      </div>
    </Modal>
  );
};