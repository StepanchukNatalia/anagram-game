import React from 'react';
const Button = ({ children, onClick, variant = 'primary', disabled = false }) => {
  const style = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: variant === 'primary' ? '#646cff' : '#535bf2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    opacity: disabled ? 0.6 : 1,
    margin: '5px'
  };

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;