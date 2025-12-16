import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';

const ProfilePage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  return (
    <GameLayout title="Профіль гравця">
      <div style={{ color: '#e0e7ff', marginBottom: '30px' }}>
        <div style={{ 
            width: '80px', height: '80px', borderRadius: '50%', 
            background: 'rgba(255,255,255,0.2)', margin: '0 auto 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '30px'
        }}>
            👤
        </div>
        
        <h2>Користувач ID: {id}</h2>
        <p>Статус: Експерт з анаграм</p>
      </div>

      <Button onClick={() => navigate('/')} variant="outline">
        На головну
      </Button>
    </GameLayout>
  );
};

export default ProfilePage;