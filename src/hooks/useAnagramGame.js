import { useState, useEffect, useCallback } from 'react';
import { WORDS } from '../constants/words';
import { shuffleString } from '../utils/shuffle';
import { useSettingsStore } from '../store/useSettingsStore';

export const useAnagramGame = (onGameFinish) => {
  const timeLimit = useSettingsStore((state) => state.timeLimit);
  const difficulty = useSettingsStore((state) => state.difficulty);
  const allowHints = useSettingsStore((state) => state.allowHints);
  
  const [currentWordObj, setCurrentWordObj] = useState(null);
  const [scrambledLetters, setScrambledLetters] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [isHintUsed, setIsHintUsed] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startNewRound = useCallback(() => {
    const availableWords = WORDS.filter(w => w.level === difficulty);
    const pool = availableWords.length > 0 ? availableWords : WORDS;

    const randomIndex = Math.floor(Math.random() * pool.length);
    const selected = pool[randomIndex];
    
    setCurrentWordObj(selected);
    setScrambledLetters(shuffleString(selected.original));
    setInputValue('');
    setMessage('');
    setIsHintUsed(false);
    
    setTimeLeft(timeLimit);
    setIsTimerActive(true); 
  }, [difficulty, timeLimit]);

  const skipWord = () => {
     setMessage('Слово пропущено!');
     setIsTimerActive(false); 
     setTimeout(() => {
         startNewRound();
     }, 500);
  };

  useEffect(() => {
    startNewRound();
  }, [startNewRound]);

  useEffect(() => {
    if (!isTimerActive) return;

    if (timeLeft <= 0) {
      setIsTimerActive(false);
      onGameFinish(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isTimerActive, onGameFinish]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
    setMessage('');
  };

  const checkAnswer = () => {
    if (!currentWordObj) return;
    
    if (inputValue === currentWordObj.original) {
      setIsTimerActive(false); 
      onGameFinish(true);
    } else {
      setMessage('Невірно! Спробуйте ще раз.');
    }
  };

  const showHint = () => {
    if (!allowHints) {
        setMessage('Підказки вимкнено в налаштуваннях!');
        return;
    }
    
    if (currentWordObj && !isHintUsed) {
      setMessage(`Підказка: ${currentWordObj.hint}`);
      setIsHintUsed(true);
      setTimeLeft(prev => Math.max(0, prev - 10));
    }
  };

  return {
    scrambledLetters,
    inputValue,
    message,
    isHintUsed,
    timeLeft,
    handleInputChange,
    checkAnswer,
    showHint,
    skipWord,
    restart: startNewRound
  };
};