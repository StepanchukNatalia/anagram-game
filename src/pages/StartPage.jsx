import React from 'react';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';

const StartPage = ({ onStart }) => {
  return (
    <GameLayout title="Анаграми">
      <p>Спробуйте розгадати зашифровані слова!</p>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={onStart}>Почати гру</Button>
      </div>
    </GameLayout>
  );
};

export default StartPage;