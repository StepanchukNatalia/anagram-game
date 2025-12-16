import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage'; 
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} /> 
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;