import React from 'react';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';
import LetterCard from '../components/ui/LetterCard';
import { useAnagramGame } from '../hooks/useAnagramGame';

const GamePage = ({ onFinish }) => {
  const {
    scrambledLetters,
    inputValue,
    message,
    handleInputChange,
    checkAnswer,
    showHint,
    skipWord,
    isHintUsed,
    timeLeft
  } = useAnagramGame(onFinish);

  return (
    <GameLayout title={`Час: ${timeLeft} сек`}>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '30px', flexWrap: 'wrap' }}>
        {scrambledLetters.map((char, index) => (
          <LetterCard key={index} letter={char} />
        ))}
      </div>

      <div style={{ marginBottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <input 
          type="text" 
          className="game-input"
          placeholder="Введіть слово..." 
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
        />
      </div>

      <div style={{ minHeight: '30px', color: message.startsWith('Невірно') ? 'salmon' : '#4caf50', marginBottom: '20px', fontWeight: 'bold' }}>
        {message}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        
        <Button 
          onClick={showHint} 
          disabled={isHintUsed} 
          variant="secondary"
        >
          Підказка (-10с)
        </Button>

        <Button 
            onClick={skipWord} 
            variant="outline"
            style={{ borderColor: 'salmon', color: 'salmon' }}
        >
            Пропустити
        </Button>
        
        <Button onClick={checkAnswer}>
          Перевірити
        </Button>
      </div>

    </GameLayout>
  );
};

export default GamePage;