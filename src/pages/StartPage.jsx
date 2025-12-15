import React from 'react';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';

const StartPage = ({ onStart, onSettings }) => {
  return (
    <GameLayout title="Анаграми">
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#e0e7ff' }}>
        Спробуйте розгадати зашифровані слова!
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '300px' }}>
        <Button onClick={onStart} variant="primary">Почати гру</Button>
    
      </div>
    </GameLayout>
  );
};

export default StartPage;