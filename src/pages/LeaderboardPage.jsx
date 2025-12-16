import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameLayout from '../components/layout/GameLayout';
import Button from '../components/ui/Button';
import { useLeaderboardStore } from '../store/useLeaderboardStore';

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const { records, clearLeaderboard } = useLeaderboardStore();

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    color: 'white',
    fontSize: '1rem'
  };

  const thStyle = {
    padding: '12px',
    borderBottom: '2px solid rgba(255,255,255,0.2)',
    textAlign: 'left',
    color: '#a5b4fc'
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  };

  return (
    <GameLayout title="🏆 Зала слави">
      
      {records.length === 0 ? (
        <div style={{ margin: '40px 0', color: '#ccc' }}>
          <p>Поки що немає результатів.</p>
          <p>Зіграйте гру, щоб потрапити сюди!</p>
        </div>
      ) : (
        <div style={{ width: '100%', overflowX: 'auto', marginBottom: '30px' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Складність</th>
                <th style={thStyle}>Час</th>
                <th style={thStyle}>Очки</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, index) => (
                <tr key={index} style={{ background: index === 0 ? 'rgba(255, 215, 0, 0.1)' : 'transparent' }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>
                    <span style={{ textTransform: 'uppercase', fontSize: '0.8em', opacity: 0.8 }}>
                        {rec.difficulty}
                    </span>
                  </td>
                  <td style={tdStyle}>{rec.timeLeft} сек</td>
                  <td style={{ ...tdStyle, fontWeight: 'bold', color: '#4ade80' }}>{rec.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Button variant="outline" onClick={() => navigate('/')}>В меню</Button>
        {records.length > 0 && (
           <Button variant="secondary" onClick={clearLeaderboard}>Очистити</Button>
        )}
      </div>
    </GameLayout>
  );
};

export default LeaderboardPage;