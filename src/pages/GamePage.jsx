import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';
import LetterCard from '../components/ui/LetterCard';
import Modal from '../components/ui/Modal';
import { useAnagramGame } from '../hooks/useAnagramGame';
import { useLeaderboardStore } from '../store/useLeaderboardStore';
import { useSettingsStore } from '../store/useSettingsStore';

const GamePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWin, setIsWin] = useState(false);
  
  const addRecord = useLeaderboardStore((state) => state.addRecord);
  const difficulty = useSettingsStore((state) => state.difficulty);

  const handleGameFinish = (winStatus) => {
    setIsWin(winStatus);
    setIsModalOpen(true);
  };

  const {
    scrambledLetters,
    inputValue,
    message,
    handleInputChange,
    checkAnswer,
    showHint,
    skipWord,
    isHintUsed,
    timeLeft, 
    restart
  } = useAnagramGame(handleGameFinish);

  const handleCloseModal = (action) => {
    if (isWin && action !== 'close') {
        const multipliers = { normal: 1, hard: 1.5, expert: 2 };
        const score = Math.round(timeLeft * (multipliers[difficulty] || 1));

        addRecord({
            date: new Date().toLocaleDateString(),
            difficulty,
            timeLeft,
            score
        });
    }

    setIsModalOpen(false);
    
    if (action === 'menu') {
      navigate('/');
    } else if (action === 'leaderboard') {
      navigate('/leaderboard');
    } else if (action === 'restart') {
      restart();
    }
  };

  return (
    <>
      <GameLayout title={`Час: ${timeLeft} сек`}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '30px', flexWrap: 'wrap' }}>
            {scrambledLetters.map((char, index) => <LetterCard key={index} letter={char} />)}
          </div>
        
          <div style={{ marginBottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <input type="text" className="game-input" placeholder="Введіть слово..." value={inputValue} onChange={handleInputChange} onKeyDown={(e) => e.key === 'Enter' && checkAnswer()} />
          </div>

          <div style={{ minHeight: '30px', color: message.startsWith('Невірно') ? 'salmon' : '#4caf50', marginBottom: '20px', fontWeight: 'bold' }}>{message}</div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <Button onClick={showHint} disabled={isHintUsed} variant="secondary">Підказка (-10с)</Button>
              <Button onClick={skipWord} variant="outline" style={{ borderColor: 'salmon', color: 'salmon' }}>Пропустити</Button>
              <Button onClick={checkAnswer}>Перевірити</Button>
          </div>
      </GameLayout>

      <Modal isOpen={isModalOpen}>
        <h2 style={{color: '#333'}}>{isWin ? "🎉 Перемога!" : "😔 Час вийшов!"}</h2>
        <p style={{ color: '#666', margin: '20px 0' }}>Що будемо робити далі?</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
          <Button onClick={() => handleCloseModal('menu')} variant="outline">Меню</Button>
          <Button onClick={() => handleCloseModal('leaderboard')} variant="outline">Рекорди</Button>
          <Button onClick={() => handleCloseModal('restart')}>Ще раз</Button>
        </div>
      </Modal>
    </>
  );
};

export default GamePage;