import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    color: '#333',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
  };

  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {children}
      </div>
    </div>,
    document.body 
  );
};

export default Modal;