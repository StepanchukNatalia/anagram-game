import React from 'react';

const LetterCard = ({ letter, status = 'default' }) => {
  const style = {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #ccc',
    borderRadius: '4px',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 5px',
    backgroundColor: status === 'selected' ? '#e0e0e0' : 'white',
    color: '#333'
  };

  return <div style={style}>{letter}</div>;
};

export default LetterCard;