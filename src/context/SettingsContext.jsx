import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

const defaultSettings = {
  timeLimit: 60,
  allowHints: true, 
  difficulty: 'normal' 
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('anagramSettings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('anagramSettings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);