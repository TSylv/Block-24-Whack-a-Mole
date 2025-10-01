import { useGame } from "../context/GameContext.jsx";
import Hole from "./Hole.jsx";

export default function GameBoard() {
  const { score, restartGame } = useGame();

  return (
    <section className="board-wrap">
      <div className="scorebar">
        <div className="score">Score: {score}</div>
        <button onClick={restartGame}>Restart</button>
      </div>

      <div className="board">
        {Array.from({ length: 9 }).map((_, i) => (
          <Hole key={i} index={i} />
        ))}
      </div>
    </section>
  );
}