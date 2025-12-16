import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import { SettingsProvider } from './context/SettingsContext';
import './styles/App.css';

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SettingsProvider>
  );
}

export default App;