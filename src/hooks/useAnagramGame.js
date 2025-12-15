import { useState, useEffect, useCallback } from 'react';
import { WORDS } from '../constants/words';
import { shuffleString } from '../utils/shuffle';

export const useAnagramGame = (onGameFinish) => {
  const [currentWordObj, setCurrentWordObj] = useState(null);
  const [scrambledLetters, setScrambledLetters] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [isHintUsed, setIsHintUsed] = useState(false);

  const startNewRound = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    const selected = WORDS[randomIndex];
    
    setCurrentWordObj(selected);
    setScrambledLetters(shuffleString(selected.original));
    setInputValue('');
    setMessage('');
    setIsHintUsed(false);
  }, []);

  useEffect(() => {
    startNewRound();
  }, [startNewRound]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
    setMessage(''); 
  };

  const checkAnswer = () => {
    if (!currentWordObj) return;

    if (inputValue === currentWordObj.original) {
      onGameFinish(true);
    } else {
      setMessage('Невірно! Спробуйте ще раз.');
    }
  };

  const showHint = () => {
    if (currentWordObj) {
      setMessage(`Підказка: ${currentWordObj.hint}`);
      setIsHintUsed(true);
    }
  };

  return {
    scrambledLetters,
    inputValue,
    message,
    isHintUsed,
    handleInputChange,
    checkAnswer,
    showHint,
    restart: startNewRound 
  };
};