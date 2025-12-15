import React from 'react';

const GameLayout = ({ children, title }) => {
  const style = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    color: '#333'
  };

  return (
    <div style={style}>
      {title && <h1>{title}</h1>}
      <main>{children}</main>
    </div>
  );
};

export default GameLayout;