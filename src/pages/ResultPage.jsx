import React from 'react';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';

const ResultPage = ({ onRestart, isWin }) => {
  return (
    <GameLayout title={isWin ? "Перемога!" : "Гру завершено"}>
      <p style={{ fontSize: '1.2rem' }}>
        {isWin 
          ? "Ви чудово впоралися зі словом!" 
          : "На жаль, час вийшов або спроби закінчилися."}
      </p>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={onRestart}>Грати знову</Button>
      </div>
    </GameLayout>
  );
};

export default ResultPage;