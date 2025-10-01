import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

function randomIndex() {
  return Math.floor(Math.random() * 9);
}

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(randomIndex());

  function startGame() {
    setScore(0);
    setMoleIndex(randomIndex());
    setIsPlaying(true);
  }

  function restartGame() {
    setIsPlaying(false);
    setScore(0);
    setMoleIndex(randomIndex());
  }

  function whackMole() {
    setScore((s) => s + 1);
    setMoleIndex(randomIndex());
  }

  const value = {
    isPlaying,
    score,
    moleIndex,
    startGame,
    restartGame,
    whackMole,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside <GameProvider>");
  return ctx;
}