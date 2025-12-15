import React, { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import SettingsPage from "./pages/SettingsPage";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { SettingsProvider } from "./context/SettingsContext";
import "./styles/App.css";

const AppContent = () => {
  const [screen, setScreen] = useState("start");
  const [isWin, setIsWin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartGame = () => setScreen("game");
  const handleOpenSettings = () => setScreen("settings");

  const handleFinishGame = (winStatus) => {
    setIsWin(winStatus);
    setIsModalOpen(true);
  };

  const handleCloseModal = (action) => {
    setIsModalOpen(false);
    if (action === "restart") {
      setScreen("start");
      setTimeout(() => setScreen("game"), 0);
    } else {
      setScreen("start");
    }
  };

  return (
    <div className="app-container">
      {screen === "start" && (
        <>
          <StartPage onStart={handleStartGame} />
          <div style={{ marginTop: "10px" }}>
            <Button variant="secondary" onClick={handleOpenSettings}>
              Налаштування
            </Button>
          </div>
        </>
      )}

      {screen === "settings" && (
        <SettingsPage onBack={() => setScreen("start")} />
      )}

      {screen === "game" && <GamePage onFinish={handleFinishGame} />}

      <Modal isOpen={isModalOpen}>
        <h2>{isWin ? "🎉 Перемога!" : "😔 Час вийшов!"}</h2>
        <p style={{ color: "#666", margin: "20px 0" }}>
          Що будемо робити далі?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button onClick={() => handleCloseModal("menu")} variant="outline">
            В меню
          </Button>

          <Button onClick={() => handleCloseModal("restart")}>Ще раз</Button>
        </div>
      </Modal>
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

export default App;
