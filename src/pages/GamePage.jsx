import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';
import LetterCard from '../components/ui/LetterCard';
import Modal from '../components/ui/Modal'; 
import { useAnagramGame } from '../hooks/useAnagramGame';

const GamePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWin, setIsWin] = useState(false);

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
    setIsModalOpen(false);
    if (action === 'menu') {
      navigate('/'); 
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
        <h2>{isWin ? "🎉 Перемога!" : "😔 Час вийшов!"}</h2>
        <p style={{ color: '#666', margin: '20px 0' }}>Що будемо робити далі?</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          <Button onClick={() => handleCloseModal('menu')} variant="outline">В меню</Button>
          <Button onClick={() => handleCloseModal('restart')}>Ще раз</Button>
        </div>
      </Modal>
    </>
  );
};

export default GamePage;