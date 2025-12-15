import React from 'react';

const LetterCard = ({ letter }) => {
  const style = {
    width: '65px',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
    color: '#333',
    borderRadius: '16px',
    fontSize: '32px',
    fontWeight: '800',
    boxShadow: '0 6px 10px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.5)',
    margin: '0 8px',
    textTransform: 'uppercase',
    userSelect: 'none',
    transform: 'perspective(500px) rotateX(5deg)',
    borderBottom: '6px solid #ccc'
  };

  return <div style={style}>{letter}</div>;
};

export default LetterCard;