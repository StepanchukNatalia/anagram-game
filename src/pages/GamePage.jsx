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
    isHintUsed
  } = useAnagramGame(onFinish);

  return (
    <GameLayout title="Вгадайте слово">
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '30px' }}>
        {scrambledLetters.map((char, index) => (
          <LetterCard key={index} letter={char} />
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Введіть слово..." 
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && checkAnswer()} 
          style={{ 
            padding: '12px', 
            fontSize: '18px', 
            textAlign: 'center', 
            letterSpacing: '2px',
            textTransform: 'uppercase',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '80%'
          }}
        />
      </div>

      <div style={{ minHeight: '30px', color: message.startsWith('Невірно') ? 'salmon' : '#4caf50', marginBottom: '20px', fontWeight: 'bold' }}>
        {message}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button 
          onClick={showHint} 
          disabled={isHintUsed} 
          variant="secondary"
        >
          Підказка
        </Button>
        
        <Button onClick={checkAnswer}>
          Перевірити
        </Button>
      </div>

    </GameLayout>
  );
};

export default GamePage;