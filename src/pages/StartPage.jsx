import React from 'react';
import { useNavigate } from 'react-router-dom'; // Імпортуємо хук
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';

const StartPage = () => {
  const navigate = useNavigate(); 
  const openProfile = () => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    navigate(`/profile/${randomId}`);
  };

  return (
    <GameLayout title="Анаграми">
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#e0e7ff' }}>
        Спробуйте розгадати зашифровані слова!
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '300px' }}>
        <Button onClick={() => navigate('/game')} variant="primary">Почати гру</Button>
        <Button onClick={() => navigate('/settings')} variant="secondary">Налаштування</Button>
        <Button onClick={openProfile} variant="outline">Мій профіль</Button>
      </div>
    </GameLayout>
  );
};

export default StartPage;
