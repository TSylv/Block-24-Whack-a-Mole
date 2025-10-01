import { useGame } from "./context/GameContext.jsx";
import GameBoard from "./components/GameBoard.jsx";

function Welcome() {
  const { startGame } = useGame();
  return (
    <section>
      <p>
        Whack the mole wherever it pops up! Click <strong>Play</strong> to
        begin.
      </p>
      <button onClick={startGame}>Play</button>
    </section>
  );
}

export default function App() {
  const { isPlaying } = useGame();

  return (
    <div className="app">
      <h1>Whack a Mole</h1>
      {isPlaying ? <GameBoard /> : <Welcome />}
    </div>
  );
}
