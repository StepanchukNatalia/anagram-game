import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import './styles/App.css';

function App() {
  const [screen, setScreen] = useState('start');
  const [isWin, setIsWin] = useState(false);

  const handleStartGame = () => {
    setScreen('game');
  };

  const handleFinishGame = (winStatus) => {
    setIsWin(winStatus);
    setScreen('result');
  };

  const handleRestart = () => {
    setScreen('start');
    setIsWin(false);
  };

  return (
    <div className="app-container">
      {screen === 'start' && <StartPage onStart={handleStartGame} />}
      {screen === 'game' && <GamePage onFinish={handleFinishGame} />}
      {screen === 'result' && <ResultPage onRestart={handleRestart} isWin={isWin} />}
    </div>
  );
}

export default App;