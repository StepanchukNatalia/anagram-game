import React from 'react';

const GameLayout = ({ children, title }) => {
  return (
    <div className="glass-panel">
      {title && <h1>{title}</h1>}
      <main style={{ 
        marginTop: '30px', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        {children}
      </main>
    </div>
  );
};

export default GameLayout;