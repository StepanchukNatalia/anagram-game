import React, { useState } from 'react';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';
import LetterCard from '../components/ui/LetterCard';

const GamePage = ({ onFinish }) => {
  const scrambledWord = ['А', 'М', 'Р', 'Г', 'А', 'Н', 'А']; 
  const [currentInput, setCurrentInput] = useState('');

  return (
    <GameLayout title="Вгадайте слово">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {scrambledWord.map((char, index) => (
          <LetterCard key={index} letter={char} />
        ))}
      </div>

      <input 
        type="text" 
        placeholder="Ваша відповідь..." 
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />

      <div>
        <Button onClick={() => console.log('Підказка')}>Підказка</Button>
        <Button onClick={() => onFinish(true)}>Перевірити</Button> 
      </div>
      
       <div style={{marginTop: '20px', fontSize: '12px', color: '#888'}}>
        <button onClick={() => onFinish(false)}>
           (DEV: Примусово завершити гру)
        </button>
      </div>
    </GameLayout>
  );
};

export default GamePage;